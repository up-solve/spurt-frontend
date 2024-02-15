import { FC, ReactNode } from 'react';
import { Link } from 'react-router-dom';

export interface NavBarLinkProps {
  type: 'mobile' | 'desktop';
  href: string;
  children: ReactNode;
  active?: boolean;
  onClick?: () => void;
}

const NavBarLink: FC<NavBarLinkProps> = ({
  type,
  href,
  children,
  active,
  onClick,
}) => {
  return (
    <Link
      to={href}
      onClick={onClick}
      className="flex items-center duration-150 ease-in-out "
    >
      {type === 'mobile' && (
        <li className="py-4 text-lg font-medium">{children}</li>
      )}
      {type === 'desktop' && (
        <li
          className={`ml-10 font-medium hover:underline ${active && 'underline'}`}
        >
          {children}
        </li>
      )}
    </Link>
  );
};

export default NavBarLink;
