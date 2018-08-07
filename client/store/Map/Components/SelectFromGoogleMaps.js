import React from 'react';
import LoadingPlane from '../../../components/LoadingScreen/LoadingPlane';

// components
import NearbyResult from '../components/NearbyResult';

class SelectFromGoogleMaps extends React.Component {
    constructor(props) {
        super(props)

        this.handleChange = this.handleChange.bind(this);

        this.state = {
            selectedType: 'lodging',
            rentalTypes: [
                {
                    name: 'Lodging',
                    value: 'lodging'
                },
                {
                    name: 'Hotel',
                    value: 'hotel'
                },
                {
                    name: 'Hostel',
                    value: 'hostel'
                },
                {
                    name: 'Apartment',
                    value: 'apartment'
                },
                {
                    name: 'Condominium',
                    value: 'condominium'
                },
                {
                    name: 'Villa',
                    value: 'villa'
                },
                {
                    name: 'Resort',
                    value: 'resort'
                }
            ]
        }
    }

    componentDidMount() {
        this.props.clearNearbyResults();
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.map.addNewListingCoordinates != this.props.map.addNewListingCoordinates || prevState.selectedType != this.state.selectedType) {
            this.fetchNearbyResults();
        }
    }

    fetchNearbyResults() {
        let { map, handleGetNearbyResults } = this.props;
        let { selectedType } = this.state;

        handleGetNearbyResults(selectedType, map.addNewListingCoordinates);
    }

    handleChange(e) {
        this.setState({ selectedType: e.target.value });
    }

    renderTypeSelect() {
        let { rentalTypes, selectedType } = this.state;

        return (
            <div className="form-group">
                <label htmlFor="inputState"><strong>Listing type <i className="fab fa-google ml-1"></i></strong></label>
                <select id="inputState" className="form-control" onChange={this.handleChange}>
                    {rentalTypes.map((r, i) => {
                        return (<option value={r.value} key={i} selected={r.value == selectedType}>{r.name}</option>)
                    })}
                </select>
            </div>
        )
    }

    render() {
        let { addListing } = this.props;

        return (
            <div>
                {this.renderTypeSelect()}
                <p className="mb-4">Select from listings on Google Maps within 200m of pin, move pin for accuracy. <a href="https://github.com/HomadicCo/Homadic.Web#why-cant-i-find-a-place-on-google-maps" rel="noopener noreferrer" target="_blank">Can&apos;t find it?</a></p>
                {addListing.ui.fetchingNearbyResults ? <LoadingPlane /> :
                    <div>
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