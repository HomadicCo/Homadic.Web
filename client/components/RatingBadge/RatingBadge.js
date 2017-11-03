import React from 'react';

class RatingBadge extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        let { rating } = this.props;

        var badgeClass;

        if (rating >= 3.5) {
            badgeClass = "badge badge-success";
        } else if (rating >= 2.5) {
            badgeClass = "badge badge-warning";
        } else if (rating >= 2) {
            badgeClass = "badge badge-default";
        } else {
            badgeClass = "badge badge-danger";
        }

        return (
            <span className={"white " + badgeClass}>{rating}</span>
        )
    }
}

export default RatingBadge;