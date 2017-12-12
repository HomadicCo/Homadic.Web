import React from 'react';
import { Link } from 'react-router';
import ListingSnippet from './ListingSnippet';
import PlacesTypeahead from '../../../Components/PlacesTypeahead/PlacesTypeahead';

class ActionBar extends React.Component {
    constructor(props) {
        super(props);
    }

    renderSnippets() {
        let { data } = this.props.listings;

        return (
            <div className="listing-snippets">
                {data.map((listing, i) => <ListingSnippet key={i} listing={listing} />)}
            </div>
        )
    }

    renderSidebarContent() {
        let { map } = this.props;

        const classNames = {
            root: 'form-group map-typeahead',
            input: 'form-control',
            autocompleteContainer: ''
        }

        const inputProps = {
            placeholder: 'Search cities...'
        }

        return (
            <div>
                <div className="map-sidebar-tools row mt-3">
                    <div className="col-9">
                        <PlacesTypeahead {...this.props} classNames={classNames} inputProps={inputProps} />
                    </div>
                    <div className="col-3 filter">
                        <button className="btn btn-action">Filter <i className="fas fa-filter" /></button>
                    </div>
                </div>
                {map.hoveredListing ? <ListingSnippet listing={map.hoveredListing} /> : this.renderSnippets()}
            </div >
        );
    }

    renderNewListingMode() {
        return (
            <Link to="/add" className="btn btn-success"><i className="fas fa-check" /> Add new listing here</Link>
        )
    }

    render() {
        let { map } = this.props;

        return (
            map.addNewListingMode ? this.renderNewListingMode() : this.renderSidebarContent()
        )
    }
}

export default ActionBar;