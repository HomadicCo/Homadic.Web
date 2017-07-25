import React from 'react';

class Avatar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { profile, size, customClass } = this.props;
        let pixelSize = String(size) + "px";
        let avatarSrc = "";

        //handle customClasses
        let className = "avatar ";
        if (customClass) {
            className = className + customClass;
        }
        // select sizes
        if (size > 160) {
            avatarSrc = "https://graph.facebook.com/v2.10/" + profile.id + "/picture?type=large";
        } else {
            avatarSrc = "https://graph.facebook.com/v2.10/" + profile.id + "/picture";
        }

        return (
            <img className={className} alt={profile.name} src={avatarSrc} height={pixelSize} width={pixelSize} />
        )
    }
}

export default Avatar;
