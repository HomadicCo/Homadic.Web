import React from 'react';
import Rater from 'react-rater';
import IconsBar from '../../../components/IconsBar/IconsBar';

class ListingSnippet extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { listing } = this.props;

        return (
            <div className="content-box content-box-sm snippet">
                <h6><strong>{listing.name}</strong></h6>
                <p>{listing.rating != 0 ? <Rater interactive={false} rating={listing.rating} /> : undefined}</p>
                <p className="property-type"><small>{listing.type}</small></p>
                <h5 className="red-light"><strong>${listing.rooms[0].base_rate.toLocaleString('en', { useGrouping: true })}</strong> <small>{listing.currency}</small></h5>
                <IconsBar listing={listing} />
            </div>
        )
    }
}

export default ListingSnippet;