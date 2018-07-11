import React from 'react';
import Avatar from '../../../Components/Avatar/Avatar';
import ThumbsUpDown from '../../../components/ThumbsUpDown/ThumbsUpDown';
import LoadingPlane from '../../../components/LoadingScreen/LoadingPlane';

class Hero extends React.Component {
    constructor(props) {
        super(props);

        this.toggleEditor = this.toggleEditor.bind(this);
        this.handleReviewBody = this.handleReviewBody.bind(this);
        this.clickThumbsUp = this.clickThumbsUp.bind(this);
        this.submitReview = this.submitReview.bind(this);

        this.state = {
            reviewEditorOpen: false,
            reviewSubmitting: false,
            reviewError: null,
            selectedUserReview: {
                review_body: '',
                thumbs_up: null
            }
        }
    }

    componentDidUpdate(prevProps) {
        let { selectedUserReview } = this.props.listings;

        if (selectedUserReview != prevProps.listings.selectedUserReview) {
            this.setState({ selectedUserReview });
        }
    }

    submitReview() {
        let { handleSubmitUserReview, listings } = this.props;
        let { selectedUserReview } = this.state;

        this.setState({ reviewSubmitting: true });

        handleSubmitUserReview(listings.selected.slug, selectedUserReview).then(() => {
            this.setState({ ...this.state, reviewEditorOpen: false, reviewSubmitting: false, reviewError: null });
        }).catch((r) => {
            this.setState({ ...this.state, reviewSubmitting: false, reviewError: r.response.data });
        });
    }

    handleReviewBody(e) {
        this.setState({ selectedUserReview: { ...this.state.selectedUserReview, review_body: e.target.value } });
    }

    clickThumbsUp(v) {
        this.setState({ selectedUserReview: { ...this.state.selectedUserReview, thumbs_up: v } });
    }

    toggleEditor() {
        let { reviewEditorOpen } = this.state;

        this.setState({ reviewEditorOpen: reviewEditorOpen ? false : true });
    }

    renderReviewEditor() {
        let { selected } = this.props.listings;
        let { selectedUserReview, reviewSubmitting, reviewError } = this.state;

        return (
            reviewSubmitting ? <LoadingPlane /> :
                <div>
                    {reviewError != null ? <div className="alert alert-danger" role="alert"><i className="far fa-angry" style={{ fontSize: '1.2em' }} /> {reviewError}</div> : undefined}
                    <textarea id="inputReviewBody" className="form-control mb-3" placeholder="Write a review..." name="reviewBody" value={selectedUserReview.review_body} onChange={this.handleReviewBody} maxLength={3000} />
                    <div className="row">
                        <div className="col ml-auto d-flex justify-content-end">
                            <ThumbsUpDown customStyle={{ fontSize: '1.3em' }} listing={selected.listing} userReview={selectedUserReview} clickThumbsUp={this.clickThumbsUp} /> <button className="btn btn-sm btn-success ml-2" onClick={this.submitReview}><i className="fas fa-grin-stars mr-1" /> Submit review</button>
                        </div>
                    </div>
                </div>
        )
    }

    renderReviewEditorButton() {
        if (this.state.reviewEditorOpen) {
            return (
                <button className="btn btn-link btn-sm" onClick={this.toggleEditor} > <strong className="blue"><i className="fas fa-times fa-lg mr-1"></i> Close editor</strong></button>
            )
        }

        return (
            <button className="btn btn-link btn-sm" onClick={this.toggleEditor} > <strong className="blue"><i className="fas fa-lg fa-grin-stars mr-1"></i> Add review</strong></button>
        )
    }

    renderReview(review) {
        return (
            <div className="my-3">
                <p><Avatar className="mr-2" size={40} id={review.user_id} name={review.user_name} /> <strong>{review.user_name}</strong></p>
                <p>{review.review_body}</p>
            </div>
        )
    }

    renderReviews() {
        let { reviews } = this.props;

        return (
            <div className="row">
                {reviews.data.length > 0 ? reviews.data.map((review, i) => {
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
        let { reviewEditorOpen } = this.state;

        return (
            <div id="reviews">
                <div className="content-box">
                    <div className="row">
                        <div className="col">
                            <h3 className="fancy blue">Reviews</h3>
                        </div>
                        <div className="col ml-auto d-flex justify-content-end">
                            {this.renderReviewEditorButton()}
                        </div>
                    </div>
                    <hr />
                    {reviewEditorOpen ? this.renderReviewEditor() : this.renderReviews()}
                </div>
            </div>
        )
    }
}

export default Hero;
