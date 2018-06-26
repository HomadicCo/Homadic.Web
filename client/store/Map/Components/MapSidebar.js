import React from 'react';
import { Link } from 'react-router';
import ListingSnippet from '../../../components/ListingSnippet/ListingSnippet';
import ListingPreview from './ListingPreview';
import ActionHeader from './ActionHeader';
import ListingsFilter from '../../Filter/ListingsFilter';
import SelectFromGoogleMaps from './SelectFromGoogleMaps';

class MapSidebar extends React.Component {
    constructor(props) {
        super(props);

        this.showSelectedListing = this.showSelectedListing.bind(this);
        this.setAddNewListingMode = this.setAddNewListingMode.bind(this);
    }

    componentWillMount() {
        this.props.setSelectedListing(null);
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
        return (
            <div className="text-center">
                <p>No listings for this area <i className="far fa-frown" /></p>
                <button onClick={this.setAddNewListingMode.bind(null, true)} className="btn btn-success btn-sm"><i className="fas fa-plus" /> Add listing</button>
            </div>
        )
    }

    renderSnippets() {
        let { listings, map } = this.props;

        return (
            map.filterMode ?
                <ListingsFilter {...this.props} /> :
                listings.fetching ? <h3 className="text-center"><i className="blue fas fa-plane fa-spin" size="2x" /></h3> :
                    <div className="listing-snippets">
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