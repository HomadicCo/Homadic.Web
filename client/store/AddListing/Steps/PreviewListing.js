import React from 'react';
import { browserHistory } from 'react-router';
import FontAwesome from 'react-fontawesome';
import ListingTemplate from '../../../components/ListingTemplate/ListingTemplate';

class PreviewListing extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <ListingTemplate previewMode={true} listing={this.props.addListing.listing} {...this.props} />
        )
    }
}

export default PreviewListing;

