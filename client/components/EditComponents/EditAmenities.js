import React from 'react';

class EditAmenities extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        let { amenities, handleChange } = this.props;

        return (
            <div>
                <h1 className="fancy blue display-4 mb-4">Amenities</h1>
                <div className="form-row">
                    <div className="col">
                        <label className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" name="amenities.air_conditioning" defaultChecked={amenities.air_conditioning} value={amenities.air_conditioning} onChange={handleChange} />
                            <span className="custom-control-indicator" />
                            <span className="custom-control-description">Air Conditioning</span>
                        </label>
                    </div>
                    <div className="col">
                        <label className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" name="amenities.gym" defaultChecked={amenities.gym} value={amenities.gym} onChange={handleChange} />
                            <span className="custom-control-indicator" />
                            <span className="custom-control-description">Gym</span>
                        </label>
                    </div>
                    <div className="col">
                        <label className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" name="amenities.pool" defaultChecked={amenities.pool} value={amenities.pool} onChange={handleChange} />
                            <span className="custom-control-indicator" />
                            <span className="custom-control-description">Pool</span>
                        </label>
                    </div>
                </div>
            </div>
        )
    }
}

export default EditAmenities;