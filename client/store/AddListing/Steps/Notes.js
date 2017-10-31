import React from 'react';
import { browserHistory } from 'react-router';
import FontAwesome from 'react-fontawesome';

class Notes extends React.Component {
    constructor(props) {
        super(props)

        this.handleNextClick = this.handleNextClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleNextClick(e) {
        e.preventDefault();
        const form = this.refs.listingForm;
        console.log(form);

        if (form.checkValidity() == false) {
            form.classList.add("was-validated");
        } else {
            browserHistory.push("/add/preview");
        }
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
            </form>
        )
    }
}

export default Notes;