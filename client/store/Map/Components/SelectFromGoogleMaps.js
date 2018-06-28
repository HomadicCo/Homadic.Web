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
        let { map, handleGetNearbyResults, updateFetchingListingsStatus } = this.props;

        updateFetchingListingsStatus(true);
        handleGetNearbyResults(map.addNewListingCoordinates).then(() => {
            updateFetchingListingsStatus(false);
        });
    }

    render() {
        let { addListing, listings } = this.props;

        return (
            <div className="container">
                {listings.fetching ? <LoadingPlane /> :
                    <div>
                        <p className="mb-4">Select from listings on Google Maps within 200m of pin. Not here? Try moving your pin more accurately.</p>
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