import React from 'react';
import { browserHistory } from 'react-router';
import BillsEditor from '../../../components/EditComponents/BillsEditor';
import RoomsEditor from '../../../components/EditComponents/RoomsEditor';

class Rooms extends React.Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleNextClick = this.handleNextClick.bind(this);
        this.handlePrevClick = this.handlePrevClick.bind(this);
    }

    componentWillMount() {
        let { valid } = this.props.addListing;

        if (!valid.listing) {
            browserHistory.push('/add/listing');
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

    render() {
        let { listing } = this.props.addListing;

        return (
            <form autoComplete="off" ref={(c) => { this.roomsForm = c; }} noValidate>
                <BillsEditor bills={listing.bills} currency={listing.currency} handleChange={this.handleChange} />
                <RoomsEditor rooms={listing.rooms} {...this.props} />
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