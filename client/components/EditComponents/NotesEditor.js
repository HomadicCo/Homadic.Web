import React from 'react';
import Notes from '../ListingTemplate/components/Notes';

class NotesEditor extends React.Component {
    constructor(props) {
        super(props)

        this.setPreviewMode = this.setPreviewMode.bind(this);

        this.state = {
            previewMode: false
        }
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
        let { notes } = this.props;
        let { previewMode } = this.state;

        return (
            <div hidden={!previewMode}>
                <Notes notes={notes == undefined || notes.length != 0 ? notes : 'No notes added yet, add some.'} />
            </div>
        )
    }

    renderEditor() {
        let { notes, handleChange } = this.props;
        let { previewMode } = this.state;

        return (
            <div hidden={previewMode}>
                <textarea id="inputNotes" className="form-control" style={{ height: 300 }} placeholder="This is markdown enabled..." name="notes" maxLength={9000} value={notes} onChange={handleChange} />
            </div>
        )
    }

    render() {
        let { previewMode } = this.state;

        return (
            <div>
                <h1 className="fancy blue display-4 mb-4">Notes</h1>
                <p><a href="https://guides.github.com/features/mastering-markdown/" rel="noopener noreferrer" target="_blank">Markdown</a> is enabled. And you can add YouTube clips!</p>
                {this.renderPreviewToggle()}
                {previewMode ? this.renderPreviewMode() : this.renderEditor()}
            </div>
        )
    }
}

export default NotesEditor;