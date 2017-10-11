import React from 'react';
import FontAwesome from 'react-fontawesome';
import { bedrooms, bathrooms, currencies, kitchen, rentalLengths } from '../../../data';

class RentalRate extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        let { length } = this.props;

        return (
            <div className="form-inline my-2">
                <label htmlFor="inputRate" className="col-form-label mr-2">Monthly rate</label>
                <input type="number" className="form-control mr-3" id="inputRate" />

                <label htmlFor="inputDeposit" className="col-form-label mr-2">Deposit</label>
                <input type="number" className="form-control mr-3" id="inputDeposit" />

                <label className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" />
                    <span className="custom-control-indicator"></span>
                    <span className="custom-control-description">{length.label}</span>
                </label>
            </div>
        )
    }
}

class Rooms extends React.Component {
    constructor(props) {
        super(props)
    }

    renderDetailsEditor() {
        return (
            <div>
                <div className="content-header">
                    <h5>Room <small><FontAwesome name="plus" /></small></h5>
                </div>
                <h5>Details</h5>
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <label htmlFor="inputBedrooms" className="col-form-label"><FontAwesome name="bed" /> Bedrooms</label>
                        <select id="inputBedrooms" className="form-control">
                            {bedrooms.map((bedroom, i) => (<option key={i} value={bedroom.value}>{bedroom.value}</option>))}
                        </select>
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="inputBathrooms" className="col-form-label"><FontAwesome name="bath" /> Bathrooms</label>
                        <select id="inputBathrooms" className="form-control">
                            {bathrooms.map((bathroom, i) => (<option key={i} value={bathroom.value}>{bathroom.value}</option>))}
                        </select>
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="inputKitchen" className="col-form-label"><FontAwesome name="cutlery" /> Kitchen</label>
                        <select id="inputKitchen" className="form-control">
                            {kitchen.map((item, i) => (<option key={i} value={item.value}>{item.value}</option>))}
                        </select>
                    </div>
                </div>
            </div>
        )
    }

    render() {
        return (
            <form autoComplete="off">
                <h3>Rooms</h3>
                <div className="form-row">
                    <div className="form-group col-md-2">
                        <label htmlFor="inputCurrency" className="col-form-label"><FontAwesome name="money" /> Currency</label>
                        <select id="inputCurrency" className="form-control">
                            {currencies.map((currency, i) => (
                                <option key={i} value={currency} selected={currency == "USD" ? true : false}>{currency}</option>)
                            )}
                        </select>
                    </div>
                    <div className="form-group col-md-3">
                        <label htmlFor="inputElectricity" className="col-form-label"><FontAwesome name="plug" /> Electricity</label>
                        <input type="number" className="form-control" id="inputElectricity" />
                    </div>
                    <div className="form-group col-md-3">
                        <label htmlFor="inputWater" className="col-form-label"><FontAwesome name="shower" /> Water</label>
                        <input type="number" className="form-control" id="inputWater" />
                    </div>
                </div>
                {this.renderDetailsEditor()}
                <h5>Rates</h5>
                {rentalLengths.map((length, i) => (<RentalRate key={i} length={length} />))}
            </form>
        )
    }
}

export default Rooms;