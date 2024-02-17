import { FC } from 'react';

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
    </div>
  );
};

export default PaymentHistory;
