import React from 'react';
import { browserHistory, Link } from 'react-router';

// components
import LoadingScreen from '../../../components/LoadingScreen/LoadingScreen';
import NearbyResult from '../components/NearbyResult';

class SelectFromGoogleMaps extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoading: true
        };
    }

    componentWillMount() {
        let { map, handleGetNearbyResults } = this.props;

        if (map.addNewListingCoordinates) {
            handleGetNearbyResults(map.addNewListingCoordinates).then(() => {
                this.setState({ isLoading: false });
            }).catch(() => {
                browserHistory.push('/');
            });
        } else {
            browserHistory.push('/');
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