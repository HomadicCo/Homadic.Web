import React from 'react';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router';

class ProgressFooter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            classes: {
                listing: "",
                rooms: "",
                amenities: "",
                notes: "",
                preview: ""
            }
        }
    }

    validateSelectFromGoogleMaps() {
        let { addListing, setValidationValue } = this.props;
        let { listing } = addListing;

        //check google maps id and lat/lng
        if (!listing.google_maps_id || !listing.location.coordinates[1]) {
            if (addListing.valid.selectFromGoogleMaps) setValidationValue("selectFromGoogleMaps", false);
        } else {
            if (!addListing.valid.selectFromGoogleMaps) setValidationValue("selectFromGoogleMaps", true);
        }
    }

    validateListing() {
        let { addListing, setValidationValue } = this.props;
        let { listing } = addListing;

        //check google maps id and lat/lng
        if (!listing.name || !listing.address || !listing.type) {
            if (addListing.valid.listing) setValidationValue("listing", false);
        } else {
            if (!addListing.valid.listing) setValidationValue("listing", true);
        }
    }

    runValidations() {
        this.validateSelectFromGoogleMaps();
        this.validateListing();
    }

    setStepClasses(step) {
        switch (step) {
            case 'listing':
                this.setState({
                    classes: {
                        listing: "current-step",
                        rooms: "",
                        amenities: "",
                        notes: "",
                        preview: ""
                    }
                })
                break;
            case 'rooms':
                this.setState({
                    classes: {
                        listing: "visited-step",
                        rooms: "current-step",
                        amenities: "",
                        notes: "",
                        preview: ""
                    }
                })
                break;
            case 'amenities':
                this.setState({
                    classes: {
                        listing: "visited-step",
                        rooms: "visited-step",
                        amenities: "current-step",
                        notes: "",
                        preview: ""
                    }
                })
                break;
            case 'notes':
                this.setState({
                    classes: {
                        listing: "visited-step",
                        rooms: "visited-step",
                        amenities: "visited-step",
                        notes: "current-step",
                        preview: ""
                    }
                })
                break;
            case 'preview':
                this.setState({
                    classes: {
                        listing: "visited-step",
                        rooms: "visited-step",
                        amenities: "visited-step",
                        notes: "visited-step",
                        preview: "current-step"
                    }
                })
                break;
            default:
                this.setState({
                    classes: {
                        listing: "current-step",
                        rooms: "",
                        amenities: "",
                        notes: "",
                        preview: ""
                    }
                })
        }
    }

    componentWillMount() {
        this.setStepClasses(this.props.params.step);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps == this.props) return;

        let { step } = this.props.params;
        const nextStep = nextProps.params.step;

        if (step != nextStep) {
            this.setStepClasses(nextStep);
        }

        this.runValidations();
    }

    render() {
        let { classes } = this.state;

        return (
            <footer className="footer">
                <div className="container-fluid">
                    <div className="row progress-steps">
                        <div className={"col " + classes.listing}>
                            <Link to="/add/listing">Listing</Link>
                            <span className="triangle"></span>
                        </div>
                        <div className={"col " + classes.rooms}>
                            <span className="triangle-left"></span>
                            <Link to="/add/rooms">Rooms</Link>
                            <span className="triangle"></span>
                        </div>
                        <div className={"col " + classes.amenities}>
                            <span className="triangle-left"></span>
                            <Link to="/add/amenities">Amenities</Link>
                            <span className="triangle"></span>
                        </div>
                        <div className={"col " + classes.notes}>
                            <span className="triangle-left"></span>
                            <Link to="/add/notes">Notes</Link>
                            <span className="triangle"></span>
                        </div>
                        <div className={"col " + classes.preview}>
                            <span className="triangle-left"></span>
                            <Link to="/add/preview">Preview</Link>
                            <span className="triangle"></span>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default ProgressFooter;

