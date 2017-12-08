import React from 'react';
import { browserHistory } from 'react-router';
import Notes from '../../../components/ListingTemplate/components/Notes';

class NotesEditor extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            previewMode: false
        }

        this.handleNextClick = this.handleNextClick.bind(this);
        this.handlePrevClick = this.handlePrevClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.setPreviewMode = this.setPreviewMode.bind(this);
    }

    componentWillMount() {
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

    setPreviewMode(value, e) {
        e.preventDefault();
        this.setState({ previewMode: value })
    }

    renderPreviewToggle() {
        let { previewMode } = this.state;

        return (
            <div className="btn-group mb-2">
                <button type="button" className={previewMode ? 'btn btn-sm btn-light' : 'btn btn-sm btn-action'} onClick={this.setPreviewMode.bind(null, false)}><i className="fas fa-pencil-alt" /> Editor</button>
                <button type="button" className={previewMode ? 'btn btn-sm btn-action' : 'btn btn-sm btn-light'} onClick={this.setPreviewMode.bind(null, true)}><i className="fas fa-eye" /> Preview</button>
            </div>
        )
    }

    renderPreviewMode() {
        let { notes } = this.props.addListing.listing;
        let { previewMode } = this.state;

        return (
            <div hidden={!previewMode}>
                {this.renderPreviewToggle()}
                <Notes notes={notes} />
            </div>
        )
    }

    renderEditor() {
        let { listing } = this.props.addListing;
        let { previewMode } = this.state;

        return (
            <div hidden={previewMode}>
                <form autoComplete="off" ref={(c) => { this.notesForm = c; }} noValidate>
                    <h1 className="fancy blue display-4 mb-4">Notes</h1>
                    <p><a href="https://guides.github.com/features/mastering-markdown/" rel="noopener noreferrer" target="_blank">Markdown</a> is enabled. And you can add YouTube clips!</p>
                    {this.renderPreviewToggle()}
                    <textarea id="inputNotes" className="form-control" style={{ height: 300 }} placeholder="This is markdown enabled..." name="notes" maxLength={9000} value={listing.notes} onChange={this.handleChange} />
                </form>
            </div>
        )
    }

    render() {
        return (
            <div>
                {this.renderPreviewMode()}
                {this.renderEditor()}
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

export default NotesEditor;