import { Item } from "../entity/item";
export interface ItemTypeRepository{
    getAll(): Item[];
    getByid(id: string): Item;
    create(item: Item): void;
    update(item: Item): void;
    
}