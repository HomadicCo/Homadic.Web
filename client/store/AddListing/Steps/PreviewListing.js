import React from 'react';
import ListingTemplate from '../../../components/ListingTemplate/ListingTemplate';

class PreviewListing extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <ListingTemplate previewMode listing={this.props.addListing.listing} {...this.props} />
        )
    }
}

export default PreviewListing;

