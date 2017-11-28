import React from 'react';
import RenderMarkdown from '../../RenderMarkdown/RenderMarkdown';

class Notes extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { notes } = this.props;

        return (
            <div>
                {notes ?
                    <div className="content-box">
                        <h2 className="fancy blue">Notes</h2>
                        <RenderMarkdown markdown={notes} />
                    </div> : undefined}
            </div>
        )
    }
}

export default Notes;
