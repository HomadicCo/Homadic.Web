import React from 'react';
import { Link } from 'react-router';
import { Helmet } from 'react-helmet';
import { getMetaDetails } from '../../functions';
import PlacesTypeahead from '../../Components/PlacesTypeahead/PlacesTypeahead';
import Header from './components/Header';
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

        const metaDetails = getMetaDetails('Crowd sourced monthly home rentals', '')

        return (
            <div>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>{metaDetails.title}</title>
                    <link rel="canonical" href={metaDetails.link} />
                    <meta name="twitter:card" content="summary" />
                    <meta name="twitter:site" content="@homadicco" />
                    <meta property="og:title" content="Homadic" />
                    <meta property="og:description" content="Crowd sourced monthly home rentals." />
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content={metaDetails.link} />
                    <meta property="og:image" content="https://homadicstorage.blob.core.windows.net/icons/icon180.png" />
                </Helmet>
                <Header {...this.props} />
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