import React from 'react';

class ThumbsUpDown extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { customStyle, listing, userReview, clickThumbsUp } = this.props;

        const thumbsUpClass = userReview != null && userReview.thumbs_up ? { digit: 'pink', icon: 'fas fa-thumbs-up pink' } : { digit: '', icon: 'far fa-thumbs-up' };
        const thumbsDownClass = userReview != null && !userReview.thumbs_up ? { digit: 'pink', icon: 'fas fa-thumbs-down pink' } : { digit: '', icon: 'far fa-thumbs-down' };

        return (
            <span style={customStyle}>
                <span onClick={clickThumbsUp.bind(null, true)} className="thumbs-up"><i className={thumbsUpClass.icon} /> <strong className={thumbsUpClass.digit}>{listing.review_summary.thumbs_up}</strong></span> <span onClick={clickThumbsUp.bind(null, false)} className="thumbs-down"><i className={thumbsDownClass.icon + ' ml-1'} /> <strong className={thumbsDownClass.digit}>{listing.review_summary.thumbs_down}</strong></span>
            </span>
        )
    }
}

export default ThumbsUpDown;
