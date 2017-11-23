import React from 'react';
import { Link } from 'react-router';

class ProgressFooter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            classes: {
                listing: '',
                rooms: '',
                amenities: '',
                notes: '',
                preview: ''
            }
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

    validateSelectFromGoogleMaps() {
        let { addListing, setValidationValue } = this.props;
        let { listing } = addListing;

        // google maps id and lat/lng
        if (!listing.google_maps_id || !listing.location.coordinates[1]) {
            if (addListing.valid.selectFromGoogleMaps) setValidationValue('selectFromGoogleMaps', false);
        } else {
            if (!addListing.valid.selectFromGoogleMaps) setValidationValue('selectFromGoogleMaps', true);
        }
    }

    validateListing() {
        let { addListing, setValidationValue } = this.props;
        let { listing } = addListing;

        // listing basics
        if (!listing.name || !listing.address || !listing.type) {
            if (addListing.valid.listing) setValidationValue('listing', false);
        } else {
            if (!addListing.valid.listing) setValidationValue('listing', true);
        }
    }

    validateRooms() {
        let { addListing, setValidationValue } = this.props;
        let { listing } = addListing;

        // some rooms, but no more than 6
        if (listing.rooms.length < 1 || listing.rooms.length > 6) {
            if (addListing.valid.rooms) setValidationValue('rooms', false);
        }
        // check all rooms have a base rate
        else if (listing.rooms.filter(room => room.base_rate <= 10).length > 0) {
            if (addListing.valid.rooms) setValidationValue('rooms', false);
        }
        else {
            if (!addListing.valid.rooms) setValidationValue('rooms', true);
        }
    }

    runValidations() {
        this.validateSelectFromGoogleMaps();
        this.validateListing();
        this.validateRooms();
    }

    setStepClasses(step) {
        switch (step) {
            case 'listing':
                this.setState({
                    classes: {
                        listing: 'current-step',
                        rooms: '',
                        amenities: '',
                        notes: '',
                        preview: ''
                    }
                })
                break;
            case 'rooms':
                this.setState({
                    classes: {
                        listing: 'visited-step',
                        rooms: 'current-step',
                        amenities: '',
                        notes: '',
                        preview: ''
                    }
                })
                break;
            case 'amenities':
                this.setState({
                    classes: {
                        listing: 'visited-step',
                        rooms: 'visited-step',
                        amenities: 'current-step',
                        notes: '',
                        preview: ''
                    }
                })
                break;
            case 'notes':
                this.setState({
                    classes: {
                        listing: 'visited-step',
                        rooms: 'visited-step',
                        amenities: 'visited-step',
                        notes: 'current-step',
                        preview: ''
                    }
                })
                break;
            case 'preview':
                this.setState({
                    classes: {
                        listing: 'visited-step',
                        rooms: 'visited-step',
                        amenities: 'visited-step',
                        notes: 'visited-step',
                        preview: 'current-step'
                    }
                })
                break;
            default:
                this.setState({
                    classes: {
                        listing: 'current-step',
                        rooms: '',
                        amenities: '',
                        notes: '',
                        preview: ''
                    }
                })
        }
    }

    render() {
        let { classes } = this.state;

        return (
            <footer className="footer">
                <div className="container-fluid">
                    <div className="row progress-steps">
                        <div className={'col ' + classes.listing}>
                            <Link to="/add/listing">Listing</Link>
                            <span className="triangle" />
                        </div>
                        <div className={'col ' + classes.rooms}>
                            <span className="triangle-left" />
                            <Link to="/add/rooms">Rooms</Link>
                            <span className="triangle" />
                        </div>
                        <div className={'col ' + classes.amenities}>
                            <span className="triangle-left" />
                            <Link to="/add/amenities">Amenities</Link>
                            <span className="triangle" />
                        </div>
                        <div className={'col ' + classes.notes}>
                            <span className="triangle-left" />
                            <Link to="/add/notes">Notes</Link>
                            <span className="triangle" />
                        </div>
                        <div className={'col ' + classes.preview}>
                            <span className="triangle-left" />
                            <Link to="/add/preview">Preview</Link>
                            <span className="triangle" />
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default ProgressFooter;

