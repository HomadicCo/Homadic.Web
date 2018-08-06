import React from 'react';

class SocialDetailsEditor extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        let { socialDetails, handleChange } = this.props;

        return (
            <div>
                <h3 className="fancy blue">Social Details</h3>
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <label htmlFor="inputFacebook" className="col-form-label">Facebook URL <i className="text-muted fab fa-facebook-square" /></label>
                        <input type="text" name="social_details.facebook" value={socialDetails.facebook} className="form-control" id="inputFacebook" onChange={handleChange} />
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="inputInstagram" className="col-form-label">Instagram Handle <i className="text-muted fab fa-instagram" /></label>
                        <input type="text" name="social_details.instagram" value={socialDetails.instagram} className="form-control" id="inputInstagraam" onChange={handleChange} />
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="inputTwitter" className="col-form-label">Twitter Handle <i className="text-muted fab fa-twitter" /></label>
                        <input type="text" name="social_details.twitter" value={socialDetails.twitter} className="form-control" id="inputTwitter" onChange={handleChange} />
                    </div>
                </div>
            </div>
        )
    }
}

export default SocialDetailsEditor;