import React from 'react';
import PlacesAutocomplete, { geocodeByAddress } from 'react-places-autocomplete'
import FontAwesome from 'react-fontawesome';
import { convertToSlug } from '../../functions';
import Avatar from '../../Components/Avatar/Avatar';

class PlacesTypeahead extends React.Component {
    constructor(props) {
        super(props)
        this.handleSelect = this.handleSelect.bind(this);
        this.onChange = (address) => this.setState({ address })

        this.state = {
            address: "",
            slug: props.params.citySlug,
            city: ""
        }

        this.getFullCityName(this.state.slug);
    }

    getFullCityName(slug) {
        geocodeByAddress(slug)
            .then(results =>
                this.setState({ city: results[0]["address_components"][0]["long_name"] })
            );
    }

    handleSelect(e) {
        this.setState({ address: "" });
        browserHistory.push("/" + convertToSlug(e));
    }

    render() {
        let { profile } = this.props;
        const inputProps = {
            value: this.state.address,
            onChange: this.onChange,
            ...this.props.inputProps
        }

        const options = {
            types: ['(cities)']
        }

        const AutocompleteItem = ({ suggestion }) => (<div className="result"><FontAwesome name="map-marker" size="lg" className="red-light" /> {suggestion}</div>)

        return (
            <div className="container">
                <div className="col-12 text-center">
                    <div className="my-3">
                        <Avatar size={100} profile={profile.data} />
                    </div>
                    <h5>You are adding a place to <strong>{this.state.city}</strong> as <strong>{profile.data.name}</strong>.</h5>
                    <p>Only your first name is shown as the creator.</p>
                    <form onSubmit={this.handleFormSubmit}>
                        <PlacesAutocomplete
                            inputProps={inputProps}
                            options={options}
                            styles={this.props.styles}
                            classNames={this.props.classNames}
                            onSelect={this.handleSelect}
                            autocompleteItem={AutocompleteItem} />
                    </form>
                </div>
            </div>
        )
    }
}

export default PlacesTypeahead;