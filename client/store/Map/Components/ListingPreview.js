import React from 'react';
import RatingBadge from '../../../components/RatingBadge/RatingBadge';
import { icons } from '../../../Images/Images';
import { bathrooms, bedrooms, rentalLengths } from '../../../data';

class ListingPreview extends React.Component {
    constructor(props) {
        super(props);

        this.openListingInNewWindow = this.openListingInNewWindow.bind(this);
    }

    openListingInNewWindow() {
        window.open(window.location.origin + '/listing/' + this.props.listing.slug);
    }

    renderBedrooms(room) {
        const i = bedrooms.findIndex((bedroom) => bedroom.value == room.bedrooms);
        return bedrooms[i].name;
    }

    renderBathrooms(room) {
        const i = bathrooms.findIndex((bathroom) => bathroom.value == room.bathrooms);
        return bathrooms[i].name;
    }

    renderMinStay(room) {
        const i = rentalLengths.findIndex((r) => r.value == room.min_rental);
        return rentalLengths[i];
    }


    renderRoom(room) {
        return (
            <p><img className="mr-1" src={icons.bedroom} height={20} width={20} /> {this.renderBedrooms(room)} <img className="ml-3 mr-1" src={icons.bathroom} height={20} width={20} /> {this.renderBathrooms(room)}</p>
        )
    }

    render() {
        let { listing } = this.props;

        return (
            <div className="mt-3">
                <div className="map-open-listing text-center py-2">
                    <button className="btn btn-sm btn-success" onClick={this.openListingInNewWindow}>View full listing</button>
                </div>
                <div className="content-box content-box-sm">
                    <h6><strong>{listing.name}</strong> {listing.rating != 0 ? <RatingBadge rating={listing.rating} /> : undefined}</h6>
                    <p className="property-type"><small>{listing.type}</small></p>
                    <h5 className="red-light"><strong>${listing.rooms[0].base_rate.toLocaleString('en', { useGrouping: true })}</strong> <small>{listing.currency}</small></h5>
                </div>
                <div className="content-box content-box-sm">
                    <h5 className="fancy blue">Rooms</h5>
                    {listing.rooms.map((room, i) => (<div key={i}><hr />{this.renderRoom(room)}</div>))}
                </div>
            </div>
        )
    }
}

export default ListingPreview;