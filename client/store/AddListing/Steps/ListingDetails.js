import React from 'react';
import { browserHistory } from 'react-router';
import { apiGetGooglePlace } from '../../../api';
import { emptyListing, rentalTypes } from '../../../data';

class ListingDetails extends React.Component {
    constructor(props) {
        super(props)

        this.handleChange = this.handleChange.bind(this);
        this.handleNextClick = this.handleNextClick.bind(this);
    }

    componentWillMount() {
        let { addListing, clearNewListing, setListingFromGoogleMaps, setLoadingStatus } = this.props;

        if (addListing.listing.google_place_id != addListing.ui.gmid) {
            setLoadingStatus(true);
            clearNewListing(emptyListing);
            apiGetGooglePlace(addListing.ui.gmid).then(response => {
                if (response.data.slug != null) {
                    browserHistory.push('/listing/' + response.data.slug);
                }
                setListingFromGoogleMaps(response.data.place);
                setLoadingStatus(false);
            }).catch(() => {
                setLoadingStatus(false);
                browserHistory.push('/');
            });
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
        const form = this.listingForm;

        if (form.checkValidity() == false) {
            form.classList.add('was-validated');
        } else {
            browserHistory.push('/add/rooms');
        }
    }

    render() {
        let { listing } = this.props.addListing;

        return (
            <form autoComplete="off" ref={(c) => { this.listingForm = c; }} noValidate>
                <h1 className="fancy blue display-4 mb-4">Listing details</h1>
                <div className="form-row">
                    <div className="form-group col-md-9">
                        <label htmlFor="inputListingName" className="col-form-label">Listing name*</label>
                        <input type="text" className="form-control" name="name" value={listing.name} id="inputListingName" placeholder="Listing name" maxLength={50} required />
                        <div className="invalid-feedback">
                            The listing needs a name!
                        </div>
                    </div>
                    <div className="form-group col-md-3">
                        <label htmlFor="inputListingType" className="col-form-label">Listing type*</label>
                        <select id="inputListingType" name="type" value={listing.type} className="form-control" onChange={this.handleChange} required>
                            {rentalTypes.map((type, i) => (<option key={i} value={type.value}>{type.name}</option>))}
                        </select>
                    </div>
                </div>
                <div className="content-header">
                    <h5>Contact details</h5>
                </div>
                <div className="form-group">
                    <label htmlFor="inputAddress" className="col-form-label">Address*</label>
                    <input type="text" name="address" value={listing.address} className="form-control" id="inputAddress" placeholder="123 Nomad St" required />
                    <div className="invalid-feedback">
                        Please provide the address.
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <label htmlFor="inputPhone" className="col-form-label">Phone</label>
                        <input type="tel" name="contact_details.phone_number" value={listing.contact_details.phone_number} className="form-control" id="inputPhone" onChange={this.handleChange} maxLength={50} />
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="inputEmail" className="col-form-label">Email</label>
                        <input type="email" name="contact_details.email" value={listing.contact_details.email} className="form-control" id="inputEmail" onChange={this.handleChange} maxLength={50} />
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="inputUrl" className="col-form-label">URL</label>
                        <input type="url" name="website" value={listing.contact_details.website} className="form-control" id="inputUrl" onChange={this.handleChange} />
                    </div>
                </div>
                <div className="content-header">
                    <h5>Social</h5>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <label htmlFor="inputFacebook" className="col-form-label">Facebook URL <i className="text-muted fab fa-facebook-square" /></label>
                        <input type="text" name="social_details.facebook" value={listing.social_details.facebook} className="form-control" id="inputFacebook" onChange={this.handleChange} />
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="inputInstagram" className="col-form-label">Instagram Handle <i className="text-muted fab fa-instagram" /></label>
                        <input type="text" name="social_details.instagram" value={listing.social_details.instagram} className="form-control" id="inputInstagraam" onChange={this.handleChange} />
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="inputTwitter" className="col-form-label">Twitter Handle <i className="text-muted fab fa-twitter" /></label>
                        <input type="text" name="social_details.twitter" value={listing.social_details.twitter} className="form-control" id="inputTwitter" onChange={this.handleChange} />
                    </div>
                </div>
                <div className="row justify-content-center mt-4">
                    <div className="col-auto">
                        <button type="button" onClick={this.handleNextClick} className="btn btn-success mx-1">Next <i className="fas fa-caret-right" /></button>
                    </div>
                </div>
            </form>
        )
    }
}

export default ListingDetails;