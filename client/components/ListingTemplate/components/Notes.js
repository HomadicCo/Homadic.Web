import React from 'react';
import RenderMarkdown from '../../RenderMarkdown/RenderMarkdown';

class Notes extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { notes } = this.props;

        return (
            <div id="notes">
                {notes ?
                    <div className="content-box">
                        <h3 className="fancy blue">Notes</h3>
                        <hr />
                        <RenderMarkdown markdown={notes} />
                    </div> : undefined}
            </div>
        )
    }
}

export default Notes;
