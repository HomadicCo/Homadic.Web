import React from 'react';
import Room from './Room';

class Rooms extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { listing } = this.props;

        // sort by price
        var rooms = listing.rooms.sort(function (a, b) {
            return a.base_rate > b.base_rate;
        });

        return (
            <div>
                <div className="row">
                    {rooms.map((room, i) => (
                        <Room key={i} room={room} currency={listing.currency} />
                    ))}
                </div>
            </div>
        )
    }
}

export default Rooms;
