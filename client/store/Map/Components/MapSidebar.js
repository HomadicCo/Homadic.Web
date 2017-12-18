import React from 'react';
import { Link } from 'react-router';
import ListingSnippet from './ListingSnippet';
import ListingPreview from './ListingPreview';
import ActionHeader from './ActionHeader';

class MapSidebar extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.setSelectedListing(null);
    }

    renderFilterMode() {
        return (
            <p>Hey this is filter mode.</p>
        )
    }

    renderSnippets() {
        let { listings, map } = this.props;

        return (
            map.filterMode ?
                this.renderFilterMode() :
                <div className="listing-snippets">
                    {listings.data.length > 0 ? listings.data.map((listing, i) => <ListingSnippet key={i} listing={listing} />) : <p>No listings for this area <i className="far fa-frown" /></p>}
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