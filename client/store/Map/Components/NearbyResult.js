import React from 'react';
import { Link, browserHistory } from 'react-router';

class NearbyResult extends React.Component {
    constructor(props) {
        super(props)

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        let { listing, setGmid } = this.props;

        setGmid(listing.place_id);
        browserHistory.push('/add/listing');
    }

    render() {
        let { listing } = this.props;

        return (
            <Link onClick={this.handleClick}>
                <div className="content-box content-box-sm nearby-result text-truncate">
                    <div className="listing-name">
                        <span><strong><i className="fas fa-hotel pink mr-1"></i> {listing.name}</strong></span>
                    </div>
                    <div className="listing-address">
                        <span className="small"><em>{listing.vicinity}</em></span>
                    </div>
                </div>
            </Link>
        )
    }
}

export default NearbyResult;