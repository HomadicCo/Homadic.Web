import React from 'react';
import Dropzone from 'react-dropzone';
import { browserHistory } from 'react-router';
import Hero from '../ListingTemplate/components/Hero';
import LoadingPlane from '../../components/LoadingScreen/LoadingPlane';
import LoadingScreen from '../../components/LoadingScreen/LoadingScreen';
import ListingHeader from '../ListingHeader/ListingHeader';
import ImageGallery from '../ImageGallery/ImageGallery';

class AddImages extends React.Component {
    constructor(props) {
        super(props);

        this.onImageDrop = this.onImageDrop.bind(this);
        this.state = {
            invalidFile: false,
            error: undefined
        }
    }

    componentDidMount() {
        let { params, handleSetNewListing } = this.props;

        handleSetNewListing(params.listingSlug).catch(() => {
            browserHistory.push('/');
        });
    }

    onImageDrop(acceptedFiles, rejectedFiles) {
        let { addListing, handleUploadListingImage } = this.props;

        this.setState({error: undefined });

        // log invalid file
        if (rejectedFiles.length > 0) {
            this.setState({error: 'File is invalid.' });
            return;
        }

        // conform file
        var formData = new FormData();
        formData.append(acceptedFiles[0].name, acceptedFiles[0]);

        handleUploadListingImage(addListing.listing.slug, formData).catch((e) => {
            this.setState({error: e });
        });
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
        let { addListing, ui } = this.props;
        let { error } = this.state;
        let { listing } = addListing;

        return (
            <div className="listing">
                <ListingHeader {...this.props} full />
                {error != undefined ? <div className="alert alert-danger">{error}</div> : undefined}
                <Hero listing={listing} />
                <div className="container mb-4">
                    {ui.uploadingNewImage ? <div className="text-center"><LoadingPlane /><p>Uploading image...</p></div> : this.renderDropZone()}
                </div>
                <div className="container"><ImageGallery loading={listing == undefined} images={listing.images} isImageUploadPage /></div>
            </div>
        )
    }

    render() {
        let { ui } = this.props;

        return (
            <div className="listing">
                {ui.fetchingNewListing ? <LoadingScreen /> : this.renderLoaded()}
            </div>
        )
    }
}

export default AddImages;