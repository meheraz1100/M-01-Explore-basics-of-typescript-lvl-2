{

// Union Types

// type FrontendDeveloper = 'fakibazDeveloper' | 'juniorDeveloper'
// type FullstackDeveloper = 'frontendDeveloper' | 'expertDeveloper'

// type Developer = FrontendDeveloper | FullstackDeveloper


// const newDeveloper : FrontendDeveloper = 'juniorDeveloper'

// type User = {
//     name: string,
//     email: string,
//     gender: 'male' | 'female',
//     bloodGroup: 'O+' | 'A+' | 'A-' | 'AB+'
// }

// const user1: User = {
//     name: 'Meheraz',
//     email: 'mosaiyebmeheraz@gmail.com',
//     gender: 'male',
//     bloodGroup: 'A+'
// }

type FrontendDeveloper = {
    skills: string[];
    designation1: 'Frontend Developer'
}

type BackendDeveloper = {
    skills: string[];
    designation2: 'Backtend Developer'
}

// Intersection

type FullStackDeveloper = FrontendDeveloper & BackendDeveloper

const fullstackDeveloper : FullStackDeveloper = {
    skills: ['HTML', 'CSS', 'Express'],
    designation1: 'Frontend Developer',
    designation2: 'Backtend Developer'
}

}