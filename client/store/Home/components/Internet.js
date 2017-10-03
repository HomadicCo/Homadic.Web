import React from 'react';
import FontAwesome from 'react-fontawesome';

class Internet extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { home } = this.props;

        return (
            <div>
                <div className="content-header">
                    <h5><FontAwesome name="wifi" /> Internet</h5>
                </div>
                <div className="m-3">
                    <div className="row">
                        <div className="col-md-4">
                            <p><FontAwesome name="dollar" /> {home.wifi.type}</p>
                        </div>
                        <div className="col-md-4">
                            <p><FontAwesome name="download" /> {home.wifi.download}mbps</p>
                        </div>
                        <div className="col-md-4">
                            <p><FontAwesome name="upload" /> {home.wifi.upload}mbps</p>
                        </div>
                    </div>
                    <p><strong>Notes:</strong> {home.wifi.notes}</p>
                </div>
            </div>
        )
    }
}

export default Internet;
