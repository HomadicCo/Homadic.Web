import React from 'react';
import RenderMarkdown from '../../RenderMarkdown/RenderMarkdown';

class Description extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { description } = this.props;

        return (
            <div className="content-box">
                <h2 className="fancy blue">Description</h2>
                <RenderMarkdown markdown={description} />
            </div>
        )
    }
}

export default Description;
