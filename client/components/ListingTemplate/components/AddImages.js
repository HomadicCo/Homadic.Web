import React from 'react';
import Dropzone from 'react-dropzone';
import ListingHeader from './ListingHeader';

class AddImages extends React.Component {
    constructor(props) {
        super(props);

        this.onImageDrop = this.onImageDrop.bind(this);
        this.state = {
            invalidFile: false
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

    render() {
        return (
            <div className="listing">
                <ListingHeader {...this.props} />
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
}

export default AddImages;