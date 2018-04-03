import * as React from 'react';
import User from '../../models/User';
import { AppState } from '../../App-state';
import { createAccount } from '../../services/account';
import './createAccount.css';
import { FormGroup, ControlLabel, FormControl, Button, HelpBlock } from 'react-bootstrap';
import { connect } from 'react-redux';

function mapStateToProps(state: AppState) {
    return {
        user: state.user || new User({login: 'beniz'})
    };
}

function mapDispatchToProps() {
    return {
        createAccount: createAccount
    };
}

class CreateAccount extends React.Component<any, any> {
    createUser() {
        console.log(this.props);
    }
    change(event: any) {
        const safeSearchTypeValue: string = event.currentTarget.value;
        this.setState({
            selectedValue: safeSearchTypeValue
        });
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
                            onChange={e => this.change(e)}
                            defaultValue={this.props.user.login}
                            type="text"
                            placeholder="Login"
                        />
                        <FormControl.Feedback/>
                    </FormGroup>
                    <FormGroup controlId="formBasicTextemail">
                        <FormControl
                            defaultValue={this.props.user.email}
                            type="email"
                            placeholder="email"
                        />
                        <FormControl.Feedback/>
                    </FormGroup>
                    <FormGroup controlId="formBasicTextpassword">
                        <FormControl
                            defaultValue={this.props.user.password}
                            type="password"
                            placeholder="Password"
                        />
                        <FormControl.Feedback/>
                    </FormGroup>
                    <FormGroup controlId="formBasicTextRepeatpassword">
                        <FormControl
                            defaultValue={this.props.user.repassword}
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
