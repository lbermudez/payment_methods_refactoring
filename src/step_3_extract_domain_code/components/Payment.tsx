import { usePaymentMethods } from '../hooks/usePaymentMethods';
import { PaymentMethods } from './PaymentMethods';
import { PaymentMethod } from '../models/PaymentMethod';

export const Payment = ({ amount }: { amount: number }) => {
    const paymentMethods: PaymentMethod[] = usePaymentMethods();
    return (
        <>
            <div>
                <h3>Payment</h3>
                <PaymentMethods options={paymentMethods} />
                <button>${amount}</button>
            </div>
        </>
    );
};
