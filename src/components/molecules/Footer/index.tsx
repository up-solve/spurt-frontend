import { FC } from 'react';

export interface FooterProps {}

const Footer: FC<FooterProps> = () => {
  return (
    <footer className="flex items-center justify-center w-full px-4 py-6 tablet:py-3 desktop:py-4 tablet:px-10 desktop:px-20">
      <p className="font-sans text-sm font-medium text-brown300">
        &copy; {new Date().getFullYear()} SPURT. All copyrights reserved.
      </p>
    </footer>
  );
};

export default Footer;
