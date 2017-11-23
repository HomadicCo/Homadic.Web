import React from 'react';
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
                <h6><strong>{home.name}</strong> <RatingBadge rating={home.rating} /></h6>
                <p className="property-type"><small>{home.type}</small></p>
                <h5 className="red-light"><strong>${home.rooms[0].base_rate.toLocaleString('en', { useGrouping: true })}</strong> <small>{home.currency}</small></h5>
                <IconsBar home={home} />
            </div>
        )
    }
}

export default HoveredHome;