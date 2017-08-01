import React from 'react';
import PlacesAutocomplete, { geocodeByAddress } from 'react-places-autocomplete'
import FontAwesome from 'react-fontawesome';
import queryString from 'query-string';
import Avatar from '../../../Components/Avatar/Avatar';

class SelectPlace extends React.Component {
    constructor(props) {
        super(props)
    }

    renderNearbyResults() {
        let { nearbyResults } = this.props.addPlace;
        console.log(nearbyResults);

        return (
            <div>
                <h3>Select nearby</h3>
                <ul>
                    {nearbyResults.map((result, i) =>
                        <li key={i}>{result.name}</li>
                    )}
                </ul>
            </div>
        )
    }

    render() {
        let { profile } = this.props;
        return (
            <div className="container">
                <div className="col-12 text-center">
                    <div className="my-3">
                        <Avatar size={60} profile={profile.data} />
                    </div>
                    <h5>Add a place to <strong>Homadic</strong> as <strong>{profile.data.name}</strong>. Your first name is shown on the listing as the creator.</h5>
                </div>
                <div className="col-12">
                    {this.renderNearbyResults()}
                </div>
            </div>
        )
    }
}

export default SelectPlace;