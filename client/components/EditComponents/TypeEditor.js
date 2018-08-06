import React from 'react';
import { rentalTypes } from '../../data';

class TypeEditor extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        let { type, handleChange } = this.props;

        return (
            <div>
                <label htmlFor="inputListingType" className="col-form-label">Listing type*</label>
                <select id="inputListingType" name="type" value={type} className="form-control" onChange={handleChange} required>
                    {rentalTypes.map((type, i) => (<option key={i} value={type.value}>{type.name}</option>))}
                </select>
            </div>
        )
    }
}

export default TypeEditor;