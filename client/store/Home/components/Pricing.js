import React from 'react';
import FontAwesome from 'react-fontawesome';

class Pricing extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { home } = this.props;

        return (
            <div>
                <div className="content-header">
                    <h5><FontAwesome name="dollar" /> Monthly Price ({home.currency})</h5>
                </div>
                <div className="m-3">
                    <p><strong>Monthly:</strong> {home.rental_details.one_month.base_price}</p>
                    <p><strong>3 months:</strong> {home.rental_details.three_months.base_price}</p>
                    <p><strong>6 months:</strong> {home.rental_details.six_months.base_price}</p>
                </div>
            </div>
        )
    }
}

export default Pricing;
