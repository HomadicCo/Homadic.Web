import React from 'react';
import FontAwesome from 'react-fontawesome';

class Pricing extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { listing } = this.props;

        return (
            <div>
                <div className="content-header">
                    <h5><FontAwesome name="dollar" /> Monthly Price ({listing.currency})</h5>
                </div>
                <div className="m-3">
                    {listing.rooms.map((room) => {
                        <p>{room.base_rate}</p>
                    })}
                </div>
            </div>
        )
    }
}

export default Pricing;
