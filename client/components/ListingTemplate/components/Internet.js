import React from 'react';
import FontAwesome from 'react-fontawesome';

class Internet extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { listing } = this.props;

        return (
            <div>
                <div className="content-header">
                    <h5><FontAwesome name="wifi" /> Internet</h5>
                </div>
                <div className="m-3">
                    <div className="row">
                        <div className="col-md-4">
                            <p><FontAwesome name="dollar" /> {listing.wifi.type}</p>
                        </div>
                        <div className="col-md-4">
                            <p><FontAwesome name="download" /> {listing.wifi.download}mbps</p>
                        </div>
                        <div className="col-md-4">
                            <p><FontAwesome name="upload" /> {listing.wifi.upload}mbps</p>
                        </div>
                    </div>
                    <p><strong>Notes:</strong> {listing.wifi.notes}</p>
                </div>
            </div>
        )
    }
}

export default Internet;
