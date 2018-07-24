import React from 'react';
import ListingHeader from '../ListingHeader/ListingHeader';
import LoadingPlane from '../LoadingScreen/LoadingPlane';
import Notes from '../../components/ListingTemplate/components/Notes';
import Contact from '../../components/ListingTemplate/components/Contact';
import Internet from '../../components/ListingTemplate/components/Internet';
import Rooms from '../../components/ListingTemplate/components/Rooms';

class ListingVersion extends React.Component {
    constructor(props) {
        super(props);

        this.state = { error: undefined };
    }

    componentWillMount() {
        let { params, handleGetListingVersion } = this.props;

        handleGetListingVersion(params.listingSlug, params.versionId).then(() => {
            this.setState({ error: undefined });
        }).catch((response) => {
            this.setState({ error: response.data });
        })
    }

    renderError(error) {
        return (
            <div className="alert alert-danger" role="alert">{error}</div>
        )
    }

    renderChange(current, previous) {
        return (
            <div className="row">
                <div className="col-md-6">
                    <h3>Previous</h3>
                    {previous}
                </div>
                <div className="col-md-6">
                    <h3>This</h3>
                    {current}
                </div>
            </div>
        );
    }

    renderListingVersion() {
        let { selected } = this.props.listingHistory;
        const text = selected.changed == 'Initial' ? 'Listing submitted by ' + selected.first_name : selected.changed + ' changed by ' + selected.first_name;
        const current = selected.current_listing_version;
        const previous = selected.previous_listing_version;

        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h3>{selected.name}</h3>
                        <h5>{text}</h5>
                        <hr />
                        {/* {selected.changed === 'Bills' ? this.renderChange(<Notes notes={current.notes} />, <Notes notes={previous.notes} />) : undefined} */}
                        {selected.changed === 'Contact Details' || selected.changed === 'Social Details' ?
                            this.renderChange(<Contact contact_details={current.contact_details} social_details={current.social_details} />, <Contact contact_details={previous.contact_details} social_details={current.social_details} />) : undefined}
                        {selected.changed === 'Notes' ?
                            this.renderChange(<Notes notes={current.notes} />, <Notes notes={previous.notes} />) : undefined}
                        {selected.changed === 'Rooms' ?
                            this.renderChange(<Rooms rooms={current.rooms} />, <Rooms rooms={previous.rooms} />) : undefined}
                        {/* {selected.changed === 'Rental Type' ? this.renderChange(<Notes notes={current.notes} />, <Notes notes={previous.notes} />) : undefined} */}
                        {selected.changed === 'Wifi' ?
                            this.renderChange(<Internet wifi={current.wifi} />, <Internet wifi={previous.wifi} />) : undefined}
                    </div>
                </div>
            </div>
        )
    }

    renderLoading() {
        return (
            <div className="mt-5">
                <LoadingPlane />
            </div>
        )
    }

    render() {
        return (
            <div className="listing">
                <ListingHeader {...this.props} full />
                {this.props.listingHistory.fetching ? this.renderLoading() : this.renderListingVersion()}
            </div>
        )
    }
}

export default ListingVersion;
