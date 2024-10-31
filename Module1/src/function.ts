// Learning function
// Normal function
// Arrow function



function add(num1 : number, num2 : number = 10): number{
    return num1 + num2;
}

add(2, 2)



const addArrow = (num1: number, num2: number) => {
    num1 + num2
}


// object --> function ---> Methods

const poorUser = {
    name: "Meheraz",
    balance: 0,
    addBalance(balance:number): string{
        return `My New Balance is ${this.balance + balance}`;
    }
}



const arr : number[] = [1, 4, 67, 4];


const newArray : number[] = arr.map((elem : number): number => elem*elem)