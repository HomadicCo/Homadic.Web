import React from 'react';
import { browserHistory } from 'react-router';

import Hero from './components/Hero';
import ListingHeader from './components/ListingHeader';
import Internet from './components/Internet';
import Nearby from './components/Nearby';
import Notes from './components/Notes';
import Rooms from './components/Rooms';
import LocationMap from './components/LocationMap';
import Contact from './components/Contact';
import { apiPostListing } from '../../api/index';

class ListingTemplate extends React.Component {
    constructor(props) {
        super(props);

        this.postListing = this.postListing.bind(this);
    }

    postListing() {
        let { clearNewListing, addListing, setLoadingStatus } = this.props;
        setLoadingStatus(true);

        apiPostListing(addListing.listing).then((response) => {
            console.log('/listing/' + response.data.slug);
            browserHistory.push('/listing/' + response.data.slug);
            setLoadingStatus(false);
            clearNewListing();
        }).catch((e) => {
            console.log(e)
            setLoadingStatus(false);
        })
    }

    renderPreviewHeader() {
        let { profile } = this.props;

        return (
            <div className="navbar fixed-top bg-white px-3 listing-header">
                <div className="container">
                    <div className="col-auto ml-auto text-right">
                        You are submitting as <strong>{profile.data.first_name}</strong>. <button className="btn btn-success btn-sm" onClick={this.postListing}>Submit <i className="fas fa-check" /></button>
                    </div>
                </div>
            </div>
        )
    }

    render() {
        let { listing, previewMode } = this.props;

        return (
            <div>
                {previewMode ? this.renderPreviewHeader() : <ListingHeader {...this.props} full />}
                <Hero listing={listing} />
                <div className="container listing-content">
                    <Rooms listing={listing} />
                    <Notes notes={listing.notes} />
                    <Internet listing={listing} />
                    <Nearby listing={listing} previewMode={previewMode} colClass="col-4" />
                    <LocationMap listing={listing} />
                    <Contact listing={listing} />
                </div>
            </div>
        )
    }
}

export default ListingTemplate;