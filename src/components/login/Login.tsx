import * as React from 'react';
import UserForm from '../../models/UserForm';
import { AppState } from '../../App-state';
import './login.css';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { LoginRequest } from '../../actions/login';

function mapStateToProps(state: AppState) {
    return {
        newUser: state.user || new UserForm()
    };
}

function mapDispatchToProps(dispatch: any) {
    return {
        login: (user: UserForm) => {
            dispatch(new LoginRequest(user));
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
        this.props.login(this.props.newUser);
    }

    public render() {
        return (
            <form onSubmit={e => this.handleSubmit(e)}>
                <div className="col-md-offset-4 col-md-4">
                    <h2>
                        <ControlLabel>Login</ControlLabel>
                    </h2>
                    <FormGroup key="login">
                        <FormControl
                            name="login"
                            type="text"
                            onChange={e => this.handleChange(e)}
                            defaultValue={this.props.newUser.login.value}
                            placeholder="login"
                        />
                    </FormGroup>
                    <FormGroup key="password">
                        <FormControl
                            name="password"
                            type="password"
                            onChange={e => this.handleChange(e)}
                            placeholder="password"
                        />
                    </FormGroup>
                    <Button bsStyle="success" type="submit">Log in</Button>
                </div>
            </form>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CreateAccount);
