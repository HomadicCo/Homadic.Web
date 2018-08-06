import React from 'react';
import { browserHistory } from 'react-router';
import NotesEditor from '../../../components/EditComponents/NotesEditor';

class Notes extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            previewMode: false
        }

        this.handleNextClick = this.handleNextClick.bind(this);
        this.handlePrevClick = this.handlePrevClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    UNSAFE_componentWillMount() {
        let { valid } = this.props.addListing;

        if (!valid.rooms) {
            browserHistory.push('/add/rooms');
        }
    }

    handleNextClick(e) {
        e.preventDefault();
        const form = this.notesForm;

        if (form.checkValidity() == false) {
            form.classList.add('was-validated');
        } else {
            browserHistory.push('/add/preview');
        }
    }

    handlePrevClick(e) {
        e.preventDefault();
        browserHistory.push('/add/amenities');
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
            <div>
                <form autoComplete="off" ref={(c) => { this.notesForm = c; }} noValidate>
                    <NotesEditor notes={listing.notes} handleChange={this.handleChange} />
                </form>
                <div className="row justify-content-center mt-4">
                    <div className="col-auto">
                        <button type="button" onClick={this.handlePrevClick} className="btn btn-outline-success mx-1"><i className="fas fa-caret-left" /> Amenities</button>
                        <button type="button" onClick={this.handleNextClick} className="btn btn-success mx-1">Preview <i className="fas fa-caret-right" /></button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Notes;