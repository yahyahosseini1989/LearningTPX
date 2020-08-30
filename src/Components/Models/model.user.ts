export interface IUser{
    id?: string;
    age: number;
    eyeColor: string;
    name?: {
    first: string;
    last: string;
    };
    address: string;
    tags?: Array<string>;
}