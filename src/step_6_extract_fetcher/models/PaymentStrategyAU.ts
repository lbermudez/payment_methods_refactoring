import { PaymentStrategy } from './PaymentStrategy';

export function roundUp(amount: number): number {
    return Math.floor(amount + 1);
}

export class PaymentStrategyAU implements PaymentStrategy {
    getRoundUpAmount(amount: number): number {
        return roundUp(amount);
    }

    getTip(amount: number): number {
        return parseFloat(
            (this.getRoundUpAmount(amount) - amount).toPrecision(1),
        );
    }
}
