import { useEffect, useState } from 'react';
import { RemotePaymentMethod } from '../types';
import { PaymentMethod } from '../models/PaymentMethod';
import { convertToPaymentMethods } from '../converters/convertToPaymentMethods';

const payInCash = new PaymentMethod({ name: 'cash' });

export const usePaymentMethods = () => {
    const [paymentMethods, setPaymentMethods] = useState<PaymentMethod[]>([]);

    useEffect(() => {
        const fetchPaymentMethods = async () => {
            const url = 'http://localhost:8080/payment-methods';
            const response = await fetch(url);
            const methods: RemotePaymentMethod[] = await response.json();

            const extended: PaymentMethod[] = convertToPaymentMethods(methods);
            extended.push(payInCash);
            setPaymentMethods(extended);
        };

        fetchPaymentMethods();
    }, []);

    return paymentMethods;
};
