import React from 'react';
import FontAwesome from 'react-fontawesome';

class Rooms extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <form autoComplete="off">
                <h3>Rooms</h3>
                <div className="form-row">
                    <div className="form-group col-md-9">
                        <label htmlFor="inputListingName" className="col-form-label">Listing name*</label>
                        <input type="text" className="form-control" id="inputListingName" placeholder="Listing name" />
                    </div>
                    <div className="form-group col-md-3">
                        <label htmlFor="inputListingType" className="col-form-label">Listing type*</label>
                        <select id="inputListingType" className="form-control">
                            <option className="text-muted">Listing type</option>
                            <option value="condo">Condo/apartment</option>
                            <option value="hotel">Hotel</option>
                            <option value="hostel">Hostel</option>
                            <option value="home">Home</option>
                        </select>
                    </div>
                </div>
                <div className="content-header">
                    <h5>Contact details</h5>
                </div>
                <div className="form-group">
                    <label htmlFor="inputAddress" className="col-form-label">Address*</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <label htmlFor="inputPhone" className="col-form-label">Phone</label>
                        <input type="tel" className="form-control" id="inputPhone" />
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="inputEmail" className="col-form-label">Email</label>
                        <input type="email" className="form-control" id="inputEmail" />
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="inputUrl" className="col-form-label">URL</label>
                        <input type="url" className="form-control" id="inputUrl" />
                    </div>
                </div>
                <div className="content-header">
                    <h5>Social</h5>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <label htmlFor="inputFacebook" className="col-form-label">Facebook <FontAwesome name="facebook-square" /></label>
                        <input type="tel" className="form-control" id="inputFacebook" />
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="inputTwitter" className="col-form-label">Twitter <FontAwesome name="twitter" /></label>
                        <input type="email" className="form-control" id="inputTwitter" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-auto ml-auto">
                        <button className="btn btn-success">Next <FontAwesome name="caret-right" /></button>
                    </div>
                </div>
            </form>
        )
    }
}

export default Rooms;