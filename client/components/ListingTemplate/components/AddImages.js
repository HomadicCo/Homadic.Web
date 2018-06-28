import React from 'react';
import { browserHistory, } from 'react-router';
import Dropzone from 'react-dropzone';
import { apiGetListing, apiGetListingImages } from '../../../api';
import ListingHeader from './ListingHeader';
import Hero from '../components/Hero';
import LoadingScreen from '../../../components/LoadingScreen/LoadingScreen';
import LoadingPlane from '../../../components/LoadingScreen/LoadingPlane';

class AddImages extends React.Component {
    constructor(props) {
        super(props);

        this.onImageDrop = this.onImageDrop.bind(this);
        this.state = {
            invalidFile: false,
            listing: undefined,
            images: undefined,
            loadingImages: false
        }
    }

    componentWillMount() {
        let { listingSlug } = this.props.params;

        if (listingSlug) {
            apiGetListing(listingSlug).then((response) => {
                this.setState({ ...this.state, listing: response.data, loadingImages: true });
                apiGetListingImages(listingSlug).then((response) => {
                    this.setState({ ...this.state, images: response.data.data, loadingImages: false });
                })
            }).catch(() => {
                browserHistory.push('/');
            });
        } else {
            browserHistory.push('/');
        }
    }

    onImageDrop(file, rejected) {
        // log invalid file
        if (rejected.length > 0) {
            this.setState({ invalidFile: true });
            return;
        }
    }

    renderDropZoneContent() {
        return (
            <div className="text-center">
                <h2><i className="fas fa-image"></i></h2>
                <p>Drop an image or click to select a file to upload.</p>
            </div>
        )
    }

    renderImages() {
        let { images } = this.state;

        return (
            <div className="container">
                <div className="content-box content-box-sm">
                    <h3 className="fancy blue">Photos</h3>
                    <div className="row">
                        {images.map((image, i) => (
                            <div key={i} className="col-2">
                                <img src={image.thumbnail} />
                            </div>
                        ))}
                    </div>
                </div >
            </div >
        )
    }

    renderDropZone() {
        return (
            <Dropzone
                multiple={false}
                accept={['image/jpg', 'image/jpeg', 'image/JPG', 'image/JPEG']}
                onDrop={this.onImageDrop}
                className="col-12 dropzone"
                activeClassName="dropzone-active">
                {this.renderDropZoneContent()}
            </Dropzone>
        )
    }

    renderLoaded() {
        let { listing, loadingImages } = this.state;

        return (
            <div className="listing">
                <ListingHeader {...this.props} />
                <Hero listing={listing} />
                <div className="container mb-4">
                    {this.renderDropZone()}
                </div>
                {loadingImages ? <LoadingPlane /> : this.renderImages()}
            </div>
        )
    }

    render() {
        let { listing } = this.state;

        return (
            !listing ? <LoadingScreen /> : this.renderLoaded()
        )
    }
}

export default AddImages;