import React from 'react';
import { icons } from '../../../Images/Images';
import RatingBadge from '../../../components/RatingBadge/RatingBadge';

class HoveredHome extends React.Component {
    constructor(props) {
        super(props);
    }

    renderAmenityIcons() {
        return (
            <p className="icons">
                <img src={icons.wifiStrong} />
                <img src={icons.gym} />
                <img src={icons.pool} />
                <img src={icons.laundry} />
            </p>
        )
    }

    render() {
        let { home } = this.props;
        return (
            <div className="content-box hovered-home">
                <p><strong>{home.name}</strong> <RatingBadge rating={home.rating} /></p>
                <p>{home.rental_details.one_month.base_price} {home.currency}</p>
                {this.renderAmenityIcons()}
            </div>
        )
    }
}

export default HoveredHome;