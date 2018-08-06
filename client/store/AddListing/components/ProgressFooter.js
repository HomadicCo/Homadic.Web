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
            },
            linkEnabled: {
                rooms: false,
                amenities: false,
                notes: false,
                preview: false
            }
        }
    }

    UNSAFE_componentWillMount() {
        this.setStepClasses(this.props.params.step);
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        if (nextProps == this.props) return;

        let { step } = this.props.params;
        const nextStep = nextProps.params.step;

        if (step != nextStep) {
            this.setStepClasses(nextStep);
        }

        this.runValidations();
        this.setEnabledLinks();
    }

    validateSelectFromGoogleMaps() {
        let { addListing, setValidationValue } = this.props;
        let { listing } = addListing;

        // google maps id and lat/lng
        if (!listing.google_place_id || !listing.location.coordinates[1]) {
            if (addListing.valid.selectFromGoogleMaps) setValidationValue('selectFromGoogleMaps', false);
        } else {
            if (!addListing.valid.selectFromGoogleMaps) setValidationValue('selectFromGoogleMaps', true);
        }
    }

    validateListing() {
        let { addListing, setValidationValue } = this.props;
        let { listing } = addListing;

        // listing basics
        if (!listing.name || !listing.address.address || !listing.type) {
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
        else if (listing.rooms.filter(room => room.base_rate <= 10 || !room.base_rate).length > 0) {
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

    setEnabledLinks() {
        let { valid } = this.props.addListing;
        let { linkEnabled } = Object.assign({}, this.state.linkEnabled);

        // check preview and notes
        if (!valid.listing || !valid.rooms) {
            linkEnabled = { ...linkEnabled, preview: false, notes: false, amenities: false };
        } else {
            linkEnabled = { ...linkEnabled, preview: true, notes: true, amenities: true };
        }

        // check rooms
        if (!valid.listing) {
            linkEnabled = { ...linkEnabled, rooms: false };
        } else {
            linkEnabled = { ...linkEnabled, rooms: true };
        }

        this.setState({ linkEnabled });
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
        let { classes, linkEnabled } = this.state;

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
                            {linkEnabled.rooms ? <Link to="/add/rooms">Rooms</Link> : <strong className="text-muted">Rooms</strong>}
                            <span className="triangle" />
                        </div>
                        <div className={'col ' + classes.amenities}>
                            <span className="triangle-left" />
                            {linkEnabled.amenities ? <Link to="/add/amenities">Amenities</Link> : <strong className="text-muted">Amenities</strong>}
                            <span className="triangle" />
                        </div>
                        <div className={'col ' + classes.notes}>
                            <span className="triangle-left" />
                            {linkEnabled.notes ? <Link to="/add/notes">Notes</Link> : <strong className="text-muted">Notes</strong>}
                            <span className="triangle" />
                        </div>
                        <div className={'col ' + classes.preview}>
                            <span className="triangle-left" />
                            {linkEnabled.preview ? <Link to="/add/preview">Preview</Link> : <strong className="text-muted">Preview</strong>}
                            <span className="triangle" />
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default ProgressFooter;

