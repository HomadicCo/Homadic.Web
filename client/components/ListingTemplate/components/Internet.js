import React from 'react';
import FontAwesome from 'react-fontawesome';
import { internetType } from '../../../data';

class Internet extends React.Component {
    constructor(props) {
        super(props);
    }

    renderWiFiLabel() {
        let { wifi } = this.props.listing;

        const i = internetType.findIndex((type) => type.value == wifi.type);
        return internetType[i].name;
    }

    render() {
        let { listing } = this.props;

        return (
            <div className="content-box">
                <h2 className="fancy blue">Internet</h2>
                <div className="row">
                    <div className="col-md-4 capitalize">
                        <p><FontAwesome name="wifi" /> {this.renderWiFiLabel()}</p>
                    </div>
                    {listing.wifi.download ? <div className="col-md-4 capitalize">
                        <p><FontAwesome name="download" /> {listing.wifi.download}mbps</p>
                    </div> : undefined}
                    {listing.wifi.upload ? <div className="col-md-4 capitalize">
                        <p><FontAwesome name="upload" /> {listing.wifi.upload}mbps</p>
                    </div> : undefined}
                    {listing.wifi.notes ? <div className="col-md-12">
                        <p><strong>Notes:</strong> {listing.wifi.notes}</p>
                    </div> : undefined}
                </div>
            </div>
        )
    }
}

export default Internet;
