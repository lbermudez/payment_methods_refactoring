import { useMemo, useState } from 'react';
import { PaymentStrategy } from '../models/PaymentStrategy';

export const useRoundUp = (amount: number, payment: PaymentStrategy) => {
    const [agreeToDonate, setAgreeToDonate] = useState<boolean>(false);

    const { total, tip }: { total: number; tip: number } = useMemo(
        () => ({
            total: agreeToDonate ? payment.getRoundUpAmount(amount) : amount,
            tip: payment.getTip(amount),
        }),
        [amount, agreeToDonate, payment],
    );

    const updateAgreeToDonate = () =>
        setAgreeToDonate(agreeToDonate => !agreeToDonate);

    return { total, tip, agreeToDonate, updateAgreeToDonate };
};
