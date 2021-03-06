import React from 'react';
import Amenities from '../ListingTemplate/components/Amenities';
import ThumbsUpDown from '../ThumbsUpDown/ThumbsUpDown';

class ListingSnippet extends React.Component {
    constructor(props) {
        super(props);
    }

    clickThumbsUp(value) {
        console.log(value);
    }

    render() {
        let { listing } = this.props;

        return (
            <div className="col-12 listing-snippet">
                {listing.hero != null ? <img className="hero" src={listing.hero.hero} /> : undefined}
                <div className="content-box content-box-sm">
                    <div className="row no-gutters">
                        <div className="col-10">
                            <h6 className="property-name text-truncate"><strong>{listing.name}</strong></h6>
                        </div>
                        <div className="col-2 ml-auto text-right">
                            <span className="blue"><strong>${listing.rates.base_rate.toLocaleString('en', { useGrouping: true })}</strong></span>
                        </div>
                    </div>
                    <p className="description">{listing.description}</p>
                    <div className="row">
                        <div className="col-8">
                            <Amenities listing={listing} size={20} colClass="col-1" />
                        </div>
                        <div className="col-4 ml-auto d-flex justify-content-end">
                            <ThumbsUpDown listing={listing} clickThumbsUp={this.clickThumbsUp} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ListingSnippet;