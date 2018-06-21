import React from 'react';
import PointOfInterest from '../../PointOfInterest/PointOfInterest';

class Nearby extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { colClass, listing, previewMode } = this.props;
        let previewModeString = 'Nearby points of interest will be calculated and displayed after submission.';

        return (
            <div id="nearby">
                {listing.points_of_interest ?
                    <div className="content-box">
                        <h3 className="fancy blue">Nearby</h3>
                        <hr />
                        <div className="row">
                            {previewMode ? <div className="col-12"><p>{previewModeString}</p></div> : listing.points_of_interest.map((poi, i) => (<div key={i} className={colClass}><PointOfInterest poi={poi} listing={listing} /></div>))}
                        </div>
                    </div> : undefined}
            </div>
        )
    }
}

export default Nearby;
