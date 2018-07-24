import React from 'react';
import { browserHistory, Link } from 'react-router';
import moment from 'moment';
import { getHumanTime } from '../../functions';
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
            if (listings.selected.name == undefined || listings.selected.name == null) {
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
            <tr key={i} style={version.active ? { background: '#ddd', fontWeight: 'bold' } : {}}>
                <th scope="row"><Avatar id={version.user_id} name={version.first_name} style={{ marginTop: '-5px' }} currentUser={false} size={30} className={'mr-2'} /> {version.first_name}</th>
                <td>{getHumanTime(version.date_created)}</td>
                <td>{version.changed}</td>
                <td>{version.active ? 'True' : 'False'}</td>
                <td><Link to={'/listing/' + params.listingSlug + '/history/' + version.id}>View</Link></td>
            </tr>
        )
    }

    renderHistoryTable() {
        const orderedListingHistory = this.props.listingHistory.data.sort(function (left, right) {
            return moment.utc(right.date_created).diff(moment.utc(left.date_created))
        });

        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h3 className="my-4 text-truncate"><i className="fas fa-history" /> {this.props.listings.selected.name}</h3>
                        <p><i className="fas fa-gavel"></i> Please note this area is under construction, all changes are logged but this needs work.</p>
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
                                {orderedListingHistory.map((v, i) => { return (this.renderVersion(v, i)) })}
                            </tbody>
                        </table>
                    </div>
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