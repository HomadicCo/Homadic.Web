import React from 'react';
import { Link } from 'react-router';
import Gallery from 'react-grid-gallery';
import LoadingPlane from '../LoadingScreen/LoadingPlane';
import { titleCase } from '../../functions';

const tagList = [
    'bedroom',
    'bathroom',
    'kitchen',
    'indoor',
    'outdoor',
    'room',
    'living',
    'sofa',
    'furniture'
]

class ImageGallery extends React.Component {
    constructor(props) {
        super(props);
    }

    shouldComponentUpdate(nextProps) {
        if (nextProps.images != this.props.images)
            return true;

        return false
    }

    generateTags(tags) {
        var newTags = [];
        tagList.forEach((tag) => {
            if (tags.includes(tag)) {
                newTags.push({ value: titleCase(tag), title: titleCase(tag) })
            }
        })
        return newTags;
    }

    conformImageObjects(images) {
        images.forEach((o, i, a) => {
            a[i].caption = 'Uploaded by ' + o.user_name;
            a[i].tags = this.generateTags(o.tags);
        });

        return images;
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
        const tagStyle = {
            display: 'inline',
            padding: '0.2em 0.6em 0.3em',
            fontSize: '75%',
            fontWeight: '600',
            lineHeight: '1',
            color: '#2491e8',
            background: 'rgba(255, 255, 255, 0.9)',
            textAlign: 'center',
            whiteSpace: 'nowrap',
            verticalAlign: 'baseline',
            borderRadius: '0.25em',
        };

        return (
            <Gallery images={this.conformImageObjects(images)} enableImageSelection={false} tagStyle={tagStyle} backdropClosesModal showLightboxThumbnails />
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
                {loading ? <div className="col"><LoadingPlane /></div> : this.renderLoaded(images)}
                <div className="clearfix" />
            </div >
        )
    }
}

export default ImageGallery;