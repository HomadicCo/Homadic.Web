import React from 'react';
import { browserHistory, Link } from 'react-router';
import FontAwesome from 'react-fontawesome';
import PlacesTypeahead from '../../Components/PlacesTypeahead/PlacesTypeahead';
import IndexHeader from './components/IndexHeader';

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const classNames = {
            root: 'form-group home-typeahead',
            input: 'form-control',
            autocompleteContainer: 'results'
        }

        const homeStyles = {
            autocompleteContainer: {
                position: 'absolute',
                top: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                border: '1px solid #555555',
                width: '100%',
            },
            autocompleteItem: {
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                padding: '15px 7px',
                fontFamily: 'Sanchez',
                fontSize: '1.2em',
                color: '#fff',
                cursor: 'pointer',
            },
            autocompleteItemActive: {
                backgroundColor: '#fafafa',
                color: '#424242'
            }
        }

        const inputProps = {
            placeholder: "Where would you like to live?",
            autoFocus: true
        }

        return (
            <div>
                <IndexHeader {...this.props} />
                <div className="home">
                    <div className="container text-center">
                        <div className="col-12 mb-5 mt-3">
                            <h4>Crowdsourced monthly rentals around the globe - a slow traveller's best friend.</h4>
                        </div>
                        <div className="col-12 my-5">
                            <PlacesTypeahead {...this.props} classNames={classNames} styles={homeStyles} inputProps={inputProps} />
                        </div>
                        <div className="col-12 my-5">
                            <Link to={{
                                pathname: '/home/0',
                                state: { modal: true, returnTo: this.props.location.pathname }
                            }}>
                                Link to fake home
                            </Link>
                        </div>
                    </div>
                    <div className="how-it-works">
                        <Link to="https://nickbrooks.co/" target="_blank" className="btn btn-sm btn-action"><FontAwesome name="question-circle" /> How Homadic works</Link>
                    </div>
                    <div className="home-bg"></div>
                </div>
            </div>
        )
    }
}

export default Home;