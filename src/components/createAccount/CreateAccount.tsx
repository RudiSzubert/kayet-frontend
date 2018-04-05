import * as React from 'react';
import UserForm from '../../models/UserForm';
import { AppState } from '../../App-state';
import { createAccount } from '../../services/account';
import './createAccount.css';
import { FormGroup, ControlLabel, FormControl, Button, HelpBlock } from 'react-bootstrap';
import { connect } from 'react-redux';

function mapStateToProps(state: AppState) {
    return {
        newUser: state.user || new UserForm()
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
                    <FormGroup controlId="login">
                        <FormControl
                            onChange={e => this.change(e)}
                            defaultValue={this.props.newUser.getLogin()}
                            type="text"
                            placeholder="Login"
                        />
                        <FormControl.Feedback/>
                    </FormGroup>
                    <FormGroup controlId="email">
                        <FormControl
                            defaultValue={this.props.newUser.getEmail()}
                            type="email"
                            placeholder="email"
                        />
                        <FormControl.Feedback/>
                    </FormGroup>
                    <FormGroup controlId="password">
                        <FormControl
                            type="password"
                            placeholder="Password"
                        />
                        <FormControl.Feedback/>
                    </FormGroup>
                    <FormGroup controlId="repassword">
                        <FormControl
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
