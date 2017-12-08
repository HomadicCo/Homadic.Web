import React from 'react';
import Avatar from '../../Components/Avatar/Avatar';
import Header from './components/Header';
import Internet from './components/Internet';
import Nearby from './components/Nearby';
import Notes from './components/Notes';
import Rooms from './components/Rooms';
import LocationMap from './components/LocationMap';
import Contact from './components/Contact';

class ListingTemplate extends React.Component {
    constructor(props) {
        super(props);
    }

    renderPreviewHeader() {
        let { profile } = this.props;

        return (
            <div className="navbar fixed-top bg-white px-3 listing-header">
                <div className="container">
                    <div className="col-auto ml-auto text-right">
                        You are submitting as <strong>{profile.data.first_name}</strong>. <button className="btn btn-success btn-sm">Submit <i className="fas fa-check" /></button>
                    </div>
                </div>
            </div>
        )
    }

    renderLiveHeader() {
        let { authentication, profile } = this.props;

        return (
            <div className="navbar fixed-top bg-white px-3 listing-header">
                <div className="container">
                    <div className="row justify-content-end">
                        <div className="col">
                            <h5 className="blue"><i className="far fa-thumbs-up" /> <i className="far fa-thumbs-down" /> <span className="btn btn-sm btn-outline-primary mx-1"><i className="fas fa-pencil-alt" /> Edit</span> {authentication.isLoggedIn ? <Avatar size={30} profile={profile.data} /> : undefined}</h5>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    render() {
        let { listing, previewMode } = this.props;

        return (
            <div>
                {previewMode ? this.renderPreviewHeader() : this.renderLiveHeader()}
                <Header listing={listing} />
                <div className="container listing-content">
                    <Rooms listing={listing} />
                    <Notes notes={listing.notes} />
                    <Internet listing={listing} />
                    <Nearby listing={listing} previewMode={previewMode} />
                    <LocationMap listing={listing} />
                    <Contact listing={listing} />
                </div>
            </div>
        )
    }
}

export default ListingTemplate;