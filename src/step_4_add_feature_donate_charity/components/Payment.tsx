import {usePaymentMethods} from "../hooks/usePaymentMethods";
import {PaymentMethods} from "./PaymentMethods";
import {PaymentMethod} from "../models/PaymentMethod";
import {DonationCheckbox} from "./DonationCheckbox";
import {useRoundUp} from "../hooks/useRoundUp";

export const formatCheckboxLabel = (agreeToDonate: boolean, tip: string) => agreeToDonate
    ? "Thanks for your donation."
    : `I would like to donate $${tip} to charity.`;


export const Payment = ({amount}: { amount: number }) => {
    const paymentMethods: PaymentMethod[] = usePaymentMethods();
    const {total, tip, agreeToDonate, updateAgreeToDonate} = useRoundUp(amount);
    return <>
        <div>
            <h3>Payment</h3>
            <PaymentMethods options={paymentMethods}/>
            <DonationCheckbox checked={agreeToDonate}
                              content={formatCheckboxLabel(agreeToDonate, tip)}
                              onChange={updateAgreeToDonate}/>
            <button>${total}</button>
        </div>
    </>;
}