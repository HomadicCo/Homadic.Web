import React from 'react';
import { Link } from 'react-router';
import LoadingPlane from '../LoadingScreen/LoadingPlane';

class ImageGallery extends React.Component {
    constructor(props) {
        super(props);
    }

    renderHasNoImages() {
        let { isImageUploadPage, slug } = this.props;

        return (
            <div className="col-12">
                <p className="text-center">There are no photos for this listing yet.{!isImageUploadPage ? <span> <Link to={'/listing/' + slug + '/images'}>Add some? <i className="fas fa-camera-retro"></i></Link></span> : undefined}</p>
            </div>
        )
    }

    renderHasImages(images) {
        return (
            images.map((image, i) => (
                <div key={i} className="col-md-2 text-center">
                    <img src={image.thumbnail} className="image-thumbnail rounded mx-auto display-thumbnail mb-3" />
                    <img src={image.hero} className="image-thumbnail rounded mx-auto display-hero mb-3" />
                </div>
            ))
        )
    }

    renderLoaded(images) {
        return (
            images.length > 0 ? this.renderHasImages(images) : this.renderHasNoImages()
        )
    }

    render() {
        let { images, isImageUploadPage, loading, slug } = this.props;

        return (
            <div className="content-box image-thumbs">
                <div className="row">
                    <div className="col">
                        <h3 className="fancy blue">Photos</h3>
                    </div>
                    <div className="col ml-auto d-flex justify-content-end">
                        {!isImageUploadPage ? <Link to={'/listing/' + slug + '/images'}><i className="fas fa-camera-retro"></i> Add</Link> : undefined}
                    </div>
                </div>
                <hr />
                <div className="row">
                    {loading ? <div className="col"><LoadingPlane /></div> : this.renderLoaded(images)}
                </div>
            </div >
        )
    }
}

export default ImageGallery;