import React from 'react';
import { browserHistory } from 'react-router';
import FontAwesome from 'react-fontawesome';

class Notes extends React.Component {
    constructor(props) {
        super(props)

        this.handleNextClick = this.handleNextClick.bind(this);
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

    render() {
        return (
            <form autoComplete="off" ref="notesForm" noValidate>
                <h1 className="fancy display-4 mb-4">Additional notes</h1>
                <textarea id="inputNotes" className="form-control" placeholder="Any additional notes..." />
                <small id="emailHelp" className="form-text text-muted">This should mention any notable features or things to know, not your personal review. Reviews are coming soon!</small>
            </form>
        )
    }
}

export default Notes;