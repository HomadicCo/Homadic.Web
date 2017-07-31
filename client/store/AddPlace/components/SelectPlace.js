import React from 'react';
import PlacesAutocomplete, { geocodeByAddress } from 'react-places-autocomplete'
import FontAwesome from 'react-fontawesome';
import queryString from 'query-string';
import SelectPlaceTypeahead from './SelectPlaceTypeahead';
import Avatar from '../../../Components/Avatar/Avatar';

class SelectPlace extends React.Component {
    constructor(props) {
        super(props)
        this.handleSelect = this.handleSelect.bind(this);
        this.handleClearCity = this.handleClearCity.bind(this);
        this.state = { address: "", city: "" };
        this.onChange = (address) => this.setState({ address });

        // set preselected city
        if (props.params.citySlug) {
            this.getFullCityName(props.params.citySlug);
        }
    }

    getFullCityName(slug) {
        geocodeByAddress(slug)
            .then(results =>
                this.setState({
                    city: results[0]["address_components"][0]["long_name"],
                    lat: results[0]["geometry"]["location"]["lat"](),
                    lng: results[0]["geometry"]["location"]["lng"]()
                })
            );
    }

    handleClearCity(e) {
        e.preventDefault();
        this.setState({ address: "", city: "" })
    }

    handleSelect(e) {
        this.getFullCityName(e);
    }

    renderNothingSelected() {
        let { profile } = this.props;

        const inputProps = {
            value: this.state.address,
            onChange: this.onChange,
            placeholder: "Select city..."
        }

        const classNames = {
            root: 'form-group add-typeahead',
            input: 'form-control',
            autocompleteContainer: ''
        }

        const options = {
            types: ['(cities)']
        }

        const AutocompleteItem = ({ suggestion }) => (<div className="result"><FontAwesome name="map-marker" size="lg" className="red-light" /> {suggestion}</div>)

        return (
            <div className="col-12 text-center">
                <div className="my-3">
                    <Avatar size={60} profile={profile.data} />
                </div>
                <h5>Add a place to Homadic as <strong>{profile.data.name}</strong>.</h5>
                <p>Your first name is shown on the listing as the creator.</p>
                <form onSubmit={this.handleFormSubmit}>
                    <PlacesAutocomplete
                        inputProps={inputProps}
                        options={options}
                        styles={this.props.styles}
                        classNames={classNames}
                        onSelect={this.handleSelect}
                        autocompleteItem={AutocompleteItem} />
                </form>
            </div>
        )
    }

    renderCitySelected() {
        let { profile } = this.props;
        let { city, lat, lng } = this.state;

        return (
            <div className="col-12 text-center">
                <div className="my-3">
                    <Avatar size={60} profile={profile.data} />
                </div>
                <button onClick={this.handleClearCity} className="btn btn-sm btn-action mb-3">Change city</button>
                <h5>Add a place to <strong>{city}</strong> as <strong>{profile.data.name}</strong>.</h5>
                <p>Your first name is shown on the listing as the creator.</p>
                 <SelectPlaceTypeahead {...this.props} lat={lat} lng={lng} /> 
            </div>
        )
    }

    render() {
        let { city } = this.state;

        return (
            <div className="container">
                {!!city ? this.renderCitySelected() : this.renderNothingSelected()}
            </div>
        )
    }
}

export default SelectPlace;