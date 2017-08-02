import React from 'react';
import PlacesAutocomplete, { geocodeByAddress } from 'react-places-autocomplete'
import { Link } from 'react-router';
import FontAwesome from 'react-fontawesome';
import queryString from 'query-string';
import { icons } from '../../../Images/Images';
import Avatar from '../../../Components/Avatar/Avatar';

class NearbyResult extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        let { place } = this.props;
        const link = "/add/details/" + place.place_id;

        return (
            <Link to={link}>
                <div className="content-box content-box-sm nearby-result text-truncate">
                    <div className="d-flex flex-row">
                        <div className="mr-3 mt-2">
                            <img src={icons.house} height="30" width="30" />
                        </div>
                        <div>
                            <div className="place-name">
                                <span><strong>{place.name}</strong></span>
                            </div>
                            <div className="place-address">
                                <span className="small"><em>{place.vicinity}</em></span>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        )
    }
}

class SelectPlace extends React.Component {
    constructor(props) {
        super(props)
    }

    renderNearbyResults() {
        let { nearbyResults } = this.props.addPlace;

        return (
            <div className="col-12">
                <h5 className="mb-4">Select from places on Google Maps within 200m of pin. Not here? Try moving your pin more accurately or <Link to="/add/details">add manually</Link>.</h5>
                {nearbyResults.map((result, i) =>
                    <NearbyResult place={result} key={i} />
                )}
            </div>
        )
    }

    render() {
        let { profile } = this.props;
        return (
            <div className="container">
                {this.renderNearbyResults()}
            </div>
        )
    }
}

export default SelectPlace;