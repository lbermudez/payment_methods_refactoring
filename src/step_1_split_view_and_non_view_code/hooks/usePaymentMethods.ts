import { useEffect, useState } from 'react';

interface LocalPaymentMethod {
    provider: string;
    label: string;
}

interface RemotePaymentMethod {
    name: string;
}

export const usePaymentMethods = () => {
    const [paymentMethods, setPaymentMethods] = useState<LocalPaymentMethod[]>(
        [],
    );

    useEffect(() => {
        const fetchPaymentMethods = async () => {
            const url = 'http://localhost:8080/payment-methods';
            const response = await fetch(url);
            const methods: RemotePaymentMethod[] = await response.json();

            if (methods.length > 0) {
                const extended: LocalPaymentMethod[] = methods.map(method => ({
                    provider: method.name,
                    label: `Pay with ${method.name}`,
                }));

                extended.push({ provider: 'cash', label: 'Pay in cash' });
                setPaymentMethods(extended);
            } else {
                setPaymentMethods([]);
            }
        };

        fetchPaymentMethods();
    }, []);

    return paymentMethods;
};
