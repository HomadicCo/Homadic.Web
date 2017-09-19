import React from 'react';

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

    render() {
        let { selected } = this.props.homes;

        return (
            <h1>{selected.name}</h1>
        )
    }
}

export default Home;