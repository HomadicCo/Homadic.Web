import React from 'react';
import FontAwesome from 'react-fontawesome';
import { bedrooms, bathrooms, kitchen, rentalLengths } from '../../../data';

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
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    roomTitle() {
        let { room } = this.props;

        let serviced = "";
        switch (room.serviced) {
            case false:
                serviced = "";
                break;
            case 1:
                serviced = "Serviced, ";
                break;
        }

        let bedroom = "";
        switch (room.bedrooms) {
            case 0:
                bedroom = "Studio";
                break;
            case 1:
                bedroom = "1 bedroom";
                break;
            case 2:
                bedroom = "2 bedroom";
                break;
            case 3:
                bedroom = "3 bedroom";
                break;
        }

        let bathroom = "";
        switch (room.bathrooms) {
            case 1:
                bathroom = "1 bathroom";
                break;
            case 2:
                bathroom = "2 bathroom";
                break;
        }

        return serviced + bedroom + ", " + bathroom;
    }

    handleChange(e) {
        const target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let key = target.name;

        // check if int or string
        value = target.getAttribute('data-type') === 'int' ? parseFloat(value) : value;

        this.props.updateInputProp(key, value);
    }

    render() {
        let { addListing, id, room } = this.props;

        return (
            <div>
                <div className="content-header">
                    <h5>{this.roomTitle()} <small><FontAwesome name="plus" /></small></h5>
                </div>
                <h5>Details</h5>
                <div className="form-row">
                    <div className="form-group col-md-3">
                        <label className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" name={"rooms[" + id + "].serviced"} value={room.serviced} onChange={this.handleChange} />
                            <span className="custom-control-indicator"></span>
                            <span className="custom-control-description">Serviced <FontAwesome name="user" /></span>
                        </label>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-3">
                        <label htmlFor="inputBedrooms" className="col-form-label">Bedrooms <FontAwesome className="text-muted" name="bed" /></label>
                        <select id="inputBedrooms" className="form-control" data-type="int" name={"rooms[" + id + "].bedrooms"} value={room.bedrooms} onChange={this.handleChange}>
                            {bedrooms.map((bedroom, i) => (<option key={i} value={bedroom.value}>{bedroom.name}</option>))}
                        </select>
                    </div>
                    <div className="form-group col-md-3">
                        <label htmlFor="inputBathrooms" className="col-form-label">Bathrooms <FontAwesome className="text-muted" name="bath" /></label>
                        <select id="inputBathrooms" className="form-control" data-type="int" name={"rooms[" + id + "].bathrooms"} value={room.bathrooms} onChange={this.handleChange}>
                            {bathrooms.map((bathroom, i) => (<option key={i} value={bathroom.value}>{bathroom.name}</option>))}
                        </select>
                    </div>
                    <div className="form-group col-md-3">
                        <label htmlFor="inputKitchen" className="col-form-label">Kitchen <FontAwesome className="text-muted" name="cutlery" /></label>
                        <select id="inputKitchen" className="form-control" name={"rooms[" + id + "].kitchen"} value={room.kitchen} onChange={this.handleChange}>
                            {kitchen.map((item, i) => (<option key={i} value={item.value}>{item.name}</option>))}
                        </select>
                    </div>
                </div>
                <h5>Rates</h5>
                {rentalLengths.map((length, i) => (<RentalRate key={i} length={length} currency={addListing.listing.currency} />))}
            </div>
        )
    }
}

export default Room;