import React from 'react';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router';

class ProgressFooter extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <footer className="footer">
                <div className="container-fluid">
                    <div className="row progress-steps">
                        <div className="col-md-3 visited-step">
                            <a href="#">Place</a>
                            <span className="triangle"></span>
                        </div>
                        <div className="col-md-3 current-step">
                            <span className="triangle-left"></span>
                            <a href="#">Rooms</a>
                            <span className="triangle"></span>
                        </div>
                        <div className="col-md-3">
                            <span className="triangle-left"></span>
                            <a href="#">Amenities</a>
                            <span className="triangle"></span>
                        </div>
                        <div className="col-md-3">
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

