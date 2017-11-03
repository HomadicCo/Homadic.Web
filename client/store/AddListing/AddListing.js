import React from 'react';
import FontAwesome from 'react-fontawesome'

//components
import AddHeader from './components/AddHeader';
import ProgressFooter from './components/ProgressFooter';

// steps
import SelectFromGoogleMaps from './Steps/SelectFromGoogleMaps';
import ListingDetails from './Steps/ListingDetails';
import Rooms from './Steps/Rooms';
import Amenities from './Steps/Amenities';
import Notes from './Steps/Notes';
import PreviewListing from './Steps/PreviewListing';

class AddListing extends React.Component {
    constructor(props) {
        super(props)
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
                    <SelectFromGoogleMaps {...this.props} />
                )
        }
    }

    componentWillUnmount() {
        this.props.clearNewListing();
    }

    render() {
        let { step } = this.props.params;

        return (
            <div className="footer-padding">
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