import React from 'react';
import { rentalTypes } from '../../data';
import ListingHeader from '../ListingHeader/ListingHeader';
import LoadingPlane from '../LoadingScreen/LoadingPlane';
import Notes from '../../components/ListingTemplate/components/Notes';
import Contact from '../../components/ListingTemplate/components/Contact';
import Internet from '../../components/ListingTemplate/components/Internet';
import Rooms from '../../components/ListingTemplate/components/Rooms';
import Bills from '../../components/ListingTemplate/components/Bills';
import NotFound from '../../components/NotFound/NotFound';

class ListingVersion extends React.Component {
    constructor(props) {
        super(props);

        this.state = { error: undefined };
    }

    componentDidMount() {
        let { params, handleGetListingVersion } = this.props;

        handleGetListingVersion(params.listingSlug, params.versionId);
    }

    renderError(error) {
        return (
            <div className="alert alert-danger" role="alert">{error}</div>
        )
    }

    renderRentalType(type) {
        const i = rentalTypes.findIndex((r) => r.value == type);
        return rentalTypes[i].name;
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
        let { listingHistory, params } = this.props;
        let { selected } = listingHistory;
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
                        {selected.changed === 'Bills' ?
                            this.renderChange(<Bills bills={current.bills} slug={params.listingSlug} />, <Bills bills={previous.bills} slug={params.listingSlug} />) : undefined}
                        {selected.changed === 'Contact Details' || selected.changed === 'Social Details' ?
                            this.renderChange(<Contact contact_details={current.contact_details} social_details={current.social_details} />, <Contact contact_details={previous.contact_details} social_details={current.social_details} />) : undefined}
                        {selected.changed === 'Notes' ?
                            this.renderChange(<Notes notes={current.notes} />, <Notes notes={previous.notes} />) : undefined}
                        {selected.changed === 'Rooms' ?
                            this.renderChange(<Rooms rooms={current.rooms} />, <Rooms rooms={previous.rooms} />) : undefined}
                        {selected.changed === 'Rental Type' ?
                            this.renderChange(<p>{this.renderRentalType(current.type)}</p>, <p>{this.renderRentalType(previous.type)}</p>) : undefined}
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

    renderLoaded() {
        this.props.listingHistory.selec

        return (
            this.props.listingHistory.selected != undefined ? this.renderListingVersion() : <NotFound />
        )
    }

    render() {
        return (
            <div className="listing">
                <ListingHeader {...this.props} full />
                {this.props.listingHistory.fetching ? this.renderLoading() : this.renderLoaded()}
            </div>
        )
    }
}

export default ListingVersion;
