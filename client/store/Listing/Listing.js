import React from 'react';
import { browserHistory, } from 'react-router';
import { Helmet } from 'react-helmet';
import { apiGetListing, apiGetListingImages } from '../../api';
import ListingTemplate from '../../components/ListingTemplate/ListingTemplate';
import LoadingScreen from '../../components/LoadingScreen/LoadingScreen';
import { getBaseRate, getMetaDetails } from '../../functions';

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

    renderHelmet(listing) {
        let metaDetails = getMetaDetails(listing.name, 'listing/' + listing.slug);
        let baseRate = getBaseRate(listing);
        let description = 'Rooms available from ' + baseRate + 'USD';

        return (<Helmet>
            <meta charSet="utf-8" />
            <title>{metaDetails.title}</title>
            <link rel="canonical" href={metaDetails.link} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@homadicco" />
            <meta property="og:title" content={metaDetails.title} />
            <meta property="og:image" content={listing.hero.src} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={metaDetails.link} />
        </Helmet>)
    }

    render() {
        let { images, listing } = this.state;

        return (
            !listing ? <LoadingScreen /> :
                <div>
                    {this.renderHelmet(listing)}
                    <ListingTemplate listing={listing} images={images} {...this.props} />
                </div>
        )
    }
}

export default Listing;