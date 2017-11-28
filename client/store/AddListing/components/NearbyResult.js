import React from 'react';
import { Link, browserHistory } from 'react-router';
import { icons } from '../../../Images/Images';

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
                    <div className="d-flex flex-row">
                        <div className="mr-3 mt-2">
                            <img src={icons.house} height="30" width="30" />
                        </div>
                        <div>
                            <div className="listing-name">
                                <span><strong>{listing.name}</strong></span>
                            </div>
                            <div className="listing-address">
                                <span className="small"><em>{listing.vicinity}</em></span>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        )
    }
}

export default NearbyResult;