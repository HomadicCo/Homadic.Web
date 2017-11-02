import React from 'react';
import { browserHistory } from 'react-router';
import FontAwesome from 'react-fontawesome';

class Notes extends React.Component {
    constructor(props) {
        super(props)

        this.handleNextClick = this.handleNextClick.bind(this);
        this.handlePrevClick = this.handlePrevClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleNextClick(e) {
        e.preventDefault();
        const form = this.refs.notesForm;

        if (form.checkValidity() == false) {
            form.classList.add("was-validated");
        } else {
            browserHistory.push("/add/preview");
        }
    }

    handlePrevClick(e) {
        e.preventDefault();
        browserHistory.push("/add/amenities");
    }

    handleChange(e) {
        const target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let key = target.name;

        // check if int or string
        value = target.getAttribute('data-type') === 'int' ? parseFloat(value) : value;

        this.props.updateInputProp(key, value);
    }

    render() {
        let { listing } = this.props.addListing;

        return (
            <form autoComplete="off" ref="notesForm" noValidate>
                <h1 className="fancy blue display-4 mb-4">Additional notes</h1>
                <textarea id="inputNotes" className="form-control" placeholder="Any additional notes..." name="notes" value={listing.notes} onChange={this.handleChange} />
                <small id="emailHelp" className="form-text text-muted">This should mention any notable features or things to know, not your personal review. Reviews are coming soon!</small>
                <div className="row justify-content-center mt-4">
                    <div className="col-auto">
                        <button type="button" onClick={this.handlePrevClick} className="btn btn-outline-success mx-1"><FontAwesome name="caret-left" /> Amenities</button>
                        <button type="button" onClick={this.handleNextClick} className="btn btn-success mx-1">Preview <FontAwesome name="caret-right" /></button>
                    </div>
                </div>
            </form>
        )
    }
}

export default Notes;