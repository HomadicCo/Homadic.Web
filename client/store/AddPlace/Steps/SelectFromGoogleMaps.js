import React from 'react';
import { browserHistory, Link } from 'react-router';
import FontAwesome from 'react-fontawesome';
import { icons } from '../../../Images/Images';

// components
import LoadingScreen from '../../../components/LoadingScreen/LoadingScreen';

class NearbyResult extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        let { place } = this.props;
        const link = "/add/place?gmid=" + place.place_id;

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

class SelectFromGoogleMaps extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoading: true
        };
    }

    componentWillMount() {
        let { map, handleGetNearbyResults } = this.props;

        if (!!map.addNewPlaceCoordinates) {
            handleGetNearbyResults(map.addNewPlaceCoordinates).then(() => {
                this.setState({ isLoading: false });
            }).catch(() => {
                browserHistory.push("/");
            });
        } else {
            browserHistory.push("/");
        }
    }

    render() {
        let { addPlace } = this.props;
        let { isLoading } = this.state;

        return (
            isLoading ?
                <LoadingScreen /> :
                <div className="container">
                    <h5 className="mb-4">Select from places on Google Maps within 200m of pin. Not here? Try moving your pin more accurately or <Link to="/add/details">add manually</Link>.</h5>
                    {addPlace.nearbyResults.map((result, i) =>
                        <NearbyResult place={result} key={i} />
                    )}
                </div>
        )
    }
}

export default SelectFromGoogleMaps;