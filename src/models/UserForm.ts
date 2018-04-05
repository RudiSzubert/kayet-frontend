export default class UserForm {
    private login: string;
    private email: string;
    private password: string;
    private repassword: string;
    public getLogin = () => {
        return this.login;
    }
    public setLogin = (login: string) => {
        this.login = login;
    }
    public setPassword = (password: string) => {
        this.password = password;
    }
    public getPassword = () => {
        return this.password;
    }
    public setEmail = (email: string) => {
        this.email = email;
    }
    public getEmail = () => {
        return this.email;
    }
    public getRepass = () => {
        return this.repassword;
    }
    public setRepass = (repassword: string) => {
        this.repassword = repassword;
    }
}