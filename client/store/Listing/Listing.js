import React from 'react';
import { browserHistory, } from 'react-router';
import { apiGetListing, apiGetListingImages } from '../../api';
import ListingTemplate from '../../components/ListingTemplate/ListingTemplate';
import LoadingScreen from '../../components/LoadingScreen/LoadingScreen';

class Listing extends React.Component {
    constructor(props) {
        super(props);

        this.state = { listing: null, images: { loading: false, data: [] } };
    }

    componentWillMount() {
        let { listingSlug } = this.props.params;

        if (listingSlug) {
            apiGetListing(listingSlug).then((response) => {
                this.setState({ ...this.state, listing: response.data, images: { data: [], loading: true } });
                apiGetListingImages(listingSlug).then((response) => {
                    this.setState({ ...this.state, images: { loading: false, data: response.data } });
                })
            }).catch(() => {
                browserHistory.push('/');
            });
        } else {
            browserHistory.push('/');
        }
    }

    render() {
        let { images, listing } = this.state;

        return (
            !listing ? <LoadingScreen /> : <ListingTemplate listing={listing} images={images} {...this.props} />
        )
    }
}

export default Listing;