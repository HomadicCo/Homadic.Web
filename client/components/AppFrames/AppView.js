import React from 'react';
import { browserHistory } from 'react-router';
import Header from '../Header/Header';

class AppView extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header />
                {React.cloneElement(this.props.children, this.props)}
            </div>
        )
    }
}

export default AppView;
