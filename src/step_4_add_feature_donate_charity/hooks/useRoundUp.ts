import { useMemo, useState } from 'react';

export const useRoundUp = (amount: number) => {
    const [agreeToDonate, setAgreeToDonate] = useState<boolean>(false);

    const { total, tip }: { total: number; tip: string } = useMemo(
        () => ({
            total: agreeToDonate ? Math.floor(amount + 1) : amount,
            tip: (Math.floor(amount + 1) - amount).toPrecision(1),
        }),
        [amount, agreeToDonate],
    );

    const updateAgreeToDonate = () =>
        setAgreeToDonate(agreeToDonate => !agreeToDonate);

    return { total, tip, agreeToDonate, updateAgreeToDonate };
};
