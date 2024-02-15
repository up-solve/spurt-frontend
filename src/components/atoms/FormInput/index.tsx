import { FC } from 'react';
import { useFormContext } from 'react-hook-form';

import ErrorMessage from '@components/atoms/ErrorMessage';

export interface FormInputProps {
  type: 'text' | 'email' | 'password' | 'number';
  name: string;
  placeholder: string;
  label: string;
  hasError?: boolean;
  disabled?: boolean;
  showPassword?: boolean;
}

const FormInput: FC<FormInputProps> = ({
  name,
  label,
  hasError,
  type,
  showPassword = false,
  ...props
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const error = errors[name]?.message as string | undefined;

  return (
    <div className="flex flex-col max-w-md py-3 my-4 gap-y-1 w-64 desktop:py-2 desktop:my-4 tablet:w-96 desktop:w-80">
      <label
        className="font-semibold text-purple-300 text-md tablet:text-lg desktop:text-md desktop:font-medium"
        htmlFor={label}
      >
        {label}
      </label>
      <input
        className={`min-w-full px-3 py-2 my-3 tablet:text-lg tablet:px-3 desktop:px-3 tablet:py-2 desktop:py-2 desktop:my-1 text-lg focus:outline-none placeholder:text-grey border-2 border-solid rounded-lg text-black bg-white
        ${
          error || hasError
            ? 'border-red300 focus:border-red300'
            : 'border-purple100/60 focus:border-purple200'
        }`}
        {...register(name)}
        type={type === 'password' ? (showPassword ? 'text' : 'password') : type}
        {...props}
        id={label}
      />
      {error ? <ErrorMessage errMessage={error} iconRequired /> : null}
    </div>
  );
};

export default FormInput;
