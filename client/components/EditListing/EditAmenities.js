import React from 'react';
import { browserHistory } from 'react-router';
import { apiGetListing } from '../../api';
import { setNestedKey } from '../../functions';
import ListingHeader from '../ListingHeader/ListingHeader';
import LoadingPlane from '../LoadingScreen/LoadingPlane';
import Hero from '../ListingTemplate/components/Hero';
import AmenitiesEditor from '../EditComponents/AmenitiesEditor';

class EditAmenities extends React.Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleSaveChanges = this.handleSaveChanges.bind(this);
        this.handleGoBack = this.handleGoBack.bind(this);

        this.state = {
            error: undefined,
            loading: true,
            listing: {}
        }
    }

    componentWillMount() {
        let { params } = this.props;

        apiGetListing(params.listingSlug).then((response) => {
            this.setState({ listing: response.data, loading: false });
        }).catch(() => {
            browserHistory.push('/');
        });
    }

    handleGoBack(e) {
        e.preventDefault();

        browserHistory.push('/listing/' + this.props.params.listingSlug);
    }

    handleSaveChanges(e) {
        e.preventDefault();
        let { slug, amenities } = this.state.listing;

        this.setState({ ...this.state, loading: true, error: undefined });

        this.props.handleUpdateAmenities(slug, amenities).then(() => {
            browserHistory.push('/listing/' + slug + '?updated=true');
        }).catch((e) => {
            this.setState({ ...this.state, loading: false, error: e });
        });
    }

    handleChange(e) {
        const target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let key = target.name;

        // check if int or string
        value = target.getAttribute('data-type') === 'int' ? parseFloat(value) : value;

        this.setState(Object.assign({}, setNestedKey(this.state.listing, key, value)));
    }

    renderLoaded() {
        let { listing } = this.state;

        return (
            <div className="listing">
                <Hero listing={listing} />
                <div className="content-box">
                    <AmenitiesEditor amenities={listing.amenities} handleChange={this.handleChange} />
                </div>
                <div className="text-center">
                    <div className="btn-group" role="group" aria-label="Do stuff">
                        <button className="btn" onClick={this.handleGoBack}><i className="far fa-save"></i> Back</button>
                        <button className="btn btn-action" onClick={this.handleSaveChanges}><i className="far fa-save"></i> Save</button>
                    </div>
                </div>
            </div>
        );
    }

    render() {
        let { error, loading } = this.state;

        return (
            <div className="listing">
                <ListingHeader {...this.props} full />
                <div className="container mb-4">
                    {error != undefined ? <div className="alert alert-danger">{error}</div> : undefined}
                    {loading ? <LoadingPlane /> : this.renderLoaded()}
                </div>
            </div>
        )
    }
}

export default EditAmenities;