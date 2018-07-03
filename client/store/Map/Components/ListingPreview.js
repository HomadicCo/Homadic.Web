import React from 'react';
import { Link } from 'react-router';
import { icons } from '../../../Images/Images';
import { apiGetListingImages, apiGetReview, apiGetReviews, apiPostThumbsUp } from '../../../api';
import { bathrooms, bedrooms, rentalLengths } from '../../../data';
import ImageGallery from 'react-image-gallery';
import PointOfInterest from '../../../components/PointOfInterest/PointOfInterest';
import Amenities from '../../../components/ListingTemplate/components/Amenities';
import Avatar from '../../../Components/Avatar/Avatar';
import ListingType from '../../../components/ListingType/ListingType';
import ThumbsUpDown from '../../../components/ThumbsUpDown/ThumbsUpDown';

class ListingPreview extends React.Component {
    constructor(props) {
        super(props);

        this.openListingInNewWindow = this.openListingInNewWindow.bind(this);
        this.clickThumbsUp = this.clickThumbsUp.bind(this);
        this.conformImageObjects = this.conformImageObjects.bind(this);

        this.state = { images: { loading: false, data: { data: [] } }, reviews: { loading: false, data: [] }, userReview: null };
    }

    conformImageObjects(images) {
        images.forEach((o, i, a) => {
            a[i].original = o.hero;
            a[i].thumbnail = o.square_thumbnail;
        });

        return images;
    }

    componentWillMount() {
        let { listing } = this.props;

        this.setState({ ...this.state, reviews: { data: [], loading: true } });

        apiGetListingImages(listing.slug).then((response) => {
            this.setState({ ...this.state, images: { loading: false, data: response.data } });
        })
        apiGetReviews(listing.slug).then((response) => {
            this.setState({ ...this.state, reviews: { loading: false, data: response.data } });
        })
        apiGetReview(listing.slug).then((response) => {
            this.setState({ ...this.state, userReview: response.data });
        })
    }

    clickThumbsUp(value) {
        let { listing } = this.props;
        apiPostThumbsUp(listing.slug, value).then((response) => {
            this.setState({ ...this.state, userReview: response.data });
        })
    }

    openListingInNewWindow() {
        window.open(window.location.origin + '/listing/' + this.props.listing.slug);
    }

    renderReview(review) {
        const reviewLength = review.review_body.length;
        const body = reviewLength > 200 ? review.review_body.substring(0, 200) + '...' : review.review_body;

        return (
            <div className="my-4">
                <p><Avatar className="mr-2" size={40} id={review.user_id} name={review.user_name} /> <strong>{review.user_name}</strong></p>
                <p>{body} {reviewLength > 200 ? <Link to="" onClick={this.openListingInNewWindow}>Read more</Link> : undefined}</p>
            </div>
        )
    }

    renderReviews(reviews) {
        return (
            <div className="content-box content-box-sm mb-3 no-container">
                <h5 className="fancy blue">Reviews</h5>
                <hr />
                {reviews.data.data.length > 0 ? reviews.data.data.slice(0, 3).map((review, i) => {
                    return (
                        <div key={i}>
                            {this.renderReview(review)}
                        </div>
                    )
                }) : undefined}
            </div>
        )
    }

    renderBedrooms(room) {
        const i = bedrooms.findIndex((bedroom) => bedroom.value == room.bedrooms);
        return bedrooms[i].name;
    }

    renderBathrooms(room) {
        const i = bathrooms.findIndex((bathroom) => bathroom.value == room.bathrooms);
        return bathrooms[i].name;
    }

    renderMinStay(room) {
        const i = rentalLengths.findIndex((r) => r.value == room.min_rental);
        return rentalLengths[i];
    }

    renderRoom(room) {
        return (
            <p><img className="mr-1" src={icons.bedroom} height={20} width={20} /> {this.renderBedrooms(room)} <img className="ml-3 mr-1" src={icons.bathroom} height={20} width={20} /> {this.renderBathrooms(room)}</p>
        )
    }

    renderHero() {
        let { listing } = this.props;
        let { userReview } = this.state;

        return (
            <div className="content-box content-box-sm mb-3 no-radius no-container" >
                <div className="row no-gutters">
                    <div className="col-10">
                        <h5 className="property-name text-truncate"><strong>{listing.name}</strong></h5>
                    </div>
                    <div className="col-2 ml-auto text-right">
                        <span className="blue"><strong>${listing.rates.base_rate.toLocaleString('en', { useGrouping: true })}</strong></span>
                    </div>
                </div>
                <p className="property-type text-muted"><small><ListingType type={listing.type} size={24} /></small></p>
                <div className="row">
                    <div className="col">
                        <Amenities listing={listing} size={20} colClass="col-1" />
                    </div>
                    <div className="col ml-auto d-flex justify-content-end">
                        <ThumbsUpDown listing={listing} userReview={userReview} clickThumbsUp={this.clickThumbsUp} />
                    </div>
                </div>
            </div>
        )
    }

    render() {
        let { listing } = this.props;
        let { images, reviews } = this.state;

        return (
            <div>
                <div className="mt-3 listing-content listing-selected">
                    <div className="map-open-listing text-center py-2">
                        <button className="btn btn-sm btn-success" onClick={this.openListingInNewWindow}><i className="fas fa-home"></i> View listing</button>
                    </div>
                    {images.data.data.length > 0 ? <div className="hero-gallery"><ImageGallery items={this.conformImageObjects(images.data.data)} showFullscreenButton={false} showPlayButton={false} lazyLoad={true} showThumbnails={false} /></div> : undefined}
                    {this.renderHero()}
                    {reviews.loading ? undefined : this.renderReviews(reviews)}
                    <div className="content-box content-box-sm mb-3 no-container">
                        <h5 className="fancy blue">Rooms</h5>
                        {listing.rooms.map((room, i) => (<div key={i}><hr />{this.renderRoom(room)}</div>))}
                    </div>
                    {listing.notes != null ? this.renderNotes(listing.notes) : undefined}
                    {listing.points_of_interest.length > 0 ? <div className="content-box content-box-sm mb-3  no-container">
                        <h5 className="fancy blue">Nearby</h5>
                        <hr />
                        <div className="row">
                            {listing.points_of_interest.map((poi, i) => (<div key={i} className="col-6"><PointOfInterest poi={poi} listing={listing} /></div>))}
                        </div>
                    </div> : undefined}
                </div>
            </div>
        )
    }
}

export default ListingPreview;