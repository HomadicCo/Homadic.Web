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
        let { listing } = this.props;
        const link = "/add/listing?gmid=" + listing.place_id;

        return (
            <Link to={link}>
                <div className="content-box content-box-sm nearby-result text-truncate">
                    <div className="d-flex flex-row">
                        <div className="mr-3 mt-2">
                            <img src={icons.house} height="30" width="30" />
                        </div>
                        <div>
                            <div className="listing-name">
                                <span><strong>{listing.name}</strong></span>
                            </div>
                            <div className="listing-address">
                                <span className="small"><em>{listing.vicinity}</em></span>
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

        if (!!map.addNewListingCoordinates) {
            handleGetNearbyResults(map.addNewListingCoordinates).then(() => {
                this.setState({ isLoading: false });
            }).catch(() => {
                browserHistory.push("/");
            });
        } else {
            browserHistory.push("/");
        }
    }

    render() {
        let { addListing } = this.props;
        let { isLoading } = this.state;

        return (
            isLoading ?
                <LoadingScreen /> :
                <div className="container">
                    <h5 className="mb-4">Select from listings on Google Maps within 200m of pin. Not here? Try moving your pin more accurately or <Link to="/add/details">add manually</Link>.</h5>
                    {addListing.nearbyResults.map((result, i) =>
                        <NearbyResult listing={result} key={i} />
                    )}
                </div>
        )
    }
}

export default SelectFromGoogleMaps;