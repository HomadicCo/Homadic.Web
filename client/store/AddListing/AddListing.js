import React from 'react';
import {Helmet} from 'react-helmet';

// functions
import {getMetaDetails} from '../../functions';

//components
import AddHeader from './components/AddHeader';
import ProgressFooter from './components/ProgressFooter';

// steps
import ListingDetails from './Steps/ListingDetails';
import Rooms from './Steps/Rooms';
import Amenities from './Steps/Amenities';
import Notes from './Steps/Notes';
import PreviewListing from './Steps/PreviewListing';

class AddListing extends React.Component {
    constructor(props) {
        super(props)
    }

    componentWillUnmount() {
        this.props.clearNewListing();
    }

    stepSelector() {
        let { step } = this.props.params;

        switch (step) {
            case 'listing':
                return (
                    <ListingDetails {...this.props} />
                )
            case 'rooms':
                return (
                    <Rooms {...this.props} />
                )
            case 'amenities':
                return (
                    <Amenities {...this.props} />
                )
            case 'notes':
                return (
                    <Notes {...this.props} />
                )
            case 'preview':
                return (
                    <PreviewListing {...this.props} />
                )
            default:
                return (
                    <ListingDetails {...this.props} />
                )
        }
    }

    render() {
        let { step } = this.props.params;
        let metaDetails = getMetaDetails('Add listing', '/add');

        return (
            <div className="footer-padding">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>{metaDetails.title}</title>
                    <link rel="canonical" href={metaDetails.link} />
                    <meta name="twitter:card" content="summary" />
                    <meta name="twitter:site" content="@homadicco" />
                    <meta property="og:title" content="Homadic" />
                    <meta property="og:description" content="Crowd sourced monthly home rentals." />
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content={metaDetails.link} />
                    <meta property="og:image" content="https://homadicstorage.blob.core.windows.net/icons/icon180.png" />
                </Helmet>
                {step != 'preview' ? <AddHeader {...this.props} /> : undefined}
                <div className="container">
                    {this.stepSelector()}
                </div>
                <ProgressFooter {...this.props} />
            </div>
        )
    }
}

export default AddListing;