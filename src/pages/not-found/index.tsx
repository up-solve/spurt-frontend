import { FC } from 'react';

import SeoComponent from '@components/atoms/SeoComponent';

export interface Custom404PageProps {
  link: string;
  buttonText: string;
}

const Custom404Page: FC<Custom404PageProps> = ({ link, buttonText }) => {
  return (
    <>
      <SeoComponent title="404 Page Not Found" />
      <div className="">
        404 Page with link: {link} and buttonText: {buttonText}
      </div>
    </>
  );
};

export default Custom404Page;
