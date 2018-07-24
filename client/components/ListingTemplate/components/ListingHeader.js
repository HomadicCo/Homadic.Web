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

    renderEditDropDown() {
        return (
            <div className="btn-group">
                <button type="button" className="btn btn-action btn-sm dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true"><i className="fas fa-pencil-alt" /> Edit</button>
                <div className="dropdown-menu">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <a className="dropdown-item" href="#">Something else here</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">Separated link</a>
                </div>
            </div>)
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