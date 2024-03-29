//feels like thats a LOT of vars for a "secure" system lol 
var hashed = {
    'test_user1' : 'vqntEjWGio2yhR3wN/0QmF8xEnPBo4jya4wS5c39n8/pyrx0Z1VlRDAVe1vw0MQhw35EwartPhjgIodpNEIIVA=='
}
const salt = "oOcCVsMWUqBD5W38RGPl8g="
var current_data = '';
var current_password = '';
var current_username = '';
var cwd = '';

function login(user = '') {
    if (user === ''){
        this.read("Enter username : ").then(input_username => {
        var userExists = input_username in hashed;
        if (userExists) {
            current_username = input_username
            this.echo(user_found);
            this.read("Enter password : ").then(input_password => {
            if (CryptoJS.PBKDF2(input_password, salt, {keySize: 512 / 32,iterations: 1000}).toString(CryptoJS.enc.Base64) === hashed[input_username]) {
                console.log(password_matched);
                current_password = input_password;
                current_data = JSON.parse(decryptAES(window[current_username],current_password));
                cwd = "/"+current_username;
                input_password = '';
                input_username = '';
                this.echo(logged_in);
            } else {
                this.echo(password_incorret);
                this.echo(login_aborted);
            }})
        } else {
            this.echo(user_not_found);
            this.echo(login_aborted)
        }})
    } else if (user === current_username) {
        this.echo('Logged in as same user : '+current_username)
    } else if (user in hashed) {
        current_username = user
        this.echo(user_found);
        this.read("Enter password : ").then(input_password => {
        if (CryptoJS.PBKDF2(input_password, salt, {keySize: 512 / 32,iterations: 1000}).toString(CryptoJS.enc.Base64) === hashed[user]) {
            this.echo(password_matched);
            current_password = input_password;
            current_data = JSON.parse(decryptAES(window[current_username],current_password));
            cwd = "/"+current_username;
            input_password = '';
            input_username = '';
            this.echo(logged_in);
        } else {
            this.echo(password_incorret);
            this.echo(login_aborted);
        }})
    } else {
        this.echo(user_not_found);
        this.echo(login_aborted);
    }
}

function su(input_un2) {
    login(user = input_un2)
}