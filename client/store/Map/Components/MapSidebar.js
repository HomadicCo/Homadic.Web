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
            <div>
                <ActionHeader {...this.props} />
                {map.filterMode ?
                    this.renderFilterMode() :
                    <div className="listing-snippets">
                        {listings.data.map((listing, i) => <ListingSnippet key={i} listing={listing} />)}
                    </div>
                }
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
            map.addNewListingMode ? this.renderNewListingMode() : this.renderSidebarContent()
        )
    }
}

export default MapSidebar;