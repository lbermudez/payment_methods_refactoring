import { usePaymentMethods } from '../hooks/usePaymentMethods';
import { PaymentMethods } from './PaymentMethods';
import { PaymentMethod } from '../models/PaymentMethod';
import { DonationCheckbox } from './DonationCheckbox';
import { useRoundUp } from '../hooks/useRoundUp';
import { formatButtonLabel, formatCheckboxLabel } from '../utils';
import { CountryPayment } from '../models/CountryPayment';

export const Payment = ({
    amount,
    countryPayment,
}: {
    amount: number;
    countryPayment: CountryPayment;
}) => {
    const paymentMethods: PaymentMethod[] = usePaymentMethods();
    const { total, tip, agreeToDonate, updateAgreeToDonate } = useRoundUp(
        amount,
        countryPayment,
    );
    return (
        <>
            <div>
                <h3>Payment</h3>
                <PaymentMethods options={paymentMethods} />
                <DonationCheckbox
                    checked={agreeToDonate}
                    content={formatCheckboxLabel(
                        agreeToDonate,
                        tip,
                        countryPayment,
                    )}
                    onChange={updateAgreeToDonate}
                />
                <button>{formatButtonLabel(total, countryPayment)}</button>
            </div>
        </>
    );
};
