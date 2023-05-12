import { RemotePaymentMethod } from '../types';
import { PaymentMethod } from '../models/PaymentMethod';

export const convertToPaymentMethods = (methods: RemotePaymentMethod[]) => {
    return methods.length === 0
        ? []
        : methods.map(method => new PaymentMethod(method));
};
