import React from 'react';
import Amenities from './Amenities';
import { getBaseRate } from '../../../functions';
import { rentalTypes } from '../../../data';
import { icons } from '../../../Images/Images';

class Hero extends React.Component {
    constructor(props) {
        super(props);
    }

    renderRentalType() {
        let { listing } = this.props;

        const i = rentalTypes.findIndex((r) => r.value == listing.type);
        return rentalTypes[i].name;
    }

    renderAmenities(listing) {

        return (
            <div className="row justify-content-md-center">
                <div className="col-md-8 col-s-12 my-2">
                    <Amenities listing={listing} margin={20} displayLabel />
                </div>
            </div>
        )
    }

    render() {
        let { listing, full } = this.props;

        return (
            <div className="container text-center">
                <div className="row justify-content-md-center">
                    <div className="col-md-8">
                        <h1 className="fancy"><strong>{listing.name}</strong></h1>
                    </div>
                </div>
                <div className="row justify-content-md-center">
                    <div className="col-lg-8 mt-2">
                        <p className="lead listing-price">{getBaseRate(listing)} {listing.currency} <img src={icons[listing.type]} className="icon" /> <small className="text-muted">{this.renderRentalType()}</small></p>
                    </div>
                </div>
                {listing.description != undefined ? <div className="row justify-content-md-center">
                    <div className="col-lg-8 my-2">
                        <p className="lead">{listing.description}</p>
                    </div>
                </div> : undefined}
                {full ? this.renderAmenities(listing) : undefined}
            </div>
        )
    }
}

export default Hero;
