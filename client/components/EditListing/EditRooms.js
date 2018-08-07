import React from 'react';
import { browserHistory } from 'react-router';
import { apiUpdateRooms } from '../../api';
import ListingHeader from '../ListingHeader/ListingHeader';
import LoadingPlane from '../LoadingScreen/LoadingPlane';
import Hero from '../ListingTemplate/components/Hero';
import RoomsEditor from '../EditComponents/RoomsEditor';

class EditRooms extends React.Component {
    constructor(props) {
        super(props);

        this.handleSaveChanges = this.handleSaveChanges.bind(this);
        this.handleGoBack = this.handleGoBack.bind(this);

        this.state = {
            error: undefined,
            loading: false
        }
    }

    componentDidMount() {
        let { params, handleSetNewListing } = this.props;

        handleSetNewListing(params.listingSlug).catch(() => {
            browserHistory.push('/');
        });
    }

    handleGoBack(e) {
        e.preventDefault();

        browserHistory.push('/listing/' + this.props.params.listingSlug);
    }

    handleSaveChanges(e) {
        e.preventDefault();
        let { slug, rooms } = this.props.addListing.listing;

        this.setState({ loading: true, error: undefined });

        apiUpdateRooms(slug, rooms).then(() => {
            browserHistory.push('/listing/' + slug + '?updated=true');
        }).catch((e) => {
            this.setState({ loading: false, error: e });
        });
    }

    renderLoaded() {
        let { listing } = this.props.addListing;

        return (
            <div className="listing">
                <Hero listing={listing} />
                <RoomsEditor rooms={listing.rooms} {...this.props} />
                <div className="text-center mt-4">
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
        let { addListing, ui } = this.props;

        return (
            <div className="listing">
                <ListingHeader {...this.props} full />
                <div className="container mb-4">
                    {error != undefined ? <div className="alert alert-danger">{error}</div> : undefined}
                    {ui.fetchingNewListing || loading || addListing.listing == undefined ? <LoadingPlane /> : this.renderLoaded()}
                </div>
            </div>
        )
    }
}

export default EditRooms;