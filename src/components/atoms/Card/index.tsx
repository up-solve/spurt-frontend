import { FC } from 'react';
import { FaHandHoldingMedical, FaUserCog } from 'react-icons/fa';
import { MdOutlineAttachMoney } from 'react-icons/md';
import { Link } from 'react-router-dom';

export interface CardProps {
  type: 'pharmacist' | 'admin' | 'payment';
  heading: string;
  link: string;
}

const Card: FC<CardProps> = ({ type, heading, link }) => {
  return (
    <Link to={link}>
      <div className="relative flex items-center justify-around gap-3 flex-col mt-6 p-4 text-purple300 bg-white shadow-md rounded-xl w-full">
        <div className="p-2">
          {type === 'pharmacist' ? (
            <FaHandHoldingMedical
              className="bg-pink300 text-white rounded-full p-4"
              size="60"
            />
          ) : type === 'admin' ? (
            <FaUserCog
              className="bg-pink300 text-white rounded-full p-4"
              size="60"
            />
          ) : (
            <MdOutlineAttachMoney
              className="bg-pink300 text-white rounded-full p-4"
              size="60"
            />
          )}
        </div>
        <h5 className="p-2 mb-2 font-sans text-xl font-semibold text-purple300">
          {heading}
        </h5>
      </div>
    </Link>
  );
};

export default Card;
