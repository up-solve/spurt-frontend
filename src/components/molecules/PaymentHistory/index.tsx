import { FC } from 'react';
import { BiRupee } from 'react-icons/bi';

import { History } from '@interfaces/History';

export interface PaymentHistoryProps {
  history: History;
}

const PaymentHistory: FC<PaymentHistoryProps> = ({ history }) => {
  return (
    <div className="bg-bgWhite p-2 text-brown300 rounded-md flex flex-col">
      <p className="p-2">
        <span className="font-bold mr-2">Date: </span>
        {history.date}
      </p>
      <p className="p-2">
        <span className="font-bold mr-2">Review Count: </span>
        {history.reviewCount}
      </p>
      <p className="p-2">
        <span className="font-bold mr-2">New Count:</span>
        {history.newCount}
      </p>
      <p className="p-2 flex items-center">
        <span className="font-bold mr-2">Payment:</span>
        <span className="flex items-center">
          <BiRupee />
          {history.newCount * 100 + history.reviewCount * 50}
        </span>
      </p>
    </div>
  );
};

export default PaymentHistory;
