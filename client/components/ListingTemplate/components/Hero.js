import React from 'react';
import Amenities from './Amenities';
import Rater from 'react-rater';
import { rentalTypes } from '../../../data';
import { icons } from '../../../Images/Images';

class Hero extends React.Component {
    constructor(props) {
        super(props);
    }

    getBaseRate() {
        var rooms = this.props.listing.rooms.sort(function (a, b) {
            return a.base_rate > b.base_rate;
        });

        return rooms[0].base_rate;
    }

    renderRentalType() {
        let { listing } = this.props;

        const i = rentalTypes.findIndex((r) => r.value == listing.type);
        return rentalTypes[i].name;
    }

    render() {
        let { listing } = this.props;

        return (
            <div className="container text-center listing">
                <div className="row justify-content-md-center">
                    <div className="col-md-8">
                        <h1 className="fancy"><strong>{listing.name}</strong> {listing.rating ? <Rater interactive={false} rating={listing.rating} /> : undefined}</h1>
                    </div>
                </div>
                <div className="row justify-content-md-center">
                    <div className="col-md-8 my-2">
                        <p className="lead">{this.getBaseRate()} {listing.currency} <img src={icons[listing.type]} className="icon" /> <small className="text-muted">{this.renderRentalType()}</small></p>
                    </div>
                </div>
                <div className="row justify-content-md-center">
                    <div className="col-md-8 col-s-12">
                        <Amenities listing={listing} margin={20} displayLabel />
                    </div>
                </div>
            </div>
        )
    }
}

export default Hero;
