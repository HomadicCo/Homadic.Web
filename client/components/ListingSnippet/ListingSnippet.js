import React from 'react';
import ListingType from '../ListingType/ListingType';
import Amenities from '../ListingTemplate/components/Amenities';

class ListingSnippet extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { listing } = this.props;

        return (
            <div className="listing-snippet">
                {listing.hero != null ? <img className="hero" src={listing.hero.hero} /> : undefined}
                <div className="content-box content-box-sm">
                    <div className="row no-gutters">
                        <div className="col-10">
                            <h5 className="property-name text-truncate"><strong>{listing.name}</strong></h5>
                        </div>
                        <div className="col-2 ml-auto text-right">
                            <span className="pink fancy"><strong>${listing.rates.base_rate.toLocaleString('en', { useGrouping: true })}</strong></span>
                        </div>
                    </div>
                    <p className="property-type text-muted"><small><ListingType type={listing.type} size={24} /></small></p>
                    <Amenities listing={listing} size={20} colClass="col-1" />
                </div>
            </div>
        )
    }
}

export default ListingSnippet;