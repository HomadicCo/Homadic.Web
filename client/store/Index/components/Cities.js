import React from 'react';
import { Link } from 'react-router';
import { cities } from '../../../data';

class Cities extends React.Component {
    constructor(props) {
        super(props);
    }

    renderCity(city) {
        return (
            <div className="city-snippet">
                <Link to={city.slug}>
                    <div className="city-hero" style={{ backgroundImage: 'url(https://source.unsplash.com/' + city.unsplash + '/500x260)' }}>
                    </div>
                    <div className="city-details container-fluid pt-2">
                        <div className="row">
                            <div className="col-8">
                                <h5><strong>{city.name}</strong></h5>
                                <p className="lead">{city.country} <span className={'flag-icon flag-icon-' + city.country_code + ' ml-1'}></span></p>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        )
    }

    render() {
        return (
            <div className="row">
                {cities.map((city, i) => (<div key={i} className="col-md-4 col-xs-6 mb-3">{this.renderCity(city)}</div>))}
            </div>
        )
    }
}

export default Cities;