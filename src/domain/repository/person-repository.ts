import { Person } from "../entity/person";

export interface PersonRepository{
    getAll(): Person[];
    getByid(id: string): Person;
    create(person: Person): void;
    update(person: Person): void;
    
}