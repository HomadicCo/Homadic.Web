import React from 'react';
import { browserHistory, Link } from 'react-router';
import ListingHeader from '../../components/ListingHeader/ListingHeader';
import LoadingPlane from '../../components/LoadingScreen/LoadingPlane';
import Avatar from '../../Components/Avatar/Avatar';

class ListingVersions extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        let { listings, params, handleGetListing, handleGetListingHistory, setFetchingListingHistoryStatus } = this.props;

        setFetchingListingHistoryStatus(true);

        if (params.listingSlug) {
            if (listings.selected == null || listings.selected == undefined) {
                handleGetListing(params.listingSlug).then(() => {
                    handleGetListingHistory(params.listingSlug);
                }).catch(() => {
                    browserHistory.push('/');
                })
            }
            else {
                handleGetListingHistory(params.listingSlug);
            }
        } else {
            browserHistory.push('/');
        }
    }

    renderVersion(version, i) {
        let { params } = this.props;

        return (
            <tr key={i}>
                <th scope="row"><Avatar id={version.user_id} name={version.first_name} style={{ marginTop: '-5px' }} currentUser={false} size={30} className={'mr-2'} /> {version.first_name}</th>
                <td>{version.date_created}</td>
                <td>{version.changed}</td>
                <td>{version.active ? 'True' : 'False'}</td>
                <td><Link to={'/listing/' + params.listingSlug + '/history/' + version.id}>View</Link></td>
            </tr>
        )
    }

    renderHistoryTable() {
        let { listingHistory } = this.props;

        return (
            <div className="container">
                <div className="row">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">User</th>
                                <th scope="col">Date</th>
                                <th scope="col">Changed</th>
                                <th scope="col">Active</th>
                            </tr>
                        </thead>
                        <tbody>
                            {listingHistory.data.map((v, i) => { return (this.renderVersion(v, i)) })}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }

    renderLoading() {
        return (
            <div className="mt-5">
                <LoadingPlane />
            </div>
        )
    }

    render() {
        return (
            <div className="listing">
                <ListingHeader full {...this.props} />
                {this.props.listingHistory.fetching ? this.renderLoading() : this.renderHistoryTable()}
            </div>
        )
    }
}

export default ListingVersions;