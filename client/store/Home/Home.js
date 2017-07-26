import React from 'react';
import { browserHistory } from 'react-router';
import PlacesTypeahead from '../../Components/PlacesTypeahead/PlacesTypeahead';

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
                padding: '20px 10px',
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
            <div className="home">
                <div className="home-bg"></div>
                <div className="container text-center">
                    <div className="col-8 offset-2">
                        <h3>Crowdsourced monthly rentals around the globe.</h3>
                    </div>
                    <div className="col-12">
                        <PlacesTypeahead {...this.props} classNames={classNames} styles={homeStyles} inputProps={inputProps} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;