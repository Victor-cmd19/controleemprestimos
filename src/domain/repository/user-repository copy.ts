import { User } from "../entity/user";

export interface UserRepository{
    getAll(): User[];
    getByid(id: string): User;
    getByUserName(nameUsuario: string): User;
    create(user: User): void;
    update(user: User): void;
    
}