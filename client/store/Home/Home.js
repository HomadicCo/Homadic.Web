import React from 'react';
import { browserHistory, } from 'react-router';
import ListingTemplate from '../../components/ListingTemplate/ListingTemplate';

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        let { params, setLoadingStatus } = this.props;

        if (params.homeSlug) {
            setLoadingStatus(true);
            this.props.handleGetHome(params.homeSlug).then(() => {
                setLoadingStatus(false);
            });
        } else {
            browserHistory.push('/');
        }
    }

    render() {
        let { homes } = this.props;

        return (
            <ListingTemplate listing={homes.selected} previewMode={false} {...this.props} />
        )
    }
}

export default Home;