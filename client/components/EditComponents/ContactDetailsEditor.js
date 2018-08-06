import React from 'react';

class ContactDetailsEditor extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        let { contactDetails, address, full, handleChange } = this.props;

        return (
            <div>
                <div className="content-header">
                    <h3>Contact details</h3>
                </div>
                {full ? <div className="form-group">
                    <label htmlFor="inputAddress" className="col-form-label">Address*</label>
                    <input type="text" name="address" value={address.address} className="form-control" id="inputAddress" placeholder="123 Nomad St" readOnly required />
                    <div className="invalid-feedback">
                        Please provide the address.
                    </div>
                </div> : undefined}
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <label htmlFor="inputPhone" className="col-form-label">Phone</label>
                        <input type="tel" name="contact_details.phone_number" value={contactDetails.phone_number} className="form-control" id="inputPhone" onChange={handleChange} maxLength={50} />
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="inputEmail" className="col-form-label">Email</label>
                        <input type="email" name="contact_details.email" value={contactDetails.email} className="form-control" id="inputEmail" onChange={handleChange} maxLength={50} />
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="inputUrl" className="col-form-label">URL</label>
                        <input type="url" name="contact_details.website" value={contactDetails.website} className="form-control" id="inputUrl" onChange={handleChange} />
                    </div>
                </div>
            </div>
        )
    }
}

export default ContactDetailsEditor;