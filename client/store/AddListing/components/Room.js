import React from 'react';
import FontAwesome from 'react-fontawesome';
import { bedrooms, bathrooms, kitchen, laundry, rentalLengths } from '../../../data';
import { generateRoomTitle } from '../../../functions';

class Room extends React.Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleSetExpandedRoom = this.handleSetExpandedRoom.bind(this);
        this.handleRemoveRoom = this.handleRemoveRoom.bind(this);
    }

    handleChange(e) {
        const target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let key = target.name;

        // check if int or string
        value = target.getAttribute('data-type') === 'int' ? parseFloat(value) : value;

        this.props.updateInputProp(key, value);
    }

    handleSetExpandedRoom(e) {
        e.preventDefault();
        let { room, setExpandedRoom } = this.props;

        setExpandedRoom(room.id);
    }

    isTheRoom(expandedRoom, room) {
        return expandedRoom == room.id;
    }

    handleRemoveRoom(e) {
        e.preventDefault();
        let { addListing, room, removeRoom, setExpandedRoom } = this.props;
        let { rooms } = addListing.listing;
        let { expandedRoom } = addListing.ui;

        // if it's the expanded room, we wanna set it to the one above
        if (addListing.ui.expandedRoom == room.id) {


            const i = rooms.findIndex(this.isTheRoom.bind(null, expandedRoom));
            setExpandedRoom(rooms[i - 1].id);
        }

        removeRoom(room.id);
    }

    renderDetails() {
        let { addListing, id, room } = this.props;

        return (
            <div hidden={addListing.ui.expandedRoom == room.id ? false : true}>
                <div className="form-row">
                    <div className="form-group col-md-3">
                        <label className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" name={'rooms[' + id + '].serviced'} defaultChecked={room.serviced} value={room.serviced} onChange={this.handleChange} />
                            <span className="custom-control-indicator" />
                            <span className="custom-control-description">Serviced <FontAwesome className="text-muted" name="user" /></span>
                        </label>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-3">
                        <label htmlFor="inputBedrooms" className="col-form-label">Bedrooms <FontAwesome className="text-muted" name="bed" /></label>
                        <select id="inputBedrooms" className="form-control" data-type="int" name={'rooms[' + id + '].bedrooms'} value={room.bedrooms} onChange={this.handleChange}>
                            {bedrooms.map((bedroom, i) => (<option key={i} value={bedroom.value}>{bedroom.name}</option>))}
                        </select>
                    </div>
                    <div className="form-group col-md-3">
                        <label htmlFor="inputBathrooms" className="col-form-label">Bathrooms <FontAwesome className="text-muted" name="bath" /></label>
                        <select id="inputBathrooms" className="form-control" data-type="int" name={'rooms[' + id + '].bathrooms'} value={room.bathrooms} onChange={this.handleChange}>
                            {bathrooms.map((bathroom, i) => (<option key={i} value={bathroom.value}>{bathroom.name}</option>))}
                        </select>
                    </div>
                    <div className="form-group col-md-3">
                        <label htmlFor="inputKitchen" className="col-form-label">Kitchen <FontAwesome className="text-muted" name="cutlery" /></label>
                        <select id="inputKitchen" className="form-control" name={'rooms[' + id + '].kitchen'} value={room.kitchen} onChange={this.handleChange}>
                            {kitchen.map((item, i) => (<option key={i} value={item.value}>{item.name}</option>))}
                        </select>
                    </div>
                    <div className="form-group col-md-3">
                        <label htmlFor="inputLaundry" className="col-form-label">Laundry <FontAwesome className="text-muted" name="black-tie" /></label>
                        <select id="inputLaundry" className="form-control" name={'rooms[' + id + '].laundry'} value={room.laundry} onChange={this.handleChange}>
                            {laundry.map((item, i) => (<option key={i} value={item.value}>{item.name}</option>))}
                        </select>
                    </div>
                </div>
                <div className="content-box">
                    <div className="row">
                        <div className="col-sm">
                            <label htmlFor="inputMinRental" className="col-form-label">Min rental length <FontAwesome className="text-muted" name="calendar-o" /></label>
                            <select id="inputMinRental" className="form-control" name={'rooms[' + id + '].min_rental'} value={room.min_rental} onChange={this.handleChange}>
                                {rentalLengths.map((item, i) => (<option key={i} value={item.value}>{item.name}</option>))}
                            </select>
                        </div>
                        <div className="col-sm">
                            <label htmlFor="inputRate" className="col-form-label mr-2">Monthly rate <FontAwesome className="text-muted" name="dollar" /></label>
                            <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                                <div className="input-group-addon">{addListing.listing.currency}</div>
                                <input type="number" name={'rooms[' + id + '].base_rate'} value={room.base_rate} min={10} data-type="int" className="form-control mr-3" id="inputRate" required onChange={this.handleChange} />
                            </div>
                        </div>
                        <div className="col-sm">
                            <label htmlFor="inputDeposit" className="col-form-label mr-2">Deposit <FontAwesome className="text-muted" name="dollar" /></label>
                            <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                                <div className="input-group-addon">{addListing.listing.currency}</div>
                                <input type="number" name={'rooms[' + id + '].deposit'} value={room.deposit} data-type="int" className="form-control mr-3" id="inputDeposit" required onChange={this.handleChange} />
                            </div>
                        </div>
                    </div>
                    <small id="rentalTermHelp" className="form-text text-muted">The monthly rate and deposit should be for the minimum stay, not a discount for longer stays.</small>
                </div>
            </div>
        )
    }

    render() {
        let { addListing, room } = this.props;

        return (
            <div>
                <div className="content-header min-padding">
                    <div className="row">
                        <div className="col-auto mr-auto">
                            <h5>{generateRoomTitle(room)}</h5>
                        </div>
                        <div className="col-auto">
                            <div className="btn-group">
                                {addListing.ui.expandedRoom != room.id ? <button type="button" onClick={this.handleSetExpandedRoom} className="btn btn-trans btn-sm"><FontAwesome name="caret-down" /></button> : undefined}
                                {addListing.listing.rooms.length > 1 ? <button type="button" onClick={this.handleRemoveRoom} className="btn btn-trans btn-sm"><FontAwesome name="close" /></button> : undefined}
                            </div>
                        </div>
                    </div>
                </div>
                {this.renderDetails()}
            </div >
        )
    }
}

export default Room;