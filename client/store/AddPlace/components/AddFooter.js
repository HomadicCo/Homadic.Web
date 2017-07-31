import React from 'react';
import { Link } from 'react-router';

class AddFooter extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <footer className="footer">
                <div className="container">
                    <span>Place sticky footer content here.</span>
                </div>
            </footer>
        )
    }
}

export default AddFooter;

