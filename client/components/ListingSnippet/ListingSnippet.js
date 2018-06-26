import React from 'react';
import Rater from 'react-rater';
import ListingType from '../ListingType/ListingType';
import Amenities from '../ListingTemplate/components/Amenities';

class ListingSnippet extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { listing } = this.props;

        return (
            <div className="content-box content-box-sm listing-snippet">
                <div className="row no-gutters">
                    <div className="col-10">
                        <h6 className="property-name text-truncate"><strong>{listing.name}</strong></h6>
                    </div>
                    <div className="col-2 ml-auto text-right">
                        <span className="pink fancy"><strong>${listing.rates.base_rate.toLocaleString('en', { useGrouping: true })}</strong></span>
                    </div>
                </div>
                <p className="property-type text-muted">{listing.rating != 0 ? <Rater interactive={false} rating={listing.rating} /> : undefined} <small><ListingType type={listing.type} size={24} /></small></p>
                <Amenities listing={listing} size={20} colClass="col-1" />
            </div>
        )
    }
}

export default ListingSnippet;