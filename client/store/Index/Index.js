import React from 'react';
import { Link } from 'react-router';
import PlacesTypeahead from '../../Components/PlacesTypeahead/PlacesTypeahead';
import IndexHeader from './components/IndexHeader';
import { labels } from '../../data';

class Index extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const classNames = {
            root: 'form-group index-typeahead',
            input: 'form-control',
            autocompleteContainer: 'results'
        }

        const indexStyles = {
            autocompleteContainer: {
                position: 'absolute',
                top: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                border: '1px solid #555555',
                width: '100%'
            },
            autocompleteItem: {
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                padding: '15px 7px',
                fontFamily: 'Zilla Slab',
                fontSize: '1.2em',
                color: '#fff',
                cursor: 'pointer'
            },
            autocompleteItemActive: {
                backgroundColor: '#fafafa',
                color: '#424242'
            }
        }

        const inputProps = {
            placeholder: 'Where would you like to live?', autoFocus: true
        }

        return (
            <div>
                <IndexHeader {...this.props} />
                <div className="index">
                    <div className="container text-center">
                        <div className="col-12 mb-5 mt-3">
                            <h4>{labels.indexSlogan}</h4>
                        </div>
                        <div className="col-12 my-5">
                            <PlacesTypeahead {...this.props} classNames={classNames} styles={indexStyles} inputProps={inputProps} />
                        </div>
                    </div>
                    <div className="how-it-works">
                        <Link to="#" className="btn btn-sm btn-action"><i className="fas fa-question-circle" /> How Homadic works</Link>
                    </div>
                    <div className="index-bg" /></div>
            </div>
        )
    }
}

export default Index;