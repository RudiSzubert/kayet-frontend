import * as React from 'react';
import './kayetHeader.css';
import { Navbar, Nav, NavDropdown, NavItem, MenuItem } from 'react-bootstrap';
import { connect } from 'react-redux';

class KayetHeader extends React.Component<any, any> {
    handleChange() {
        this.props.history.push('/createAccount');
    }
    render() {
        return (
            <header className="App-header">
                <h1 className="App-title">Kayet Doubleshot Pro</h1><Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#home"><i className="fa fa-download" />Login</a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    <NavItem eventKey={1} href="#">
                        Link
                    </NavItem>
                    <NavItem eventKey={2} href="#">
                        Link
                    </NavItem>
                    <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                        <MenuItem onClick={e => this.handleChange()} eventKey={3.1}>Action</MenuItem>
                        <MenuItem eventKey={3.2}>Another action</MenuItem>
                        <MenuItem eventKey={3.3}>Something else here</MenuItem>
                        <MenuItem eventKey={3.4}>Separated link</MenuItem>
                    </NavDropdown>
                </Nav>
            </Navbar>;
            </header>
        );
    }
}

export default connect(
    null,
    null
)(KayetHeader);