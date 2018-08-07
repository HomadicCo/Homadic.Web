import React from 'react';
import { browserHistory } from 'react-router';
import { Helmet } from 'react-helmet';
import { apiPostThumbsUp } from '../../api';
import { getBaseRate, getMetaDetails } from '../../functions';
import ListingTemplate from '../../components/ListingTemplate/ListingTemplate';
import LoadingScreen from '../../components/LoadingScreen/LoadingScreen';
import NotFound from '../../components/NotFound/NotFound';

class Listing extends React.Component {
    constructor(props) {
        super(props);

        this.clickThumbsUp = this.clickThumbsUp.bind(this);
    }

    componentDidMount() {
        let { params, handleGetListing, handleGetUserReview } = this.props;

        if (params.listingSlug) {
            handleGetListing(params.listingSlug).then(() => {
                handleGetUserReview(params.listingSlug);
            });
        } else {
            browserHistory.push('/');
        }
    }

    clickThumbsUp(value) {
        let { listing } = this.props;
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

    renderLoaded() {
        let { notFound, selected, selectedUserReview } = this.props.listings;

        return (
            notFound || selected == undefined ? <NotFound /> :
                <div>
                    {this.renderHelmet(selected)}
                    <ListingTemplate listing={selected} reviews={selected.reviews} userReview={selectedUserReview} images={selected.images} clickThumbsUp={this.clickThumbsUp} {...this.props} />
                </div>
        )
    }

    render() {
        let { fetching } = this.props.listings;

        return (
            fetching ? <LoadingScreen /> : this.renderLoaded()
        )
    }
}

export default Listing;