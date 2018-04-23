import * as React from 'react';
import './kayetHeader.css';
import { Navbar, NavItem } from 'react-bootstrap';
// import { Nav, NavDropdown, MenuItem } from 'react-bootstrap';
import { connect } from 'react-redux';

class KayetHeader extends React.Component<any, any> {
    goTo(state: string) {
        this.props.history.push(state);
    }
    render() {
        return (
            <header className="App-header">
                <h1 className="App-title">Kayet Doubleshot Pro</h1><Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <NavItem onClick={() => this.goTo('/login')}>
                            <i className="fa fa-sign-in" /> Login
                        </NavItem>
                        <NavItem onClick={() => this.goTo('/createAccount')}>
                            <i className="fa fa-plus" /> Create Account
                        </NavItem>
                    </Navbar.Brand>
                </Navbar.Header>{/*
                <Nav>
                    <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                        <MenuItem eventKey={3.1}>Action</MenuItem>
                        <MenuItem eventKey={3.2}>Another action</MenuItem>
                        <MenuItem eventKey={3.3}>Something else here</MenuItem>
                        <MenuItem eventKey={3.4}>Separated link</MenuItem>
                    </NavDropdown>
                </Nav>*/}
            </Navbar>;
            </header>
        );
    }
}

export default connect(
    null,
    null
)(KayetHeader);