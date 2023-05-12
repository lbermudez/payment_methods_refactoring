import { PaymentStrategyAU, roundUp } from './PaymentStrategyAU';

describe('PaymentStrategyAU', () => {
    let paymentStrategy: PaymentStrategyAU;

    beforeEach(() => {
        paymentStrategy = new PaymentStrategyAU();
    });

    describe('getRoundUpAmount', () => {
        test('rounds up the amount correctly', () => {
            const amount = 10.5;
            const roundedAmount = paymentStrategy.getRoundUpAmount(amount);
            expect(roundedAmount).toBe(11);
        });
    });

    describe('getTip', () => {
        test('calculates the tip correctly', () => {
            const amount = 10.5;
            const tip = paymentStrategy.getTip(amount);
            expect(tip).toBe(0.5);
        });
    });
});

describe('roundUp', () => {
    test('rounds up the number correctly', () => {
        const roundedNumber = roundUp(10.5);
        expect(roundedNumber).toBe(11);
    });
});
