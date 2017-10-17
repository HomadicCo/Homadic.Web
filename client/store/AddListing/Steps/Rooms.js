import React from 'react';
import { browserHistory } from 'react-router';
import FontAwesome from 'react-fontawesome';
import { bedrooms, bathrooms, currencies, kitchen, rentalLengths, serviced } from '../../../data';

class RentalRate extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            checked: false
        }

        this.handleChecked = this.handleChecked.bind(this);
    }

    handleChecked(e) {
        this.setState({ checked: e.target.checked });
    }

    render() {
        let { currency, length } = this.props;
        let { checked } = this.state;

        return (
            <div className="content-box"    >
                <div className="form-inline my-2">
                    <label htmlFor="inputRate" className="col-form-label mr-2">Monthly</label>
                    <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                        <div className="input-group-addon">{currency}</div>
                        <input type="number" className="form-control mr-3" id="inputRate" required={checked} />
                        <div className="invalid-feedback">
                            The listing needs a name!
                        </div>
                    </div>

                    <label htmlFor="inputDeposit" className="col-form-label mr-2">Deposit</label>
                    <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                        <div className="input-group-addon">{currency}</div>
                        <input type="number" className="form-control mr-3" id="inputDeposit" required={checked} />
                    </div>

                    <label className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" onChange={this.handleChecked} checked={checked} />
                        <span className="custom-control-indicator"></span>
                        <span className="custom-control-description">{length.label}</span>
                    </label>
                </div>
            </div>
        )
    }
}

class Room extends React.Component {
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
                    <div className="form-group col-md-3">
                        <label className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" />
                            <span className="custom-control-indicator"></span>
                            <span className="custom-control-description">Serviced <FontAwesome name="user" /></span>
                        </label>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-3">
                        <label htmlFor="inputBedrooms" className="col-form-label">Bedrooms <FontAwesome className="text-muted" name="bed" /></label>
                        <select id="inputBedrooms" className="form-control">
                            {bedrooms.map((bedroom, i) => (<option key={i} value={bedroom.value}>{bedroom.value}</option>))}
                        </select>
                    </div>
                    <div className="form-group col-md-3">
                        <label htmlFor="inputBathrooms" className="col-form-label">Bathrooms <FontAwesome className="text-muted" name="bath" /></label>
                        <select id="inputBathrooms" className="form-control">
                            {bathrooms.map((bathroom, i) => (<option key={i} value={bathroom.value}>{bathroom.value}</option>))}
                        </select>
                    </div>
                    <div className="form-group col-md-3">
                        <label htmlFor="inputKitchen" className="col-form-label">Kitchen <FontAwesome className="text-muted" name="cutlery" /></label>
                        <select id="inputKitchen" className="form-control">
                            {kitchen.map((item, i) => (<option key={i} value={item.value}>{item.value}</option>))}
                        </select>
                    </div>
                </div>
            </div>
        )
    }

    render() {
        let { currency } = this.state;
        return (
            <div>
                {this.renderDetailsEditor()}
                <h5>Rates</h5>
                {rentalLengths.map((length, i) => (<RentalRate key={i} length={length} currency={currency} />))}
                <div className="row justify-content-center mt-4">
                    <div className="col-auto">
                        <button type="button" onClick={this.handlePrevClick} className="btn btn-outline-success mx-1"><FontAwesome name="caret-left" /> Listing</button>
                        <button type="button" onClick={this.handleNextClick} className="btn btn-success mx-1">Amenities <FontAwesome name="caret-right" /></button>
                    </div>
                </div>
            </div>
        )
    }
}

class Rooms extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            currency: "USD"
        }

        this.changeCurrency = this.changeCurrency.bind(this);
        this.handleNextClick = this.handleNextClick.bind(this);
        this.handlePrevClick = this.handlePrevClick.bind(this);
    }

    changeCurrency(e) {
        this.setState({ currency: e.target.value });
    }

    handleNextClick(e) {
        e.preventDefault();
        const form = this.refs.roomsForm;

        if (form.checkValidity() == false) {
            form.classList.add("was-validated");
        } else {
            browserHistory.push("/add/amenities");
        }
    }

    handlePrevClick(e) {
        e.preventDefault();
        browserHistory.push("/add/listing");
    }

    renderDetailsEditor() {
        return (
            <div>
                <div className="content-header">
                    <h5>Room <small><FontAwesome name="plus" /></small></h5>
                </div>
                <h5>Details</h5>
                <div className="form-row">
                    <div className="form-group col-md-3">
                        <label className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" />
                            <span className="custom-control-indicator"></span>
                            <span className="custom-control-description">Serviced <FontAwesome name="user" /></span>
                        </label>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-3">
                        <label htmlFor="inputBedrooms" className="col-form-label">Bedrooms <FontAwesome className="text-muted" name="bed" /></label>
                        <select id="inputBedrooms" className="form-control">
                            {bedrooms.map((bedroom, i) => (<option key={i} value={bedroom.value}>{bedroom.value}</option>))}
                        </select>
                    </div>
                    <div className="form-group col-md-3">
                        <label htmlFor="inputBathrooms" className="col-form-label">Bathrooms <FontAwesome className="text-muted" name="bath" /></label>
                        <select id="inputBathrooms" className="form-control">
                            {bathrooms.map((bathroom, i) => (<option key={i} value={bathroom.value}>{bathroom.value}</option>))}
                        </select>
                    </div>
                    <div className="form-group col-md-3">
                        <label htmlFor="inputKitchen" className="col-form-label">Kitchen <FontAwesome className="text-muted" name="cutlery" /></label>
                        <select id="inputKitchen" className="form-control">
                            {kitchen.map((item, i) => (<option key={i} value={item.value}>{item.value}</option>))}
                        </select>
                    </div>
                </div>
            </div>
        )
    }

    render() {
        let { currency } = this.state;
        return (
            <form autoComplete="off" ref="roomsForm" noValidate>
                <h3>Rooms</h3>
                <div className="form-row">
                    <div className="form-group col-md-2">
                        <label htmlFor="inputCurrency" className="col-form-label">Currency <FontAwesome className="text-muted" name="money" /></label>
                        <select id="inputCurrency" defaultValue="USD" className="form-control" onChange={this.changeCurrency}>
                            {currencies.map((currency, i) => (
                                <option key={i} value={currency}>{currency}</option>)
                            )}
                        </select>
                    </div>
                    <div className="form-group col-md-3">
                        <label htmlFor="inputElectricity" className="col-form-label">Electricity <FontAwesome className="text-muted" name="plug" /></label>
                        <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                            <div className="input-group-addon">{currency}</div>
                            <input type="number" className="form-control" id="inputElectricity" />
                        </div>
                    </div>
                    <div className="form-group col-md-3">
                        <label htmlFor="inputWater" className="col-form-label">Water <FontAwesome className="text-muted" name="shower" /></label>
                        <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                            <div className="input-group-addon">{currency}</div>
                            <input type="number" className="form-control" id="inputWater" />
                        </div>
                    </div>
                </div>
                {this.renderDetailsEditor()}
                <Room />
            </form>
        )
    }
}

export default Rooms;