import React from 'react';
import { browserHistory, } from 'react-router';
import { Helmet } from 'react-helmet';
import { apiGetListing, apiGetListingImages, apiGetReview, apiGetReviews, apiPostThumbsUp } from '../../api';
import ListingTemplate from '../../components/ListingTemplate/ListingTemplate';
import LoadingScreen from '../../components/LoadingScreen/LoadingScreen';
import { getBaseRate, getMetaDetails } from '../../functions';

class Listing extends React.Component {
    constructor(props) {
        super(props);

        this.clickThumbsUp = this.clickThumbsUp.bind(this);

        this.state = { listing: null, images: { loading: false, data: [] }, reviews: { loading: false, data: [] }, userReview: null };
    }

    componentWillMount() {
        let { listingSlug } = this.props.params;

        if (listingSlug) {
            apiGetListing(listingSlug).then((response) => {
                this.setState({ ...this.state, listing: response.data, images: { data: [], loading: true }, reviews: { data: [], loading: true } });

                apiGetListingImages(listingSlug).then((response) => {
                    this.setState({ ...this.state, images: { loading: false, data: response.data } });
                })
                apiGetReviews(listingSlug).then((response) => {
                    this.setState({ ...this.state, reviews: { loading: false, data: response.data } });
                })
                apiGetReview(listingSlug).then((response) => {
                    this.setState({ ...this.state, userReview: response.data });
                })
            }).catch(() => {
                browserHistory.push('/');
            });
        } else {
            browserHistory.push('/');
        }
    }

    clickThumbsUp(value) {
        let { listing } = this.state;
        apiPostThumbsUp(listing.slug, value).then((response) => {
            this.setState({ ...this.state, userReview: response.data });
        })
    }

    renderHelmet(listing) {
        let metaDetails = getMetaDetails(listing.name, 'listing/' + listing.slug);
        let baseRate = getBaseRate(listing);
        let description = 'Rooms available at ' + listing.name + ' from ' + baseRate + 'USD';

        return (<Helmet>
            <meta charSet="utf-8" />
            <title>{metaDetails.title}</title>
            <link rel="canonical" href={metaDetails.link} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@homadicco" />
            <meta property="og:title" content={metaDetails.title} />
            <meta property="og:image" content={listing.hero != null ? listing.hero.src : 'https://homadicstorage.blob.core.windows.net/icons/icon180.png'} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={metaDetails.link} />
        </Helmet>)
    }

    render() {
        let { images, listing, reviews, userReview } = this.state;

        return (
            !listing ? <LoadingScreen /> :
                <div>
                    {this.renderHelmet(listing)}
                    <ListingTemplate listing={listing} reviews={reviews} userReview={userReview} images={images} clickThumbsUp={this.clickThumbsUp} {...this.props} />
                </div>
        )
    }
}

export default Listing;