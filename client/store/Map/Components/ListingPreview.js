import React from 'react';
import { icons } from '../../../Images/Images';
import { apiGetListingImages, apiGetReview, apiGetReviews, apiPostThumbsUp } from '../../../api';
import { bathrooms, bedrooms, rentalLengths } from '../../../data';
import ImageGallery from 'react-image-gallery';
import PointOfInterest from '../../../components/PointOfInterest/PointOfInterest';
import ListingType from '../../../components/ListingType/ListingType';
import ThumbsUpDown from '../../../components/ThumbsUpDown/ThumbsUpDown';

class ListingPreview extends React.Component {
    constructor(props) {
        super(props);

        this.openListingInNewWindow = this.openListingInNewWindow.bind(this);
        this.clickThumbsUp = this.clickThumbsUp.bind(this);
        this.conformImageObjects = this.conformImageObjects.bind(this);

        this.state = { images: { loading: false, data: { data: [] } }, reviews: { loading: false, data: { data: [] } }, userReview: null };
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

    render() {
        let { listing } = this.props;
        let { images, userReview } = this.state;
        console.log(images.data);

        return (
            <div>
                <div className="mt-3 listing-content listing-selected">
                    <div className="map-open-listing text-center py-2">
                        <button className="btn btn-sm btn-success" onClick={this.openListingInNewWindow}><i className="fas fa-home"></i> View listing</button>
                    </div>
                    {images.data.data.length > 0 ? <div className="hero-gallery"><ImageGallery items={this.conformImageObjects(images.data.data)} showFullscreenButton={false} showPlayButton={false} lazyLoad={true} showThumbnails={false} /></div> : undefined}
                    <div className="content-box content-box-sm transparent text-center listing-snippet">
                        <h4 className="property-name"><strong className="text-truncate">{listing.name}</strong> <span className="fancy pink"><strong>${listing.rates.base_rate.toLocaleString('en', { useGrouping: true })}</strong> <small>USD</small></span></h4>
                        <p className="property-type"><small><ListingType type={listing.type} size={24} /></small></p>
                        <h6 className="blue"><ThumbsUpDown userReview={userReview} listing={listing} clickThumbsUp={this.clickThumbsUp} /></h6>
                    </div>
                    <div className="content-box content-box-sm">
                        <h5 className="fancy blue">Rooms</h5>
                        {listing.rooms.map((room, i) => (<div key={i}><hr />{this.renderRoom(room)}</div>))}
                    </div>
                    {listing.notes != null ? this.renderNotes(listing.notes) : undefined}
                    {listing.points_of_interest.length > 0 ? <div className="content-box content-box-sm">
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