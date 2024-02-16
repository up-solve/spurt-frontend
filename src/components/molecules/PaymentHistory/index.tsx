import { FC } from 'react';

import { History } from '@interfaces/History';

export interface PaymentHistoryProps {
  history: History;
}

const PaymentHistory: FC<PaymentHistoryProps> = ({ history }) => {
  return (
    <div className="bg-bgWhite grid p-2 rounded-md grid-cols-3">
      <p className="p-2">{history.date}</p>
      <p className="p-2">{history.reviewCount}</p>
      <p className="p-2">{history.newCount}</p>
    </div>
  );
};

export default PaymentHistory;
