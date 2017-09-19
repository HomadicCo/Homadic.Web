import React from 'react';
import FontAwesome from 'react-fontawesome';
import RatingBadge from '../../components/RatingBadge/RatingBadge';

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        let { handleGetHome, params } = this.props;

        if (params.homeSlug) {
            this.props.handleGetHome(params.homeSlug);
        }
    }

    renderHomeDetails() {
        let { selected } = this.props.homes;

        return (
            <div>
                <div className="navbar fixed-top bg-white px-3 home-header">
                    <div className="d-flex justify-content-start">
                        <div>
                            <h3>{selected.name} <RatingBadge rating={selected.rating} /></h3>
                        </div>
                        <div className="ml-auto mt-1">
                            <h4><FontAwesome name="thumbs-o-up" /> <FontAwesome name="thumbs-o-down" /></h4>
                        </div>
                    </div>
                </div>
                <div className="container home-content">
                    <div className="content-header">
                        <h5><FontAwesome name="dollar" /> Monthly Price ({selected.currency})</h5>
                    </div>
                    <div className="m-3">
                        <p><strong>Monthly:</strong> {selected.rental_details.one_month.base_price}</p>
                        <p><strong>3 months:</strong> {selected.rental_details.three_months.base_price}</p>
                        <p><strong>6 months:</strong> {selected.rental_details.six_months.base_price}</p>
                    </div>
                    <div className="content-header">
                        <h5><FontAwesome name="hotel" /> Amenities</h5>
                    </div>
                    <div className="m-3">
                        <p><strong>Monthly:</strong> {selected.rental_details.one_month.base_price}</p>
                        <p><strong>3 months:</strong> {selected.rental_details.three_months.base_price}</p>
                        <p><strong>6 months:</strong> {selected.rental_details.six_months.base_price}</p>
                    </div>
                    <div className="content-header">
                        <h5><FontAwesome name="wifi" /> Internets</h5>
                    </div>
                    <div className="m-3">
                        <div className="row">
                            <div className="col-md-4">
                                <p><FontAwesome name="dollar" /> {selected.wifi.type}</p>
                            </div>
                            <div className="col-md-4">
                                <p><FontAwesome name="download" /> {selected.wifi.download}mbps</p>
                            </div>
                            <div className="col-md-4">
                                <p><FontAwesome name="upload" /> {selected.wifi.upload}mbps</p>
                            </div>
                        </div>
                        <p><strong>Notes:</strong> {selected.wifi.notes}</p>
                    </div>
                    <div className="content-header">
                        <h5><FontAwesome name="map-marker" /> Location</h5>
                    </div>
                    <div className="m-3">
                        <p><strong>Monthly:</strong> {selected.rental_details.one_month.base_price}</p>
                        <p><strong>3 months:</strong> {selected.rental_details.three_months.base_price}</p>
                        <p><strong>6 months:</strong> {selected.rental_details.six_months.base_price}</p>
                    </div>
                </div>
            </div>
        )
    }

    render() {
        let { homes } = this.props;
        console.log(homes);

        return (
            <div>
                {homes.fetching ? <LoadingScreen /> : this.renderHomeDetails()}
            </div>
        )
    }
}

export default Home;