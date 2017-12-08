import React from 'react';
import { browserHistory } from 'react-router';
import { currencies, room } from '../../../data';
import Room from '../components/Room';

class Rooms extends React.Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleNextClick = this.handleNextClick.bind(this);
        this.handlePrevClick = this.handlePrevClick.bind(this);
        this.handleAddNewRoomClick = this.handleAddNewRoomClick.bind(this);
    }

    componentWillMount() {
        let { listing, valid } = this.props.addListing;

        if (!valid.listing) {
            browserHistory.push('/add/listing');
        }

        if (listing.rooms.length == 0) {
            this.props.addRoomToListing(room);
        }
    }

    handleChange(e) {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const key = target.name;

        this.props.updateInputProp(key, value);
    }

    handleNextClick(e) {
        e.preventDefault();
        const form = this.roomsForm;

        if (form.checkValidity() == false) {
            form.classList.add('was-validated');
        } else {
            browserHistory.push('/add/amenities');
        }
    }

    handlePrevClick(e) {
        e.preventDefault();
        browserHistory.push('/add/listing');
    }

    handleAddNewRoomClick(e) {
        e.preventDefault();
        this.props.addRoomToListing(room);
    }

    render() {
        let { listing } = this.props.addListing;

        return (
            <form autoComplete="off" ref={(c) => { this.roomsForm = c; }} noValidate>
                <h1 className="fancy blue display-4 mb-4">Rooms</h1>
                <div className="form-row">
                    <div className="form-group col-md-2">
                        <label htmlFor="inputCurrency" className="col-form-label">Currency <i className="text-muted fas fa-dollar-sign" /></label>
                        <select id="inputCurrency" name="currency" value={listing.currency} className="form-control" onChange={this.handleChange}>
                            {currencies.map((currency, i) => (
                                <option key={i} value={currency}>{currency}</option>)
                            )}
                        </select>
                    </div>
                    <div className="form-group col">
                        <label htmlFor="inputElectricity" className="col-form-label">Electricity <i className="text-muted fas fa-plug" /></label>
                        <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                            <div className="input-group-addon">{listing.currency}</div>
                            <input type="text" name="bills.electricity" className="form-control" id="inputElectricity" value={listing.bills.electricity} onChange={this.handleChange} maxLength={50} />
                        </div>
                        <small id="electricityHelp" className="form-text text-muted">Eg: cost per unit</small>
                    </div>
                    <div className="form-group col">
                        <label htmlFor="inputWater" className="col-form-label">Water <i className="text-muted fas fa-shower" /></label>
                        <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                            <div className="input-group-addon">{listing.currency}</div>
                            <input type="text" name="bills.water" className="form-control" id="inputWater" value={listing.bills.water} onChange={this.handleChange} maxLength={50} />
                        </div>
                    </div>
                </div>
                {listing.rooms.map((room, i) => <Room key={i} id={i} room={room} {...this.props} />)}
                {listing.rooms.length < 6 ? <button type="button" className="btn btn-action btn-sm" onClick={this.handleAddNewRoomClick}>Add room <i className="fas fa-plus" /></button> : <p>Only six rooms allowed for now.</p>}
                <div className="row justify-content-center mt-4">
                    <div className="col-auto">
                        <button type="button" onClick={this.handlePrevClick} className="btn btn-outline-success mx-1"><i className="fas fa-caret-left" /> Listing</button>
                        <button type="button" onClick={this.handleNextClick} className="btn btn-success mx-1">Amenities <i className="fas fa-caret-right" /></button>
                    </div>
                </div>
            </form>
        )
    }
}

export default Rooms;