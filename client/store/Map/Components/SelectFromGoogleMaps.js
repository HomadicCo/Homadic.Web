import React from 'react';
import LoadingPlane from '../../../components/LoadingScreen/LoadingPlane';

// components
import NearbyResult from '../components/NearbyResult';

class SelectFromGoogleMaps extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.clearNearbyResults();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.map.addNewListingCoordinates != this.props.map.addNewListingCoordinates) {
            this.fetchNearbyResults();
        }
    }

    fetchNearbyResults() {
        let { map, handleGetNearbyResults } = this.props;

        handleGetNearbyResults(map.addNewListingCoordinates);
    }

    render() {
        let { addListing, listings } = this.props;

        return (
            <div className="container">
                {listings.fetching ? <LoadingPlane /> :
                    <div>
                        <p className="mb-4">Select from listings on Google Maps within 200m of pin, move pin for accuracy. <a href="https://github.com/HomadicCo/Homadic.Web#why-cant-i-find-a-place-on-google-maps" rel="noopener noreferrer" target="_blank">Still not here? Find out why.</a></p>
                        {addListing.nearbyResults.map((result, i) =>
                            <NearbyResult listing={result} key={i} {...this.props} />
                        )}
                    </div>
                }
            </div>
        )
    }
}

export default SelectFromGoogleMaps;