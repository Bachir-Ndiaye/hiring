export class User {
    id: number;
    pseudo : string;
    password : string;

    constructor () {
        const uuid = (new Date()).getTime();
        this.id = uuid || -1;
        this.pseudo = 'SECRET_PSEUDO_' + (uuid ? uuid : '0');
        this.password = 'SECRET_PASSWORD_' + (uuid ? uuid : '0');
    }
    
}