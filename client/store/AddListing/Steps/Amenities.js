import React from 'react';
import { browserHistory } from 'react-router';
import FontAwesome from 'react-fontawesome';
import { internetType } from '../../../data';

class Amenities extends React.Component {
    constructor(props) {
        super(props)

        this.handleNextClick = this.handleNextClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleNextClick(e) {
        e.preventDefault();
        const form = this.refs.listingForm;

        if (form.checkValidity() == false) {
            form.classList.add("was-validated");
        } else {
            browserHistory.push("/add/preview");
        }
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
        let { listing } = this.props.addListing;

        return (
            <form autoComplete="off" ref="amenitiesForm" noValidate>
                <h1 className="fancy blue display-4 mb-4">Amenities</h1>
                <div className="form-row">
                    <div className="col">
                        <label className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" name="amenities.air_conditioning" defaultChecked={listing.amenities.air_conditioning} value={listing.amenities.air_conditioning} onChange={this.handleChange} />
                            <span className="custom-control-indicator"></span>
                            <span className="custom-control-description">Air Conditioning</span>
                        </label>
                    </div>
                    <div className="col">
                        <label className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" name="amenities.gym" defaultChecked={listing.amenities.gym} value={listing.amenities.gym} onChange={this.handleChange} />
                            <span className="custom-control-indicator"></span>
                            <span className="custom-control-description">Gym</span>
                        </label>
                    </div>
                    <div className="col">
                        <label className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" name="amenities.pool" defaultChecked={listing.amenities.pool} value={listing.amenities.pool} onChange={this.handleChange} />
                            <span className="custom-control-indicator"></span>
                            <span className="custom-control-description">Pool</span>
                        </label>
                    </div>
                </div>
                <div className="content-header">
                    <h5>Internet</h5>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-3">
                        <label htmlFor="inputInternetType" className="col-form-label">Internet Type <FontAwesome className="text-muted" name="wifi" /></label>
                        <select id="inputInternetType" className="form-control" name="wifi.type" value={listing.wifi.type} onChange={this.handleChange}>
                            {internetType.map((type, i) => (<option key={i} value={type.value}>{type.name}</option>))}
                        </select>
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group col-md-3">
                        <label htmlFor="inputInternetCost" className="col-form-label mr-2">Cost <FontAwesome className="text-muted" name="dollar" /></label>
                        <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                            <div className="input-group-addon">{listing.currency}</div>
                            <input type="text" className="form-control" id="inputInternetCost" data-type="int" name="wifi.rate" value={listing.wifi.rate} onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="form-group col-md-3">
                        <label htmlFor="inputInternetDownload" className="col-form-label mr-2">Download <FontAwesome className="text-muted" name="cloud-download" /></label>
                        <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                            <input type="number" className="form-control" id="inputInternetDownload" data-type="int" name="wifi.download" value={listing.wifi.download} onChange={this.handleChange} />
                            <div className="input-group-addon">mbps</div>
                        </div>
                    </div>
                    <div className="form-group col-md-3">
                        <label htmlFor="inputInternetUpload" className="col-form-label mr-2">Upload <FontAwesome className="text-muted" name="cloud-upload" /></label>
                        <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                            <input type="number" className="form-control" id="inputInternetUpload" data-type="int" name="wifi.upload" value={listing.wifi.upload} onChange={this.handleChange} />
                            <div className="input-group-addon">mbps</div>
                        </div>
                    </div>
                </div>

                <label htmlFor="inputInternetNotes" className="col-form-label">Notes</label>
                <textarea id="inputInternetNotes" className="form-control" placeholder="Special notes on the internet" name="wifi.notes" value={listing.wifi.notes} onChange={this.handleChange} />
            </form>
        )
    }
}

export default Amenities;