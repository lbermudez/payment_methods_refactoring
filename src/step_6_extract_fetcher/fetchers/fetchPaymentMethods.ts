import { RemotePaymentMethod } from '../types';
import { convertToPaymentMethods } from '../converters/convertToPaymentMethods';
import { PaymentMethod } from '../models/PaymentMethod';

const payInCash = new PaymentMethod({ name: 'cash' });

export const fetchPaymentMethods = async (): Promise<PaymentMethod[]> => {
    const url = 'http://localhost:8080/payment-methods';
    const response = await fetch(url);
    const methods: RemotePaymentMethod[] = await response.json();
    const convertedMethods = convertToPaymentMethods(methods);
    convertedMethods.push(payInCash);
    return convertedMethods;
};
