import React from 'react';
import { Link } from 'react-router';
import Avatar from '../../../Components/Avatar/Avatar';
import ThumbsUpDown from '../../../components/ThumbsUpDown/ThumbsUpDown';

class ListingHeader extends React.Component {
    constructor(props) {
        super(props);

        this.clickThumbsUp = this.clickThumbsUp.bind(this);
    }

    clickThumbsUp(value) {
        let { handleThumbsUp, listings } = this.props;

        handleThumbsUp(listings.selected.slug, value);
    }

    renderFullHeader() {
        return (
            <span><ThumbsUpDown {...this.props} clickThumbsUp={this.clickThumbsUp} /> <span className="btn btn-sm btn-action mx-1"><i className="fas fa-pencil-alt" /> Edit</span></span>
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
                            <h5>{full ? this.renderFullHeader() : undefined} <Avatar size={30} name={profile.data.name} id={profile.data.id} /></h5>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ListingHeader;