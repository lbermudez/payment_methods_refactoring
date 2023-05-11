import {LocalPaymentMethod} from "../types";

export const PaymentMethods = ({ paymentMethods }: {paymentMethods: LocalPaymentMethod[]}) => (
    <div className={'vertical-labels'}>
        {
            paymentMethods.map((method) => (
                <label key={method.provider}>
                    <input
                        type="radio"
                        name="payment"
                        value={method.provider}
                        defaultChecked={method.provider === "cash"}
                    />
                    <span>{method.label}</span>
                </label>
            ))
        }
    </div>
);