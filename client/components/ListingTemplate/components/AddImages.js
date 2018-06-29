import React from 'react';
import { browserHistory, } from 'react-router';
import Dropzone from 'react-dropzone';
import { apiGetListing, apiGetListingImages, apiPostListingImage } from '../../../api';
import ListingHeader from './ListingHeader';
import Hero from '../components/Hero';
import LoadingScreen from '../../../components/LoadingScreen/LoadingScreen';
import LoadingPlane from '../../../components/LoadingScreen/LoadingPlane';
import ImageGallery from '../../ImageGallery/ImageGallery';

class AddImages extends React.Component {
    constructor(props) {
        super(props);

        this.onImageDrop = this.onImageDrop.bind(this);
        this.state = {
            invalidFile: false,
            listing: undefined,
            images: [],
            loadingImages: false,
            uploadingImage: false
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

    onImageDrop(acceptedFiles, rejectedFiles) {
        let { images } = this.state;
        let { listingSlug } = this.props.params;
        this.setState({ invalidFile: false, uploadingImage: true });

        // log invalid file
        if (rejectedFiles.length > 0) {
            this.setState({ invalidFile: true, uploadingImage: false });
            return;
        }

        // conform file
        var formData = new FormData();
        formData.append(acceptedFiles[0].name, acceptedFiles[0]);

        apiPostListingImage(listingSlug, formData).then((response) => {
            var newImages = Object.assign(images);
            newImages.unshift(response.data);
            this.setState({ images: newImages, uploadingImage: false });
        })
    }

    renderDropZoneContent() {
        return (
            <div className="text-center">
                <h2><i className="fas fa-image"></i></h2>
                <p>Drop an image or click to select a file to upload.</p>
            </div>
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
        let { images, listing, loadingImages, uploadingImage } = this.state;

        return (
            <div className="listing">
                <ListingHeader {...this.props} />
                <Hero listing={listing} />
                <div className="container mb-4">
                    {uploadingImage ? <div className="text-center"><LoadingPlane /><p>Uploading image...</p></div> : this.renderDropZone()}
                </div>
                {loadingImages ? <LoadingPlane /> : <div className="container"><ImageGallery loading={loadingImages} images={images} isImageUploadPage /></div>}
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