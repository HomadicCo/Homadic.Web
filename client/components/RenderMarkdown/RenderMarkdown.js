import React from 'react';
import marked from 'marked';
import { extractYoutubeFromString } from '../../functions';

var renderer = new marked.Renderer();

renderer.link = function (href, title, text) {
    // check if is youtube
    var youtube = extractYoutubeFromString(href);
    if (youtube !== null) {
        var link = '//www.youtube.com/embed/' + youtube[1] + '?rel=0';

        return '<div class="embed-youtube my-1"><div class="embed-responsive embed-responsive-16by9">' +
            '<iframe class="embed-responsive-item" src="' + link + '" allowfullscreen></iframe>' +
            '</div></div>';
    }

    return '<a href="' + href + '" title="' + title + '" target="_blank">' + text + '</a>';
}

marked.setOptions({
    renderer
})

class RenderMarkdown extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { markdown } = this.props;

        return (
            <div className="markdown" dangerouslySetInnerHTML={{ __html: marked((markdown ? markdown : "")) }}></div>
        )
    }
}

export default RenderMarkdown;
