import React from 'react';
import ListingTemplate from '../../../components/ListingTemplate/ListingTemplate';
import { browserHistory } from 'react-router';

class PreviewListing extends React.Component {
    constructor(props) {
        super(props)
    }

    componentWillMount() {
        let { valid } = this.props.addListing;

        if (!valid.rooms) {
            browserHistory.push('/add/rooms');
        }
    }

    render() {
        return (
            <ListingTemplate previewMode listing={this.props.addListing.listing} {...this.props} />
        )
    }
}

export default PreviewListing;

