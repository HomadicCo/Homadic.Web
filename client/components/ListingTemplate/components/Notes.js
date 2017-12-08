import React from 'react';
import RenderMarkdown from '../../RenderMarkdown/RenderMarkdown';

class Notes extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { notes } = this.props;

        return (
            notes ?
                <div id="notes">
                    <div className="content-box">
                        <h2 className="fancy blue">Notes</h2>
                        <RenderMarkdown markdown={notes} />
                    </div>
                </div> : undefined
        )
    }
}

export default Notes;
