import React from 'react';

class ThumbsUpDown extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { listing, userReview } = this.props;

        const thumbsUpClass = userReview != null && userReview.thumbs_up ? { digit: 'pink', icon: 'fas fa-thumbs-up pink' } : { digit: '', icon: 'far fa-thumbs-up' };
        const thumbsDownClass = userReview != null && !userReview.thumbs_up ? { digit: 'pink', icon: 'fas fa-thumbs-down pink' } : { digit: '', icon: 'far fa-thumbs-down' };

        return (
            <span>
                <i className={thumbsUpClass.icon} /> <strong className={thumbsUpClass.digit}>{listing.review_summary.thumbs_up}</strong> <i className={thumbsDownClass.icon + ' ml-1'} /> <strong className={thumbsDownClass.digit}>{listing.review_summary.thumbs_down}</strong>
            </span>
        )
    }
}

export default ThumbsUpDown;
