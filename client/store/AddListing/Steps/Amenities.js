import React from 'react';
import { browserHistory } from 'react-router';
import FontAwesome from 'react-fontawesome';
import { internetType } from '../../../data';

class Amenities extends React.Component {
    constructor(props) {
        super(props)

        this.handleNextClick = this.handleNextClick.bind(this);
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

    render() {
        let { listing } = this.props.addListing;

        return (
            <form autoComplete="off" ref="amenitiesForm" noValidate>
                <h3>Amenities</h3>
                <div className="form-row">
                    <div className="col">
                        <label className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" />
                            <span className="custom-control-indicator"></span>
                            <span className="custom-control-description">Air Conditioning</span>
                        </label>
                    </div>
                    <div className="col">
                        <label className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" />
                            <span className="custom-control-indicator"></span>
                            <span className="custom-control-description">Gym</span>
                        </label>
                    </div>
                    <div className="col">
                        <label className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" />
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
                        <select id="inputInternetType" className="form-control">
                            {internetType.map((type, i) => (<option key={i} value={type.value}>{type.name}</option>))}
                        </select>
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group col-md-3">
                        <label htmlFor="inputInternetCost" className="col-form-label mr-2">Cost <FontAwesome className="text-muted" name="dollar" /></label>
                        <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                            <div className="input-group-addon">{listing.currency}</div>
                            <input type="text" className="form-control" id="inputInternetCost" />
                        </div>
                    </div>
                    <div className="form-group col-md-3">
                        <label htmlFor="inputInternetDownload" className="col-form-label mr-2">Download <FontAwesome className="text-muted" name="cloud-download" /></label>
                        <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                            <input type="number" className="form-control" id="inputInternetDownload" />
                            <div className="input-group-addon">mbps</div>
                        </div>
                    </div>
                    <div className="form-group col-md-3">
                        <label htmlFor="inputInternetUpload" className="col-form-label mr-2">Upload <FontAwesome className="text-muted" name="cloud-upload" /></label>
                        <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                            <input type="number" className="form-control" id="inputInternetUpload" />
                            <div className="input-group-addon">mbps</div>
                        </div>
                    </div>
                </div>

                <label htmlFor="inputInternetNotes" className="col-form-label">Notes</label>
                <textarea id="inputInternetNotes" className="form-control" placeholder="Special notes on the internet" />
            </form>
        )
    }
}

export default Amenities;