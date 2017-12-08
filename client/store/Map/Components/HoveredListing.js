import React from 'react';
import RatingBadge from '../../../components/RatingBadge/RatingBadge';
import IconsBar from '../../../components/IconsBar/IconsBar';

class HoveredListing extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { listing } = this.props;

        return (
            <div className="content-box hovered-listing">
                <h6><strong>{listing.name}</strong> <RatingBadge rating={listing.rating} /></h6>
                <p className="property-type"><small>{listing.type}</small></p>
                <h5 className="red-light"><strong>${listing.rooms[0].base_rate.toLocaleString('en', { useGrouping: true })}</strong> <small>{listing.currency}</small></h5>
                <IconsBar listing={listing} />
            </div>
        )
    }
}

export default HoveredListing;