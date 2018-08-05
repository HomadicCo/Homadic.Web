import React from 'react';
import { browserHistory } from 'react-router';
import EditAmenities from '../../../components/EditComponents/EditAmenities';
import EditInternet from '../../../components/EditComponents/EditInternet';

class Amenities extends React.Component {
    constructor(props) {
        super(props)

        this.handleNextClick = this.handleNextClick.bind(this);
        this.handlePrevClick = this.handlePrevClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentWillMount() {
        let { valid } = this.props.addListing;

        if (!valid.rooms) {
            browserHistory.push('/add/rooms');
        }
    }

    handleNextClick(e) {
        e.preventDefault();
        const form = this.amenitiesForm;

        if (form.checkValidity() == false) {
            form.classList.add('was-validated');
        } else {
            browserHistory.push('/add/notes');
        }
    }

    handlePrevClick(e) {
        e.preventDefault();
        browserHistory.push('/add/rooms');
    }

    handleChange(e) {
        const target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let key = target.name;

        if (key == 'wifi.type' && value == 'none') {
            this.props.updateInputProp('wifi.rate', 0);
            this.props.updateInputProp('wifi.download', 0);
            this.props.updateInputProp('wifi.upload', 0);
        }

        if (key == 'wifi.type' && value == 'free') {
            this.props.updateInputProp('wifi.rate', 0);
        }

        // check if int or string
        value = target.getAttribute('data-type') === 'int' ? parseFloat(value) : value;

        this.props.updateInputProp(key, value);
    }

    render() {
        let { listing } = this.props.addListing;

        return (
            <form autoComplete="off" ref={(c) => { this.amenitiesForm = c; }} noValidate>
                <EditAmenities handleChange={this.handleChange} amenities={listing.amenities} />
                <EditInternet handleChange={this.handleChange} wifi={listing.wifi} currency={listing.currency} />
                <div className="row justify-content-center mt-4">
                    <div className="col-auto">
                        <button type="button" onClick={this.handlePrevClick} className="btn btn-outline-success mx-1"><i className="fas fa-caret-left" /> Rooms</button>
                        <button type="button" onClick={this.handleNextClick} className="btn btn-success mx-1">Notes <i className="fas fa-caret-right" /></button>
                    </div>
                </div>
            </form>
        )
    }
}

export default Amenities;