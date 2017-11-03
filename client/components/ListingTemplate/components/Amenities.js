import React from 'react';
import FontAwesome from 'react-fontawesome';
import { icons } from '../../../Images/Images';

class Amenities extends React.Component {
    constructor(props) {
        super(props);
    }

    renderPool() {
        return (
            <div className="col-auto text-center">
                <img src={icons.pool} />
                <p><small><strong>Pool</strong></small></p>
            </div>
        )
    }

    renderGym() {
        return (
            <div className="col-auto text-center">
                <img src={icons.gym} className="mb-2" />
                <p><small><strong>Gym</strong></small></p>
            </div>
        )
    }

    renderAC() {
        return (
            <div className="col-auto text-center">
                <img src={icons.ac} className="mb-2" />
                <p><small><strong>A/C</strong></small></p>
            </div>
        )
    }

    render() {
        let { listing } = this.props;

        return (
            <div className="row justify-content-md-center hero-icons">
                {listing.amenities.air_conditioning ? this.renderAC() : undefined}
                {listing.amenities.gym ? this.renderGym() : undefined}
                {listing.amenities.pool ? this.renderPool() : undefined}
            </div>
        )
    }
}

export default Amenities;
