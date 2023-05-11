import {usePaymentMethods} from "../hooks/usePaymentMethods";
import {LocalPaymentMethod} from "../types";
import {PaymentMethods} from "./PaymentMethods";

export const Payment = ({ amount }: { amount : number }) => {
    const paymentMethods: LocalPaymentMethod[] = usePaymentMethods();
    return <>
        <div>
            <h3>Payment</h3>
            <PaymentMethods paymentMethods={paymentMethods}/>
            <button>${amount}</button>
        </div>
    </>;
}