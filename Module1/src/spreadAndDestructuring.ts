// spread operator 
// rest operator
// destructuring



// spread operator
const bros1: string[] = ['Mir', 'Firoz', 'Mizan']
const bros2: string[] = ['Tonmoy', 'nahid', 'rahat']


bros1.push(...bros2);


const mentors1 = {
    typeScript: 'Mesba',
    redux: 'Mir',
    dbms: 'Mizan',
}

const mentors2 = {
    prisma: 'Firoz',
    nextjs: 'Tonmoy',
    cloud: 'Nahid'
}


const mentorsList = {
    ...mentors1,
    ...mentors2
}



// /learn rest operator

const greetFriends = (...friends: string[]) => {
    // console.log(`HI ${friend1} ${friend2} ${friend3}` );

    friends.forEach((friend: string): void => console.log(`Hi ${friend}`))
}

greetFriends('Abul', 'Kabul', 'Babul', 'Chagol');
