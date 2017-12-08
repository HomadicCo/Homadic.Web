import React from 'react';
import { browserHistory, } from 'react-router';
import { apiGetListing } from '../../api';
import ListingTemplate from '../../components/ListingTemplate/ListingTemplate';
import LoadingScreen from '../../components/LoadingScreen/LoadingScreen';

class Listing extends React.Component {
    constructor(props) {
        super(props);

        this.state = { listing: null };
    }

    componentWillMount() {
        let { listingSlug } = this.props.params;

        if (listingSlug) {
            apiGetListing(listingSlug).then((response) => {
                this.setState({ listing: response.data });
            }).catch(() => {
                browserHistory.push('/');
            });
        } else {
            browserHistory.push('/');
        }
    }

    render() {
        let { listing } = this.state;

        return (
            !listing ? <LoadingScreen /> : <ListingTemplate listing={listing} {...this.props} />
        )
    }
}

export default Listing;