import React from 'react';
import './App.css';
import { Payment } from './step_5_add_feat_countries/components/Payment';
import { CountryPayment } from './step_5_add_feat_countries/models/CountryPayment';
import { PaymentStrategyAU } from './step_5_add_feat_countries/models/PaymentStrategyAU';

function App() {
    return (
        <div className="App">
            <main className="App-main">
                <section>
                    <Payment
                        amount={99.2}
                        countryPayment={
                            new CountryPayment('$', new PaymentStrategyAU())
                        }
                    />
                </section>
            </main>
        </div>
    );
}

export default App;
