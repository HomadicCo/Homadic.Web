import React from 'react';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router';

class ProgressFooter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            classes: {
                listing: "current-step",
                rooms: "",
                amenities: "",
                publish: ""
            }
        }
    }

    stepSelector() {
        let { step } = this.props.params;

        switch (step) {
            case 'listing':
                this.setState({
                    classes: {
                        listing: "current-step",
                        rooms: "",
                        amenities: "",
                        publish: ""
                    }
                })
            case 'rooms':
                this.setState({
                    classes: {
                        listing: "visited-step",
                        rooms: "current-step",
                        amenities: "",
                        publish: ""
                    }
                })
            case 'amenities':
                this.setState({
                    classes: {
                        listing: "visited-step",
                        rooms: "visited-step",
                        amenities: "current-step",
                        publish: ""
                    }
                })
            case 'publish':
                this.setState({
                    classes: {
                        listing: "visited-step",
                        rooms: "visited-step",
                        amenities: "visited-step",
                        publish: "current-step"
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
                        <div className={"col-md-3 " + classes.listing}>
                            <a href="#">Listing</a>
                            <span className="triangle"></span>
                        </div>
                        <div className={"col-md-3 " + classes.rooms}>
                            <span className="triangle-left"></span>
                            <a href="#">Rooms</a>
                            <span className="triangle"></span>
                        </div>
                        <div className={"col-md-3 " + classes.amenities}>
                            <span className="triangle-left"></span>
                            <a href="#">Amenities</a>
                            <span className="triangle"></span>
                        </div>
                        <div className={"col-md-3 " + classes.publish}>
                            <span className="triangle-left"></span>
                            <a href="#">Publish</a>
                            <span className="triangle"></span>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default ProgressFooter;

