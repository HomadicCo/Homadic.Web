import React from 'react';
import FontAwesome from 'react-fontawesome';
import { generateRoomTitle } from '../../../functions';

class Room extends React.Component {
    constructor(props) {
        super(props);
    }

    renderKitchen() {
        let { room } = this.props;

        switch (room.kitchen) {
            case 'included':
                return (<FontAwesome name="check" className="green" />)
            case 'shared':
                return (<span>Shared</span>)
            case 'none':
                return (<FontAwesome name="times" className="text-muted" />)
        }
    }

    renderLaundry() {
        let { room } = this.props;

        switch (room.laundry) {
            case 'included':
                return (<FontAwesome name="check" className="green" />)
            case 'shared':
                return (<span>Shared</span>)
            case 'none':
                return (<FontAwesome name="times" className="text-muted" />)
        }
    }

    render() {
        let { currency, room } = this.props;

        return (
            <div className="col-6">
                <div className="content-box room">
                    <h5 className="bold"><strong>{generateRoomTitle(room)}</strong></h5>
                    <div className="row">
                        <div className="col-md-6">
                            <p><strong>Kitchen:</strong> {this.renderKitchen()}</p>
                        </div>
                        <div className="col-md-6">
                            <p><strong>Laundry:</strong> {this.renderLaundry()}</p>
                        </div>
                    </div>
                    <div className="content-box-footer">
                        <h6 className="white"><strong>{room.base_rate} {currency}</strong> {room.deposit ? <small>{room.deposit} {currency} deposit</small> : undefined}</h6>
                    </div>
                </div>
            </div>
        )
    }
}

class Rooms extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { listing } = this.props;

        // sort by price
        var rooms = listing.rooms.sort(function (a, b) {
            console.log(a);
            return a.base_rate > b.base_rate;
        });

        return (
            <div>
                    <div className="content-header">
                    <h5><FontAwesome name="dollar" /> Monthly Rates</h5>
                </div>
                <div className="row">
                    {rooms.map((room, i) => (
                        <Room key={i} room={room} currency={listing.currency} />
                    ))}
                </div>
                <div className="row">
                    <div className="col-md-3">
                        {listing.bills.electricity}
                    </div>
                    <div className="col-md-3">
                        {listing.bills.water}
                    </div>
                </div>
            </div>
        )
    }
}

export default Rooms;
