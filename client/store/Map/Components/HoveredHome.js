import React from 'react';
import FontAwesome from 'react-fontawesome';
import RatingBadge from '../../../components/RatingBadge/RatingBadge';

class HoveredHome extends React.Component {
    constructor(props) {
        super(props);
    }

    renderAmenityIcons() {
        return (
            <p>
                <FontAwesome name="wifi" />
                <FontAwesome name="motorcycle" />
                <FontAwesome name="bluetooth" />
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