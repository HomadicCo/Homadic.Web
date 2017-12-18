import React from 'react';
import { icons } from '../../Images/Images';
import { rentalTypes } from '../../data';

class ListingType extends React.Component {
    constructor(props) {
        super(props);
    }

    renderRentalLabel(type) {
        const i = rentalTypes.findIndex((rentalType) => rentalType.value == type);
        return rentalTypes[i].name;
    }

    render() {
        let { size, type } = this.props;

        return (
            <span><img src={icons[type]} height={size} width={size} /> {this.renderRentalLabel(type)}</span>
        )
    }
}

export default ListingType;