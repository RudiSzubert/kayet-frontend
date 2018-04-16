class FormModalField {
    name: string;
    value: string = '';
    type: string;

    constructor(field: string) {
        this.name = field;
        switch (field) {
            case 'password':
                this.type = 'password';
                break;
            case 'email':
                this.type = 'email';
                break;
            case 'repassword':
                this.type = 'password';
                break;
            default:
                this.type = 'text';
        }
    }
}

export default class UserForm {
    public login: FormModalField = new FormModalField('login');
    public email: FormModalField = new FormModalField('email');
    public password: FormModalField = new FormModalField('password');
    public repassword: FormModalField = new FormModalField('repassword');

    stringify() {
        return JSON.stringify(
            Object.assign({}, {
                login: this.login,
                email: this.email,
                password: this.password
            })
        );
    }
}