import React from 'react';
import FontAwesome from 'react-fontawesome';

class Description extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { listing } = this.props;

        return (
            <div className="content-box">
                <h2 className="fancy blue">Description</h2>
                <p>{listing.notes}</p>
            </div>
        )
    }
}

export default Description;
