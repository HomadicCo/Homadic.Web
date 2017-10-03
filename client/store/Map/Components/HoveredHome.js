import React from 'react';
import { icons } from '../../../Images/Images';
import RatingBadge from '../../../components/RatingBadge/RatingBadge';
import IconsBar from '../../../components/IconsBar/IconsBar';

class HoveredHome extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { home } = this.props;

        return (
            <div className="content-box hovered-home">
                <p><strong>{home.name}</strong> <RatingBadge rating={home.rating} /></p>
                <p>{home.rental_details.one_month.base_price} {home.currency}</p>
                <IconsBar home={home} />
            </div>
        )
    }
}

export default HoveredHome;