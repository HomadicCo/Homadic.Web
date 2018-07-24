import React from 'react';
import { Link } from 'react-router';
import Avatar from '../../Components/Avatar/Avatar';
import ThumbsUpDown from '../../components/ThumbsUpDown/ThumbsUpDown';
import DropDownMenu from '../../Components/DropDownMenu/DropDownMenu';

class ListingHeader extends React.Component {
    constructor(props) {
        super(props);

        this.clickThumbsUp = this.clickThumbsUp.bind(this);
    }

    clickThumbsUp(value) {
        let { handleThumbsUp, listings } = this.props;

        handleThumbsUp(listings.selected.slug, value);
    }

    renderEditDropDown() {
        let { selected } = this.props.listings;

        return (
            <DropDownMenu icon={<i className="fas fa-pencil-alt mr-1" />} name="Edit" customClass="ml-2">
                <Link className="dropdown-item text-truncate" href={'/listing/' + selected.slug}><span className="blue"><i className="fas fa-home mr-1" /> View listing</span></Link>
                <Link className="dropdown-item" href={'/listing/' + selected.slug + '/history'}><i className="fas fa-history mr-1"></i> History</Link>
                <div className="dropdown-divider"></div>
                <Link className="dropdown-item" href={'/listing/' + selected.slug + '/amenities'}><i className="fas fa-dumbbell mr-1" /> Amenities</Link>
                <Link className="dropdown-item" href={'/listing/' + selected.slug + '/bills'}><i className="fas fa-money-bill-wave mr-1" /> Bills</Link>
                <Link className="dropdown-item" href={'/listing/' + selected.slug + '/contact-details'}><i className="fas fa-users mr-1" /> Contact Details</Link>
                <Link className="dropdown-item" href={'/listing/' + selected.slug + '/images'}><i className="fas fa-images mr-1" /> Images</Link>
                <Link className="dropdown-item" href={'/listing/' + selected.slug + '/notes'}><i className="fas fa-align-left mr-1" /> Notes</Link>
                <Link className="dropdown-item" href={'/listing/' + selected.slug + '/rooms'}><i className="fas fa-bed mr-1" /> Rooms</Link>
                <Link className="dropdown-item" href={'/listing/' + selected.slug + '/social-details'}><i className="fab fa-facebook-square mr-1" /> Social Details</Link>
                <Link className="dropdown-item" href={'/listing/' + selected.slug + '/type'}><i className="fas fa-hotel mr-1" /> Type</Link>
                <Link className="dropdown-item" href={'/listing/' + selected.slug + '/wifi'}><i className="fas fa-wifi mr-1" /> Wifi</Link>
            </DropDownMenu>
        )
    }

    renderFullHeader() {
        return (
            <span><ThumbsUpDown {...this.props} clickThumbsUp={this.clickThumbsUp} /> {this.renderEditDropDown()}</span>
        )
    }

    render() {
        let { profile, full } = this.props;

        return (
            <div className="bg-white fixed-top pt-2 box-shadow">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h5><Link className="logo logo-sm" to="/">{'{ Homadic }'}</Link></h5>
                        </div>
                        <div className="col ml-auto d-flex justify-content-end">
                            <h5>{full ? this.renderFullHeader() : undefined} <Avatar className="ml-2" size={30} name={profile.data.name} id={profile.data.id} /></h5>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ListingHeader;