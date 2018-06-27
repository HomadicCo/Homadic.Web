import React from 'react';
import { browserHistory, } from 'react-router';
import Dropzone from 'react-dropzone';
import { apiGetListing } from '../../../api';
import ListingHeader from './ListingHeader';
import Hero from '../components/Hero';
import LoadingScreen from '../../../components/LoadingScreen/LoadingScreen';

class AddImages extends React.Component {
    constructor(props) {
        super(props);

        this.onImageDrop = this.onImageDrop.bind(this);
        this.state = {
            invalidFile: false,
            listing: undefined,
            images: undefined
        }
    }

    componentWillMount() {
        let { listingSlug } = this.props.params;

        if (listingSlug) {
            apiGetListing(listingSlug).then((response) => {
                this.setState({ listing: response.data });
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

    renderLoaded() {
        return (
            <div className="listing">
                <ListingHeader {...this.props} />
                <Hero listing={this.state.listing} />
                <div className="container">
                    <Dropzone
                        multiple={false}
                        accept={['image/jpg', 'image/jpeg', 'image/JPG', 'image/JPEG']}
                        onDrop={this.onImageDrop}
                        className="col-12 dropzone"
                        activeClassName="dropzone-active">
                        {this.renderDropZoneContent()}
                    </Dropzone>
                </div>
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