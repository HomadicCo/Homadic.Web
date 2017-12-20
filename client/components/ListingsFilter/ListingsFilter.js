import React from 'react';
import { priceRanges, rentalTypes } from '../../data';

class ListingsFilter extends React.Component {
    constructor(props) {
        super(props);
    }

    renderPriceRange() {
        return (
            <div className="content-box content-box-sm">
                <p><strong>Price range <small>(USD)</small></strong></p>
                <div className="row">
                    <div className="col-6">
                        <label htmlFor="minPrice">Min: </label>
                        <select id="minPrice" className="form-control custom-select">
                            <option>None</option>
                            {priceRanges.map((price, i) => (
                                <option key={i} value={price.value}>{price.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className="col-6">
                        <label htmlFor="maxPrice">Max: </label>
                        <select id="maxPrice" className="form-control custom-select">
                            <option>None</option>
                            {priceRanges.map((price, i) => (
                                <option key={i} value={price.value}>{price.name}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
        )
    }

    renderRentalTypes() {
        return (
            <div className="content-box content-box-sm">
                <p><strong>Rental types</strong></p>
                {rentalTypes.map((rentalType, i) => (
                    <label key={i} className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" />
                        <span className="custom-control-indicator" />
                        <span className="custom-control-description">{rentalType.name}</span>
                    </label>
                ))}
            </div>
        )
    }

    render() {
        return (
            <div>
                {this.renderPriceRange()}
                {this.renderRentalTypes()}
            </div>
        )
    }
}

export default ListingsFilter;