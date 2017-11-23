import React from 'react';

class Avatar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { profile, size, className } = this.props;
        let pixelSize = String(size) + 'px';
        let avatarSrc = '';

        //handle customClasses
        let customClass = 'avatar ';
        if (className) {
            customClass = customClass + className;
        }
        // select sizes
        if (size > 160) {
            avatarSrc = 'https://graph.facebook.com/v2.10/' + profile.id + '/picture?type=large';
        } else if (size > 50) {
            avatarSrc = 'https://graph.facebook.com/v2.10/' + profile.id + '/picture?type=normal';
        } else {
            avatarSrc = 'https://graph.facebook.com/v2.10/' + profile.id + '/picture';
        }

        return (
            <img className={customClass} alt={profile.name} src={avatarSrc} height={pixelSize} width={pixelSize} />
        )
    }
}

export default Avatar;
