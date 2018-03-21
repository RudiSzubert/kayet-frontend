import * as React from 'react';
import './createAccount.css';
import { FormGroup, ControlLabel, FormControl, Button, HelpBlock } from 'react-bootstrap';

function createUser () {

}

class CreateAccount extends React.Component {
    render() {
        return (
            <form onSubmit={createUser}>
                <div className="col-md-offset-4 col-md-4">
                    <h2>
                        <ControlLabel>Create Account</ControlLabel>
                    </h2>
                    <FormGroup controlId="formBasicTextlogin">
                        <FormControl
                            type="text"
                            placeholder="Login"
                        />
                        <FormControl.Feedback/>
                    </FormGroup>
                    <FormGroup controlId="formBasicTextemail">
                        <FormControl
                            type="email"
                            placeholder="email"
                        />
                        <FormControl.Feedback/>
                    </FormGroup>
                    <FormGroup controlId="formBasicTextpassword">
                        <FormControl
                            type="password"
                            placeholder="Password"
                        />
                        <FormControl.Feedback/>
                    </FormGroup>
                    <FormGroup controlId="formBasicTextRepeatpassword">
                        <FormControl
                            type="password"
                            placeholder="Repeat password"
                        />
                        <FormControl.Feedback/>
                        <HelpBlock>helpblock</HelpBlock>
                    </FormGroup>
                    <Button bsStyle="success">Register</Button>
                </div>
            </form>
        );
    }
}

export default CreateAccount;
