import * as React from 'react';
import User from '../../models/User';
import { AppState } from '../../App-state';
import { createAccount } from '../../services/account';
import './createAccount.css';
import { FormGroup, ControlLabel, FormControl, Button, HelpBlock } from 'react-bootstrap';
import { connect } from 'react-redux';

function mapStateToProps(state: AppState) {
    return {
        user: state.user
    };
}

function mapDispatchToProps() {
    return {
        createAccount: createAccount
    };
}

class CreateAccount extends React.Component<User, any> {
    createUser = () => {
        this.props.createAccount();
    }
    public render() {
        return (
            <form onSubmit={this.createUser}>
                <div className="col-md-offset-4 col-md-4">
                    <h2>
                        <ControlLabel>Create Account</ControlLabel>
                    </h2>
                    <FormGroup controlId="formBasicTextlogin">
                        <FormControl
                            value={this.props.user.login}
                            type="text"
                            placeholder="Login"
                        />
                        <FormControl.Feedback/>
                    </FormGroup>
                    <FormGroup controlId="formBasicTextemail">
                        <FormControl
                            value={this.props.user.email}
                            type="email"
                            placeholder="email"
                        />
                        <FormControl.Feedback/>
                    </FormGroup>
                    <FormGroup controlId="formBasicTextpassword">
                        <FormControl
                            value={this.props.user.password}
                            type="password"
                            placeholder="Password"
                        />
                        <FormControl.Feedback/>
                    </FormGroup>
                    <FormGroup controlId="formBasicTextRepeatpassword">
                        <FormControl
                            value={this.props.user.repassword}
                            type="password"
                            placeholder="Repeat password"
                        />
                        <FormControl.Feedback/>
                        <HelpBlock>helpblock</HelpBlock>
                    </FormGroup>
                    <Button bsStyle="success" type="submit">Register</Button>
                </div>
            </form>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CreateAccount);
