import { PaymentStrategy } from './PaymentStrategy';

export class PaymentStrategyAU implements PaymentStrategy {
    getRoundUpAmount(amount: number): number {
        return Math.floor(amount + 1);
    }

    getTip(amount: number): number {
        return parseFloat(
            (this.getRoundUpAmount(amount) - amount).toPrecision(1),
        );
    }
}
