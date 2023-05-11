import {RemotePaymentMethod} from "../types";

export class PaymentMethod {
    private remotePaymentMethod: RemotePaymentMethod;

    constructor(remotePaymentMethod: RemotePaymentMethod) {
        this.remotePaymentMethod = remotePaymentMethod;
    }

    get provider(): string {
        return this.remotePaymentMethod.name;
    }

    get label(): string {
        return this.provider === 'cash'
            ? `Pay in ${this.provider}`
            : `Pay with ${this.provider}`
    }

    get isDefaultMethod() {
        return this.provider === 'cash';
    }
}