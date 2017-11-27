import React from 'react';
import { browserHistory, Link } from 'react-router';

// components
import NearbyResult from '../components/NearbyResult';

class SelectFromGoogleMaps extends React.Component {
    constructor(props) {
        super(props)
    }

    componentWillMount() {
        let { map, handleGetNearbyResults, setLoadingStatus } = this.props;

        if (map.addNewListingCoordinates) {
            setLoadingStatus(true);
            handleGetNearbyResults(map.addNewListingCoordinates).then(() => {
                setLoadingStatus(false);
            }).catch(() => {
                setLoadingStatus(false);
                browserHistory.push('/');
            });
        } else {
            browserHistory.push('/');
        }
    }

    render() {
        let { addListing } = this.props;

        return (
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