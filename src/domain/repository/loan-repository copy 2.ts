import { Loan } from "../entity/loan";

export interface LoanRepository{
    getAll(): Loan[];
    getByid(id: string): Loan;
    create(loan: Loan): void;
    update(loan: Loan): void;
    
}