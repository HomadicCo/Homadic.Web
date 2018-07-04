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
                {reviews.data.data.length > 0 ? reviews.data.data.map((review, i) => {
                    return (
                        <div className="col-12" key={i}>
                            {this.renderReview(review)}
                        </div>
                    )
                }) : <div className="col-12"><p className="text-center">There are no reviews for this listing yet.</p></div>}
            </div>
        )
    }

    render() {
        let { reviews } = this.props;

        return (
            <div id="reviews">
                <div className="content-box">
                    <div className="row">
                        <div className="col">
                            <h3 className="fancy blue">Reviews</h3>
                        </div>
                        <div className="col ml-auto d-flex justify-content-end">
                            <button className="btn btn-link btn-sm"><strong className="blue"><i className="fas fa-lg fa-grin-stars mr-1"></i> Add review</strong></button>
                        </div>
                    </div>
                    <hr />
                    {reviews.loading ? <LoadingPlane /> : this.renderLoaded()}
                </div>
            </div>
        )
    }
}

export default Hero;
