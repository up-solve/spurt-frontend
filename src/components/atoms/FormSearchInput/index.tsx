import { FC } from 'react';
import { useFormContext } from 'react-hook-form';

import ErrorMessage from '@components/atoms/ErrorMessage';

export interface FormSearchInputProps {
  name: string;
  placeholder: string;
  hasError?: boolean;
  disabled?: boolean;
}

const FormSearchInput: FC<FormSearchInputProps> = ({
  name,
  hasError,
  ...props
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const error = errors[name]?.message as string | undefined;

  return (
    <div className="flex flex-col py-3 my-4 gap-y-1 desktop:py-2 desktop:my-4">
      <input
        className={`min-w-full px-3 py-2 my-3 tablet:text-lg tablet:px-3 desktop:px-3 tablet:py-2 desktop:py-2 desktop:my-1 text-lg focus:outline-none placeholder:text-grey border-2 border-solid rounded-lg text-black bg-white
        ${
          error || hasError
            ? 'border-red300 focus:border-red300'
            : 'border-purple100/60 focus:border-purple200'
        }`}
        {...register(name)}
        type="text"
        {...props}
      />
      {error ? <ErrorMessage errMessage={error} iconRequired /> : null}
    </div>
  );
};

export default FormSearchInput;
