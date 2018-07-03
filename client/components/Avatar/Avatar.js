import React from 'react';
import { Link } from 'react-router';

class Avatar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { id, name, size, className } = this.props;
        let pixelSize = String(size) + 'px';
        let avatarSrc = '';

        //handle customClasses
        let customClass = 'avatar ';
        if (className) {
            customClass = customClass + className;
        }
        // select sizes
        if (size > 160) {
            avatarSrc = 'https://graph.facebook.com/v2.10/' + id + '/picture?type=large';
        } else if (size > 50) {
            avatarSrc = 'https://graph.facebook.com/v2.10/' + id + '/picture?type=normal';
        } else {
            avatarSrc = 'https://graph.facebook.com/v2.10/' + id + '/picture';
        }

        return (
            <Link to="/profile"><img className={customClass} alt={name} src={avatarSrc} height={pixelSize} width={pixelSize} /></Link>
        )
    }
}

export default Avatar;
