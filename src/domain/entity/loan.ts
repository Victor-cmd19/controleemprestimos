import {v4} from 'uuid'; 
import { Item } from './item';
import { Person} from './person';
import { User } from './user';

export class Loan{
    
    private id: string;
    private loanDate: Date;
    private returnDate: Date | undefined;
    private item: Item;
    private person: Person;
    private user:User;

    constructor(loanDate:Date, item:Item, person: Person, user:User, id?:string, returnDate?:Date){
       
        if(!id){
            id=v4();
        }
        this.id = id;
        this.loanDate = loanDate;
        this.returnDate = returnDate;
        this.item = item;
        this.person = person;
        this.user = user;
    }

    getId():string {
        return this.id;
    }
    getDataEmprestimo():Date{
        return this.loanDate
    }
    getDataDevolucao():Date | undefined{
        return this.returnDate
    }
    getItem():Item{
        return this.item
    }
    getPessoa():Person{
        return this.person
    }

    getUsuario():User{
        return this.user
    }

}
