import React from 'react';
import { internetType } from '../../data';

class EditInternet extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        let { currency, wifi, handleChange } = this.props;

        return (
            <div>
                <div className="content-header">
                    <h5>Internet</h5>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-3">
                        <label htmlFor="inputInternetType" className="col-form-label">Internet Type <i className="text-muted fas fa-wifi" /></label>
                        <select id="inputInternetType" className="form-control" name="wifi.type" value={wifi.type} onChange={handleChange}>
                            {internetType.map((type, i) => (<option key={i} value={type.value}>{type.name}</option>))}
                        </select>
                    </div>
                </div>

                {wifi.type != 'none' ?
                    <div>
                        <div className="form-row">
                            {(['paid', 'canInstall'].indexOf(wifi.type) > -1) ?
                                <div className="form-group col-md-3">
                                    <label htmlFor="inputInternetCost" className="col-form-label mr-2">Cost per month <i className="text-muted far fa-dollar" /></label>
                                    <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                                        <div className="input-group-addon">{currency}</div>
                                        <input type="text" className="form-control" id="inputInternetCost" data-type="int" name="wifi.rate" value={wifi.rate} onChange={handleChange} />
                                    </div>
                                </div> : undefined}
                            <div className="form-group col-md-3">
                                <label htmlFor="inputInternetDownload" className="col-form-label mr-2">Download <i className="text-muted fas fa-cloud-download-alt" /></label>
                                <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                                    <input type="number" className="form-control" id="inputInternetDownload" data-type="int" max={100} name="wifi.download" value={wifi.download} onChange={handleChange} />
                                    <div className="input-group-addon">mbps</div>
                                </div>
                            </div>
                            <div className="form-group col-md-3">
                                <label htmlFor="inputInternetUpload" className="col-form-label mr-2">Upload <i className="text-muted fas fa-cloud-upload-alt" /></label>
                                <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                                    <input type="number" className="form-control" id="inputInternetUpload" data-type="int" max={100} name="wifi.upload" value={wifi.upload} onChange={handleChange} />
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
                <textarea id="inputInternetNotes" className="form-control" placeholder="Special notes on the internet, internet is life!" name="wifi.notes" value={wifi.notes} onChange={handleChange} maxLength={1000} />
            </div>
        )
    }
}

export default EditInternet;