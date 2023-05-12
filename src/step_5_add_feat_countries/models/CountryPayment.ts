import { PaymentStrategy } from './PaymentStrategy';

export class CountryPayment implements PaymentStrategy {
    private paymentStrategy: PaymentStrategy;
    private _currencySign: string;

    constructor(currencySign: string, paymentStrategy: PaymentStrategy) {
        this._currencySign = currencySign;
        this.paymentStrategy = paymentStrategy;
    }

    get currencySign(): string {
        return this._currencySign;
    }

    getRoundUpAmount(amount: number): number {
        return this.paymentStrategy.getRoundUpAmount(amount);
    }

    getTip(amount: number): number {
        return this.paymentStrategy.getTip(amount);
    }
}
