import React from 'react';
import { browserHistory } from 'react-router';
import FontAwesome from 'react-fontawesome';
import Description from '../../../components/ListingTemplate/components/Description';

class DescriptionEditor extends React.Component {
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

    handleNextClick(e) {
        e.preventDefault();
        const form = this.descriptionForm;

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
                <button type="button" className={previewMode ? 'btn btn-sm btn-light' : 'btn btn-sm btn-action'} onClick={this.setPreviewMode.bind(null, false)}><FontAwesome name="pencil" /> Editor</button>
                <button type="button" className={previewMode ? 'btn btn-sm btn-action' : 'btn btn-sm btn-light'} onClick={this.setPreviewMode.bind(null, true)}><FontAwesome name="eye" /> Preview</button>
            </div>
        )
    }

    renderPreviewMode() {
        let { description } = this.props.addListing.listing;

        return (
            <div>
                {this.renderPreviewToggle()}
                <Description description={description} />
            </div>
        )
    }

    renderEditor() {
        let { listing } = this.props.addListing;

        return (
            <form autoComplete="off" ref={(c) => { this.descriptionForm = c; }} noValidate>
                <h1 className="fancy blue display-4 mb-4">Description</h1>
                <p><a href="https://guides.github.com/features/mastering-markdown/" rel="noopener noreferrer" target="_blank">Markdown</a> is enabled. And you can add YouTube clips!</p>
                {this.renderPreviewToggle()}
                <textarea id="inputDescription" className="form-control" style={{ height: 300 }} placeholder="This is markdown enabled..." name="description" maxLength={9000} value={listing.description} onChange={this.handleChange} />
            </form>
        )
    }

    render() {
        let { previewMode } = this.state;

        return (
            <div>
                {previewMode ? this.renderPreviewMode() : this.renderEditor()}
                <div className="row justify-content-center mt-4">
                    <div className="col-auto">
                        <button type="button" onClick={this.handlePrevClick} className="btn btn-outline-success mx-1"><FontAwesome name="caret-left" /> Amenities</button>
                        <button type="button" onClick={this.handleNextClick} className="btn btn-success mx-1">Preview <FontAwesome name="caret-right" /></button>
                    </div>
                </div>
            </div>
        )
    }
}

export default DescriptionEditor;