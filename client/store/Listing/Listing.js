import React from 'react';
import { browserHistory, } from 'react-router';
import ListingTemplate from '../../components/ListingTemplate/ListingTemplate';

class Listing extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        let { params, setLoadingStatus } = this.props;

        if (params.listingSlug) {
            setLoadingStatus(true);
            this.props.handleGetListing(params.listingSlug).then(() => {
                setLoadingStatus(false);
            });
        } else {
            browserHistory.push('/');
        }
    }

    render() {
        let { listings } = this.props;

        return (
            <ListingTemplate listing={listings.selected} previewMode={false} {...this.props} />
        )
    }
}

export default Listing;