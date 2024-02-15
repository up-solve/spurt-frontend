import { FC } from 'react';

import { APP_NAME } from '@constants/app';
import { Link } from 'react-router-dom';

export interface BrandLogoProps {
  link: string;
}

const BrandLogo: FC<BrandLogoProps> = ({ link }) => {
  return (
    <Link to={link}>
      <div className="text-xl font-bold text-blue300">
        <h1>{APP_NAME.toString().toUpperCase()}</h1>
      </div>
    </Link>
  );
};

export default BrandLogo;
