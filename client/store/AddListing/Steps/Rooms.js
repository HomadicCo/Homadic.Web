import React from 'react';
import { browserHistory } from 'react-router';
import FontAwesome from 'react-fontawesome';
import { currencies, rentalLengths, room } from '../../../data';
import Room from '../components/Room';

class Rooms extends React.Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleNextClick = this.handleNextClick.bind(this);
        this.handlePrevClick = this.handlePrevClick.bind(this);
    }

    handleChange(e) {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const key = target.name;

        this.props.updateInputProp(key, value);
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

    componentWillMount() {
        let { listing } = this.props.addListing;

        if (listing.rooms.length == 0) {
            this.props.addRoomToListing(room);
        }
    }

    render() {
        let { listing } = this.props.addListing;

        return (
            <form autoComplete="off" ref="roomsForm" noValidate>
                <h1 className="fancy blue display-4 mb-4">Rooms</h1>
                <div className="form-row">
                    <div className="form-group col-md-2">
                        <label htmlFor="inputCurrency" className="col-form-label">Currency <FontAwesome className="text-muted" name="money" /></label>
                        <select id="inputCurrency" name="currency" value={listing.currency} className="form-control" onChange={this.handleChange}>
                            {currencies.map((currency, i) => (
                                <option key={i} value={currency}>{currency}</option>)
                            )}
                        </select>
                    </div>
                    <div className="form-group col-md-3">
                        <label htmlFor="inputElectricity" className="col-form-label">Electricity <FontAwesome className="text-muted" name="plug" /></label>
                        <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                            <div className="input-group-addon">{listing.currency}</div>
                            <input type="number" name="bills.electricity" className="form-control" id="inputElectricity" value={listing.bills.electricity} onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="form-group col-md-3">
                        <label htmlFor="inputWater" className="col-form-label">Water <FontAwesome className="text-muted" name="shower" /></label>
                        <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                            <div className="input-group-addon">{listing.currency}</div>
                            <input type="number" name="bills.water" className="form-control" id="inputWater" value={listing.bills.water} onChange={this.handleChange} />
                        </div>
                    </div>
                </div>
                {listing.rooms.map((room, i) => <Room key={i} id={i} room={room} {...this.props} />)}
                <div className="row justify-content-center mt-4">
                    <div className="col-auto">
                        <button type="button" onClick={this.handlePrevClick} className="btn btn-outline-success mx-1"><FontAwesome name="caret-left" /> Listing</button>
                        <button type="button" onClick={this.handleNextClick} className="btn btn-success mx-1">Amenities <FontAwesome name="caret-right" /></button>
                    </div>
                </div>
            </form>
        )
    }
}

export default Rooms;