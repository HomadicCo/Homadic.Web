import React from 'react';
import { priceRanges, rentalTypes } from '../../data';

class ListingsFilter extends React.Component {
    constructor(props) {
        super(props);

        this.clearFilter = this.clearFilter.bind(this);
        this.setFilter = this.setFilter.bind(this);
        this.toggleRentalType = this.toggleRentalType.bind(this);
        this.toggleMinRate = this.toggleMinRate.bind(this);
        this.toggleMaxRate = this.toggleMaxRate.bind(this);

        this.state = Object.assign({}, props.filter);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.filter != this.props.filter)
            this.setState(this.props.filter);
    }

    clearFilter() {
        this.props.clearFilter();
    }

    setFilter() {
        this.props.setFilter(this.state);
    }

    toggleMinRate(e) {
        let { parameters } = this.state;

        this.setState({ parameters: { ...parameters, min_rate: parseInt(e.target.value) } });
    }

    toggleMaxRate(e) {
        let { parameters } = this.state;

        this.setState({ parameters: { ...parameters, max_rate: parseInt(e.target.value) } });
    }

    toggleRentalType(type) {
        let { parameters } = this.state;

        if (parameters.types.includes(type)) {
            var i = parameters.types.findIndex(t => t == type);
            parameters.types.splice(i, 1);
        }
        else {
            parameters.types.push(type);
        }

        this.setState({ parameters });
    }

    renderPriceRange() {
        let { parameters } = this.state;
        return (
            <div className="content-box content-box-sm">
                <p><strong>Base price range <small>(USD)</small></strong></p>
                <div className="row">
                    <div className="col-6">
                        <label htmlFor="minPrice">Min: </label>
                        <select id="minPrice" value={parameters.min_rate} className="form-control custom-select" onChange={this.toggleMinRate}>
                            {priceRanges.map((price, i) => (
                                <option key={i} value={price.value}>{price.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className="col-6">
                        <label htmlFor="maxPrice">Max: </label>
                        <select id="maxPrice" value={parameters.max_rate} className="form-control custom-select" onChange={this.toggleMaxRate}>
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
        let { parameters } = this.state;

        return (
            <div className="content-box content-box-sm">
                <p><strong>Rental types</strong></p>
                {rentalTypes.map((rentalType, i) => (
                    <label key={i} className="custom-control custom-checkbox active">
                        <input type="checkbox" className="custom-control-input" onChange={this.toggleRentalType.bind(null, rentalType.value)} checked={parameters.types.includes(rentalType.value) ? true : false} />
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
                <div className="row">
                    <div className="col text-center">
                        <div className="btn-group my-2" role="group" aria-label="Filter actions">
                            <button className="btn btn-default btn" onClick={this.clearFilter}>Clear <i className="fas fa-times" /></button>
                            <button className="btn btn-success btn" onClick={this.setFilter}>Update <i className="fas fa-check" /></button>
                        </div>
                        <p className="text-center"><small>More filters are on their way.</small></p>
                    </div>
                </div>
            </div>
        )
    }
}

export default ListingsFilter;