import React from 'react';
import FontAwesome from 'react-fontawesome'

//components
import AddHeader from './components/AddHeader';
import ProgressFooter from './components/ProgressFooter';

// steps
import SelectFromGoogleMaps from './Steps/SelectFromGoogleMaps';
import ListingDetails from './Steps/ListingDetails';

class AddListing extends React.Component {
    constructor(props) {
        super(props)
    }

    stepSelector() {
        let { step } = this.props.params;

        switch (step) {
            case 'rooms':
                return (
                    <p>Hello</p>
                )
            case 'listing':
                return (
                    <ListingDetails {...this.props} />
                )
            default:
                return (
                    <SelectFromGoogleMaps {...this.props} />
                )
        }
    }

    render() {
        return (
            <div className="footer-padding">
                <AddHeader {...this.props} />
                <div className="container">
                    {this.stepSelector()}
                </div>
                <ProgressFooter {...this.props} />
            </div>
        )
    }
}

export default AddListing;