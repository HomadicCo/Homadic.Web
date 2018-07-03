import React from 'react';
import LoadingPlane from '../../LoadingScreen/LoadingPlane';
import Avatar from '../../../Components/Avatar/Avatar';

class Hero extends React.Component {
    constructor(props) {
        super(props);
    }

    renderReview(review) {
        return (
            <div className="my-3">
                <p><Avatar className="mr-2" size={40} id={review.user_id} name={review.user_name} /> <strong>{review.user_name}</strong></p>
                <p>{review.review_body}</p>
            </div>
        )
    }

    renderLoaded() {
        let { reviews } = this.props;

        return (
            <div className="row">
                {reviews.data.data.map((review, i) => {
                    return (
                        <div className="col-12" key={i}>
                            {this.renderReview(review)}
                        </div>
                    )
                })}
            </div>
        )
    }

    render() {
        let { reviews } = this.props;

        return (
            <div id="reviews">
                <div className="content-box">
                    <h3 className="fancy blue">Reviews</h3>
                    <hr />
                    {reviews.loading ? <LoadingPlane /> : this.renderLoaded()}
                </div>
            </div>
        )
    }
}

export default Hero;
