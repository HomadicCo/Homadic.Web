import React from 'react';
import { Link } from 'react-router';
import ListingSnippet from '../../../components/ListingSnippet/ListingSnippet';
import LoadingPlane from '../../../components/LoadingScreen/LoadingPlane';
import ListingPreview from './ListingPreview';
import ActionHeader from './ActionHeader';
import ListingsFilter from '../../Filter/ListingsFilter';
import SelectFromGoogleMaps from './SelectFromGoogleMaps';

class MapSidebar extends React.Component {
    constructor(props) {
        super(props);

        this.showSelectedListing = this.showSelectedListing.bind(this);
        this.setAddNewListingMode = this.setAddNewListingMode.bind(this);
        this.clearFilter = this.clearFilter.bind(this);
    }

    UNSAFE_componentWillMount() {
        this.props.setSelectedListing(null);
    }

    clearFilter() {
        this.props.clearFilter();
        this.props.setFilterMode(false);
    }

    showSelectedListing(listing) {
        this.props.setSelectedListing(listing);
        this.props.renderQueryParams({
            add: [{ key: 'listing', value: listing.slug }]
        });
    }

    setAddNewListingMode(value, e) {
        e.preventDefault();
        let { setSelectedListing, setAddNewListingCoordinates, setAddNewListingMode } = this.props;

        setSelectedListing(null);
        setAddNewListingMode(value);

        if (!value) {
            setAddNewListingCoordinates(undefined);
        }
    }

    renderNoSnippets() {
        let { filter } = this.props;

        return (
            <div className="col text-center">
                <p>No listings for this area <i className="far fa-frown" /></p>
                <div className="btn-group">
                    {!filter.empty ? <button className="btn btn-default btn" onClick={this.clearFilter}>Clear filter <i className="fas fa-times" /></button> : undefined}
                    <button onClick={this.setAddNewListingMode.bind(null, true)} className="btn btn-success btn-sm"><i className="fas fa-plus" /> Add listing</button>
                </div>
            </div>
        )
    }

    renderSnippets() {
        let { listings, map } = this.props;

        return (
            map.filterMode ?
                <ListingsFilter {...this.props} /> :
                listings.fetching ? <LoadingPlane /> :
                    <div className="row listing-snippets">
                        {listings.data.length > 0 ? listings.data.map((listing, i) => <Link key={i} onClick={this.showSelectedListing.bind(null, listing)}><ListingSnippet listing={listing} /></Link>) : this.renderNoSnippets()}
                    </div>
        )
    }

    renderSidebarContent() {
        let { map } = this.props;

        return (
            map.selectedListing ? <ListingPreview listing={map.selectedListing} /> : this.renderSnippets()
        );
    }

    render() {
        let { map } = this.props;

        return (
            <div>
                <ActionHeader {...this.props} />
                <div className="map-sidebar-content">
                    {map.addNewListingMode ? <SelectFromGoogleMaps {...this.props} /> : this.renderSidebarContent()}
                </div>
            </div>
        )
    }
}

export default MapSidebar;