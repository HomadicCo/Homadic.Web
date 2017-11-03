import React from 'react';
import FontAwesome from 'react-fontawesome';

class Amenities extends React.Component {
    constructor(props) {
        super(props);
    }

    renderKitchen() {
        let { listing } = this.props;

        switch (listing.amenities.kitchen) {
            case 'included':
                return (<FontAwesome name="check" className="green" />)
            case 'shared':
                return (<span>Shared</span>)
            case 'none':
                return (<FontAwesome name="times" className="red" />)
        }
    }

    renderLaundry() {
        let { listing } = this.props;

        switch (listing.amenities.laundry) {
            case 'included':
                return (<FontAwesome name="check" className="green" />)
            case 'shared':
                return (<span>Shared</span>)
            case 'none':
                return (<FontAwesome name="times" className="red" />)
        }
    }

    renderAC() {
        let { listing } = this.props;

        return (listing.amenities.air_conditioning ? <FontAwesome name="check" className="green" /> : <FontAwesome name="times" className="red" />)
    }

    renderGym() {
        let { listing } = this.props;

        return (listing.amenities.gym ? <FontAwesome name="check" className="green" /> : <FontAwesome name="times" className="red" />)
    }

    renderPool() {
        let { listing } = this.props;

        return (listing.amenities.pool ? <FontAwesome name="check" className="green" /> : <FontAwesome name="times" className="red" />)
    }

    render() {
        let { listing } = this.props;

        return (
            <div>
                <div className="content-header">
                    <h5><FontAwesome name="hotel" /> Amenities</h5>
                </div>
                <div className="m-3">
                    <div className="row">
                        <div className="col-md-4">
                            <p><strong>Kitchen:</strong> {this.renderKitchen()}</p>
                        </div>
                        <div className="col-md-4">
                            <p><strong>Laundry:</strong> {this.renderLaundry()}</p>
                        </div>
                        <div className="col-md-4">
                            <p><strong>A/C:</strong> {this.renderAC()}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <p><strong>Gym:</strong> {this.renderGym()}</p>
                        </div>
                        <div className="col-md-4">
                            <p><strong>Pool:</strong> {this.renderPool()}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Amenities;
