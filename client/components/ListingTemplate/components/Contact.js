import React from 'react';
import FontAwesome from 'react-fontawesome';


class Contact extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { listing } = this.props;

        return (
            <div className="row justify-content-md-center">
                <div className="col-md-8">
                    <p>{listing.address}</p>
                </div>
            </div>
        )
    }
}

export default Contact;
