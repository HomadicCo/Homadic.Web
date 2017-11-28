import React from 'react';
import FontAwesome from 'react-fontawesome';
import Avatar from '../../Components/Avatar/Avatar';
import Header from './components/Header';
import Internet from './components/Internet';
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
                    <div className="row">
                        <div className="col-auto ml-auto text-right">
                            You are submitting as <strong>{profile.data.first_name}</strong>. Only your first name is shown. <button className="btn btn-success btn-sm">Submit <FontAwesome name="check" /></button>
                        </div>
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
                            <h5 className="blue"><FontAwesome name="thumbs-up" /> <FontAwesome name="thumbs-o-down" /> <span className="btn btn-sm btn-outline-primary mx-1"><FontAwesome name="pencil" /> Edit</span> {authentication.isLoggedIn ? <Avatar size={30} profile={profile.data} /> : undefined}</h5>
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
                    <LocationMap listing={listing} />
                    <Contact listing={listing} />
                </div>
            </div>
        )
    }
}

export default ListingTemplate;