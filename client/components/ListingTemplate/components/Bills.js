import React from 'react';
import {Link} from 'react-router';

class Bills extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { bills, column, slug } = this.props;

        return (
            <div id="bills" className={column}>
                <div className="content-box">
                    <h3 className="fancy blue">Bills</h3>
                    <hr />
                    {bills.electricity ? <p><i className="fas fa-plug"></i> {bills.electricity}</p> : <p><i className="fas fa-plug"></i> <Link to={'/listing/' + slug + '/bills'}>Add electricity details.</Link></p>}
                    {bills.water ? <p><i className="fas fa-shower"></i> {bills.water}</p> : <p><i className="fas fa-shower"></i> <Link to={'/listing/' + slug + '/bills'}>Add water details.</Link></p>}
                </div>
            </div>
        )
    }
}

export default Bills;
