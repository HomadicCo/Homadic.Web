import React from 'react';
import { Link } from 'react-router';
import ListingSnippet from './ListingSnippet';
import ListingPreview from './ListingPreview';
import ActionHeader from './ActionHeader';
import ListingsFilter from '../../Filter/ListingsFilter';

class MapSidebar extends React.Component {
    constructor(props) {
        super(props);

        this.showSelectedListing = this.showSelectedListing.bind(this);
    }

    componentWillMount() {
        this.props.setSelectedListing(null);
    }

    showSelectedListing(listing) {
        this.props.setSelectedListing(listing);
    }

    renderSnippets() {
        let { listings, map } = this.props;

        return (
            map.filterMode ?
                <ListingsFilter {...this.props} /> :
                <div className="listing-snippets">
                    {listings.data.length > 0 ? listings.data.map((listing, i) => <Link key={i} onClick={this.showSelectedListing.bind(null, listing)}><ListingSnippet listing={listing} /></Link>) : <p className="text-center">No listings for this area <i className="far fa-frown" /></p>}
                </div>
        )
    }

    renderNewListingMode() {
        return (
            <Link to="/add" className="btn btn-success"><i className="fas fa-check" /> Add new listing here</Link>
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
                    {map.addNewListingMode ? this.renderNewListingMode() : this.renderSidebarContent()}
                </div>
            </div>
        )
    }
}

export default MapSidebar;