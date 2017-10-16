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
        let { step } = this.props.params;
        const nextStep = nextProps.params.step;

        if (step != nextStep) {
            this.setStepClasses(nextStep);
        }
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

