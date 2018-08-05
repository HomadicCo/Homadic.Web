import React from 'react';
import { currencies } from '../../data';

class EditBills extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        let { bills, currency, handleChange } = this.props;

        return (
            <div>
                <h3 className="fancy blue display-4 mb-4">Bills</h3>
                <div className="form-row">
                    <div className="form-group col-md-2">
                        <label htmlFor="inputCurrency" className="col-form-label">Currency <i className="text-muted fas fa-dollar-sign" /></label>
                        <select id="inputCurrency" name="currency" value={currency} className="form-control" onChange={handleChange}>
                            {currencies.map((currency, i) => (
                                <option key={i} value={currency}>{currency}</option>)
                            )}
                        </select>
                    </div>
                    <div className="form-group col">
                        <label htmlFor="inputElectricity" className="col-form-label">Electricity <i className="text-muted fas fa-plug" /></label>
                        <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                            <div className="input-group-addon">{currency}</div>
                            <input type="text" name="bills.electricity" className="form-control" id="inputElectricity" value={bills.electricity} onChange={handleChange} maxLength={50} />
                        </div>
                        <small id="electricityHelp" className="form-text text-muted">Eg: cost per unit</small>
                    </div>
                    <div className="form-group col">
                        <label htmlFor="inputWater" className="col-form-label">Water <i className="text-muted fas fa-shower" /></label>
                        <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                            <div className="input-group-addon">{currency}</div>
                            <input type="text" name="bills.water" className="form-control" id="inputWater" value={bills.water} onChange={handleChange} maxLength={50} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default EditBills;