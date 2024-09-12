import {v4} from 'uuid'; 
import { Itemtype } from './itemType';

export class Item{
    private name: string;
    private id: string;
    private tipoItem: Itemtype
    constructor(name:string, tipoItem: Itemtype, id?: string){
        this.name=name;
        if(!id){
            id=v4();
        }
        this.id=id;
        this.tipoItem =tipoItem;
        
    }
    getName():string{
        return this.name;
    }

    getId():string {
        return this.id;
    }

    getItemType():Itemtype {
        return this.tipoItem;
    }
}

