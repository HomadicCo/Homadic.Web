import React from 'react';
import { internetType } from '../../../data';

class Internet extends React.Component {
    constructor(props) {
        super(props);
    }

    renderWiFiLabel() {
        let { wifi } = this.props;

        const i = internetType.findIndex((type) => type.value == wifi.type);
        return internetType[i].name;
    }

    render() {
        let { column, wifi } = this.props;

        return (
            <div id="internet" className={column}>
                <div className="content-box">
                    <h3 className="fancy blue">Internet</h3>
                    <hr />
                    <div className="row">
                        <div className="col-4 capitalize">
                            <p><i className="fas fa-wifi" /> {this.renderWiFiLabel()}</p>
                        </div>
                        {wifi.download ? <div className="col-4 capitalize">
                            <p><i className="fas fa-download" /> {wifi.download}mbps</p>
                        </div> : undefined}
                        {wifi.upload ? <div className="col-4 capitalize">
                            <p><i className="fas fa-upload" /> {wifi.upload}mbps</p>
                        </div> : undefined}
                        {wifi.notes ? <div className="col-12">
                            <p><strong>Notes:</strong> {wifi.notes}</p>
                        </div> : undefined}
                    </div>
                </div>
            </div>
        )
    }
}

export default Internet;
