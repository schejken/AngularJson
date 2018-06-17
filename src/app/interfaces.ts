export interface IEmployee {
    first_name: string;
    last_name: string;
    email: string;
}

export class Employee {
    constructor(
        public first_name: string,
        public last_name: string,
        public email: string
    ) {}
}
