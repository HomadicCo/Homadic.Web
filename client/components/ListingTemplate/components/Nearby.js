import React from 'react';

class Nearby extends React.Component {
    constructor(props) {
        super(props);
    }

    renderPointOfInterest(poi) {
        return (
            <p>{poi.name}</p>
        )
    }

    render() {
        let { listing, previewMode } = this.props;
        let previewModeString = 'Nearby points of interest will be calculated and displayed after submission.';

        return (
            listing.points_of_interest ?
                <div id="nearby">
                    <div className="content-box">
                        <h2 className="fancy blue">Nearby</h2>
                        <div className="row">
                            {previewMode ? <div className="col-12"><p>{previewModeString}</p></div> : listing.points_of_interest.map((poi, i) => (<div key={i} className="col-md-4">{this.renderPointOfInterest(poi)}</div>))}
                        </div>
                    </div>
                </div> : undefined
        )
    }
}

export default Nearby;
