import React from 'react';
import FontAwesome from 'react-fontawesome';
import LoadingScreen from '../../components/LoadingScreen/LoadingScreen';
import Avatar from '../../Components/Avatar/Avatar';
import RatingBadge from '../../components/RatingBadge/RatingBadge';
import IconsBar from '../../components/IconsBar/IconsBar';
import Amenities from './components/Amenities';
import Internet from './components/Internet';
import Contact from './components/Contact';
import Pricing from './components/Pricing';

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            fetching: true
        };
    }

    componentWillMount() {
        let { handleGetHome, params } = this.props;

        if (params.homeSlug) {
            this.setState({ fetching: true });
            this.props.handleGetHome(params.homeSlug).then(() => {
                this.setState({ fetching: false });
            });
        }
    }

    renderHomeDetails() {
        let { authentication, profile } = this.props;
        let { selected } = this.props.homes;

        return (
            <div>
                <div className="navbar fixed-top bg-white px-3 home-header">
                    <div className="container">
                        <div className="row">
                            <div className="col-auto mr-auto">
                                <h4><strong>{selected.name}</strong> <RatingBadge rating={selected.rating} /></h4>
                                <IconsBar home={selected} className="mb-1" />
                            </div>
                            <div className="col-auto mt-1">
                                <h5 className="blue"><FontAwesome name="thumbs-up" /> <FontAwesome name="thumbs-o-down" /> <span className="btn btn-sm btn-outline-primary mx-1"><FontAwesome name="pencil" /> Edit</span> {authentication.isLoggedIn ? <Avatar size={30} profile={profile.data} /> : undefined}</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container home-content">
                    <Pricing home={selected} />
                    <Amenities home={selected} />
                    <Internet home={selected} />
                    <Contact home={selected} />
                </div>
            </div>
        )
    }

    render() {
        let { homes } = this.props;
        let { fetching } = this.state;

        return (
            <div>
                {fetching ? <LoadingScreen /> : this.renderHomeDetails()}
            </div>
        )
    }
}

export default Home;