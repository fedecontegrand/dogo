export interface User {
    id:string;
    firstName:string;
    lastName:string;
    admin:boolean;
    nickname:string;
    email:string;
    picture:string;
    street:string;
    city:string;
    state:string;
}

export interface UserAuth0{
    email:string | undefined;
    family_name:string | undefined;
    given_name:string | undefined;
    name:string | undefined;
    nickname:string | undefined;
    picture:string | undefined;
    sub:string | undefined;
}