import React from 'react';
import FontAwesome from 'react-fontawesome';
import Avatar from '../../Components/Avatar/Avatar';
import RatingBadge from '../../components/RatingBadge/RatingBadge';
import IconsBar from '../../components/IconsBar/IconsBar';
import Amenities from './components/Amenities';
import Internet from './components/Internet';
import Contact from './components/Contact';
import Rooms from './components/Rooms';

class ListingTemplate extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { authentication, listing, profile } = this.props;

        return (
            <div>
                <div className="navbar fixed-top bg-white px-3 listing-header">
                    <div className="container">
                        <div className="col ml-auto">
                            <h5 className="blue"><FontAwesome name="thumbs-up" /> <FontAwesome name="thumbs-o-down" /> <span className="btn btn-sm btn-outline-primary mx-1"><FontAwesome name="pencil" /> Edit</span> {authentication.isLoggedIn ? <Avatar size={30} profile={profile.data} /> : undefined}</h5>
                        </div>
                    </div>
                </div>

                <div className="container text-center listing">
                    <div className="row justify-content-md-center">
                        <div className="col-8">
                        <h2><strong>{listing.name}</strong> <RatingBadge rating={listing.rating} /></h2>
                        </div>
                    </div>
                    <div className="row justify-content-md-center">
                        <div className="col-6">
                            <Amenities listing={listing} />
                        </div>
                    </div>
                    <div>
                        <p>{listing.notes}</p>
                    </div>
                </div>
                <div className="container listing-content">
                    <Rooms listing={listing} />
                    <Internet listing={listing} />
                    <Contact listing={listing} />
                </div>
            </div>
        )
    }
}

export default ListingTemplate;