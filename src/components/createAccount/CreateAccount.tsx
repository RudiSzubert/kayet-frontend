import * as React from 'react';
import UserForm from '../../models/UserForm';
import { AppState } from '../../App-state';
import './createAccount.css';
import { FormGroup, ControlLabel, FormControl, Button, HelpBlock } from 'react-bootstrap';
import { connect } from 'react-redux';
import { CreateAccountRequest } from '../../actions/createAccount';

function mapStateToProps(state: AppState) {
    return {
        newUser: state.user || new UserForm()
    };
}

function mapDispatchToProps(dispatch: any) {
    return {
        createAccount: (user: UserForm) => {
            dispatch(new CreateAccountRequest(user));
        }
    };
}

class CreateAccount extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = this.props.newUser;
    }
    handleChange(event: any) {
        this.props.newUser[event.target.name].value = event.target.value;
        this.setState(this.props.newUser);
    }
    handleSubmit(event: any) {
        event.preventDefault();
        this.props.createAccount(this.props.newUser);
    }
    getValidationState(key: string) {
        if (key) {

        }
    }
        // validate
    public render() {
        const form: Array<JSX.Element> = [];
        for (let key in this.props.newUser) {
            if (this.props.newUser.hasOwnProperty(key)) {
                form.push(
                    <FormGroup key={key} validationState={this.getValidationState(key)}>
                        <FormControl
                            name={this.props.newUser[key].name}
                            type={this.props.newUser[key].type}
                            onChange={e => this.handleChange(e)}
                            defaultValue={this.props.newUser[key].value}
                            placeholder={key}
                        />
                        <FormControl.Feedback/>
                        <HelpBlock>Password doesn't match</HelpBlock>
                    </FormGroup>
                );
            }
        }
        return (
            <form onSubmit={e => this.handleSubmit(e)}>
                <div className="col-md-offset-4 col-md-4">
                    <h2>
                        <ControlLabel>Create Account</ControlLabel>
                    </h2>
                    {form}
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
