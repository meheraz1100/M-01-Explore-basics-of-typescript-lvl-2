{


// type alias

type Student = {
    name: string,
    age: number,
    contactNo?: string,
    gender: string,
    address: string
}



const student1 : Student = {
    name: 'Meheraz',
    age: 23,
    gender: 'male',
    contactNo: '0134234234',
    address: 'Feni'
}

const student2 : Student = {
    name: 'Mir',
    age: 43,
    gender: 'male',
    address: 'dhaka'
};

const student3 : Student = {
    name: 'Mir',
    age: 43,
    gender: 'male',
    address: 'dhaka'
};

// string type alias
type UserName  = string;
type IsAdmin = boolean;

// function type alias
type Add = (num1: number, num2: number) => number

const userName : UserName = 'Meheraz';
const isAdmin : IsAdmin = true;




const add : Add = (num1: number, num2: number): number => num1 + num2;



















}