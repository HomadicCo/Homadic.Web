import React from 'react';

class DropDownMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: false
        };
    }

    showDropdown(e) {
        e.preventDefault();
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render() {
        let { buttonClass = 'action', customClass, icon, name } = this.props;
        const classDropdownMenu = 'dropdown-menu dropdown-menu-right' + (this.state.isToggleOn ? ' show' : '')

        return (
            <li className={'d-inline nav-item dropdown ' + customClass}>
                <a className={'btn btn-' + buttonClass + ' btn-sm dropdown-toggle'} href="/" id="navbarDropdown" role="button" data-toggle="dropdown"
                    aria-haspopup="true" aria-expanded="false"
                    onClick={(e) => { this.showDropdown(e) }}>
                    {icon} {name}
                </a>
                <div className={classDropdownMenu} aria-labelledby="navbarDropdown">
                    {this.props.children}
                </div>
            </li >
        )
    }
}

export default DropDownMenu;