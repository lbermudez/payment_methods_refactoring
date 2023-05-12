import { CountryPayment } from './models/CountryPayment';

export const formatCheckboxLabel = (
    agreeToDonate: boolean,
    tip: number,
    countryPayment: CountryPayment,
) =>
    agreeToDonate
        ? 'Thanks for your donation.'
        : `I would like to donate ${countryPayment.currencySign}${tip} to charity.`;

export const formatButtonLabel = (
    total: number,
    countryPayment: CountryPayment,
) => countryPayment.currencySign + total;
