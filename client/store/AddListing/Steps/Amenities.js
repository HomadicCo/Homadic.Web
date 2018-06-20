import React from 'react';
import { browserHistory } from 'react-router';
import { internetType } from '../../../data';

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
                <h1 className="fancy blue display-4 mb-4">Amenities</h1>
                <div className="form-row">
                    <div className="col">
                        <label className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" name="amenities.air_conditioning" defaultChecked={listing.amenities.air_conditioning} value={listing.amenities.air_conditioning} onChange={this.handleChange} />
                            <span className="custom-control-indicator" />
                            <span className="custom-control-description">Air Conditioning</span>
                        </label>
                    </div>
                    <div className="col">
                        <label className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" name="amenities.gym" defaultChecked={listing.amenities.gym} value={listing.amenities.gym} onChange={this.handleChange} />
                            <span className="custom-control-indicator" />
                            <span className="custom-control-description">Gym</span>
                        </label>
                    </div>
                    <div className="col">
                        <label className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" name="amenities.pool" defaultChecked={listing.amenities.pool} value={listing.amenities.pool} onChange={this.handleChange} />
                            <span className="custom-control-indicator" />
                            <span className="custom-control-description">Pool</span>
                        </label>
                    </div>
                </div>
                <div className="content-header">
                    <h5>Internet</h5>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-3">
                        <label htmlFor="inputInternetType" className="col-form-label">Internet Type <i className="text-muted fas fa-wifi" /></label>
                        <select id="inputInternetType" className="form-control" name="wifi.type" value={listing.wifi.type} onChange={this.handleChange}>
                            {internetType.map((type, i) => (<option key={i} value={type.value}>{type.name}</option>))}
                        </select>
                    </div>
                </div>

                {listing.wifi.type != 'none' ?
                    <div>
                        <div className="form-row">
                            {(['paid', 'canInstall'].indexOf(listing.wifi.type) > -1) ?
                                <div className="form-group col-md-3">
                                    <label htmlFor="inputInternetCost" className="col-form-label mr-2">Cost per month <i className="text-muted far fa-dollar" /></label>
                                    <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                                        <div className="input-group-addon">{listing.currency}</div>
                                        <input type="text" className="form-control" id="inputInternetCost" data-type="int" name="wifi.rate" value={listing.wifi.rate} onChange={this.handleChange} />
                                    </div>
                                </div> : undefined}
                            <div className="form-group col-md-3">
                                <label htmlFor="inputInternetDownload" className="col-form-label mr-2">Download <i className="text-muted fas fa-cloud-download-alt" /></label>
                                <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                                    <input type="number" className="form-control" id="inputInternetDownload" data-type="int" max={100} name="wifi.download" value={listing.wifi.download} onChange={this.handleChange} />
                                    <div className="input-group-addon">mbps</div>
                                </div>
                            </div>
                            <div className="form-group col-md-3">
                                <label htmlFor="inputInternetUpload" className="col-form-label mr-2">Upload <i className="text-muted fas fa-cloud-upload-alt" /></label>
                                <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                                    <input type="number" className="form-control" id="inputInternetUpload" data-type="int" max={100} name="wifi.upload" value={listing.wifi.upload} onChange={this.handleChange} />
                                    <div className="input-group-addon">mbps</div>
                                </div>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-xs-12">
                                <a href="http://www.speedtest.net/?ref=https:/homadic.co" className="btn btn-action btn-sm" rel="noopener noreferrer" target="_blank"><i className="fas fa-rocket"></i> SpeedTest</a>
                            </div>
                        </div>
                    </div> : undefined}

                <label htmlFor="inputInternetNotes" className="col-form-label">Notes</label>
                <textarea id="inputInternetNotes" className="form-control" placeholder="Special notes on the internet, internet is life!" name="wifi.notes" value={listing.wifi.notes} onChange={this.handleChange} maxLength={1000} />
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