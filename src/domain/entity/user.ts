import {v4} from 'uuid'; 
import { Person } from './person';

export class User{
    private id: string;
    private username: string;
    private senha:string;
    private person: Person;
    constructor( username: string,senha:string, person: Person, id?: string,){
        
        if(!id){
            id=v4();
        }
        this.id = id;
        this.username = username
        this.senha = senha
        this.person = person
    }
    
    getId():string {
        return this.id;
    }
    getNameUsuario():string {
        return this.username;
    }
    getSenha():string {
        return this.senha;
    }
    getPessoa():Person{
        return this.person
    }


}
