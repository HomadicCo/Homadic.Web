import React from 'react';
import { Link } from 'react-router';
import Avatar from '../../../Components/Avatar/Avatar';

class ListingHeader extends React.Component {
    constructor(props) {
        super(props);
    }

    renderFullHeader() {
        return (
            <span><i className="far fa-thumbs-up" /> <i className="far fa-thumbs-down" /> <span className="btn btn-sm btn-action mx-1"><i className="fas fa-pencil-alt" /> Edit</span></span>
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
                            <h5 className="blue">{full ? this.renderFullHeader() : undefined} <Avatar size={30} profile={profile.data} /></h5>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ListingHeader;