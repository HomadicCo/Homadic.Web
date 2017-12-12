import React from 'react';
import { icons } from '../../../Images/Images';
import { bathrooms, bedrooms, rentalLengths } from '../../../data';

class Room extends React.Component {
    constructor(props) {
        super(props);
    }

    renderBedrooms() {
        let { room } = this.props;

        const i = bedrooms.findIndex((bedroom) => bedroom.value == room.bedrooms);
        return bedrooms[i].name;
    }

    renderBathrooms() {
        let { room } = this.props;

        const i = bathrooms.findIndex((bathroom) => bathroom.value == room.bathrooms);
        return bathrooms[i].name;
    }

    renderMinStay() {
        let { room } = this.props;

        const i = rentalLengths.findIndex((r) => r.value == room.min_rental);
        return rentalLengths[i];
    }

    renderKitchen() {
        let { room } = this.props;

        switch (room.kitchen) {
            case 'included':
                return (<i className="green fas fa-check" size="lg" />)
            case 'shared':
                return (<span>Shared</span>)
            case 'none':
                return (<i className="text-muted fas fa-times" size="lg" />)
        }
    }

    renderLaundry() {
        let { room } = this.props;

        switch (room.laundry) {
            case 'included':
                return (<i className="green fas fa-check" size="lg" />)
            case 'shared':
                return (<span>Shared</span>)
            case 'none':
                return (<i className="text-muted fas fa-times" size="lg" />)
        }
    }

    render() {
        let { colClass, currency, room } = this.props;
        const minStay = this.renderMinStay();

        return (
            <div className={colClass + ' mb-2'}>
                <div className="content-box room" >
                    <h6><img className="mr-1" src={icons.bedroom} height={30} width={30} /> {this.renderBedrooms()} <img className="ml-3 mr-1" src={icons.bathroom} height={30} width={30} /> {this.renderBathrooms()}</h6>
                    <hr />
                    <div className="row">
                        <div className="col-6 mt-1">
                            <p><strong>Kitchen:</strong> {this.renderKitchen()}</p>
                        </div>
                        <div className="col-6 mt-1">
                            <p><strong>Laundry:</strong> {this.renderLaundry()}</p>
                        </div>
                        <div className="col-12 mt-2 min-stay">
                            <p className="text-muted"><img src={icons[minStay.icon]} className="mr-1" /> {minStay.name} min stay</p>
                        </div>
                    </div>
                    <div className="content-box-footer bg-blue">
                        <h6 className="white"><strong>{room.base_rate} {currency}</strong> {room.deposit ? <small>{room.deposit} {currency} deposit</small> : undefined}</h6>
                    </div>
                </div >
            </div >
        )
    }
}

export default Room;