import React from 'react';
import { room } from '../../data';
import EditRoom from './Components/EditRoom';

class EditRooms extends React.Component {
    constructor(props) {
        super(props)

        this.handleAddNewRoomClick = this.handleAddNewRoomClick.bind(this);
    }

    componentWillMount() {
        let { rooms } = this.props;

        if (rooms.length == 0) {
            this.props.addRoomToListing(room);
        }
    }

    handleAddNewRoomClick(e) {
        e.preventDefault();
        this.props.addRoomToListing(room);
    }

    render() {
        let { rooms } = this.props;

        return (
            <div>
                <h3 className="fancy blue display-4 mb-4">Rooms</h3>
                {rooms.map((room, i) => <EditRoom key={i} id={i} room={room} {...this.props} />)}
                {rooms.length < 6 ? <button type="button" className="btn btn-action btn-sm" onClick={this.handleAddNewRoomClick}>Add room <i className="fas fa-plus" /></button> : <p>Only six rooms allowed for now.</p>}
            </div>
        )
    }
}

export default EditRooms;