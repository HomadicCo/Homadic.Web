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
import ImageGallery from '../ImageGallery/ImageGallery';

class ListingTemplate extends React.Component {
    constructor(props) {
        super(props);

        this.postListing = this.postListing.bind(this);
        this.state = {
            listingError: null
        }
    }

    postListing() {
        let { clearNewListing, addListing, setLoadingStatus } = this.props;
        setLoadingStatus(true);

        apiPostListing(addListing.listing).then((response) => {
            this.setState({ listingError: null });
            browserHistory.push('/listing/' + response.data.slug);
            setLoadingStatus(false);
            clearNewListing();
        }).catch((e) => {
            this.setState({ listingError: e.response.data });
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
        let { images, listing, previewMode } = this.props;
        let { listingError } = this.state;
        const angryIconStyle = { fontSize: '1.2em' }

        return (
            <div>
                {previewMode ? this.renderPreviewHeader() : <ListingHeader {...this.props} full />}
                <div className="listing">
                    {listingError != null ? <div className="alert alert-danger" role="alert"><i className="far fa-angry" style={angryIconStyle} /> {listingError}</div> : undefined}
                    <Hero listing={listing} full />
                    <div className="container listing-content">
                        <Rooms listing={listing} />
                        <Notes notes={listing.notes} />
                        <Internet listing={listing} />
                        <Nearby listing={listing} previewMode={previewMode} colClass="col-4" />
                        {previewMode ? undefined : <ImageGallery images={images.data.data} loading={images.loading} slug={listing.slug} />}
                        <LocationMap listing={listing} />
                        <Contact listing={listing} />
                    </div>
                </div>
            </div>
        )
    }
}

export default ListingTemplate;