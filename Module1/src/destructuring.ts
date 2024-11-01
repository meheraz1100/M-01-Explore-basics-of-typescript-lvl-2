// destructuring

const user = {
  id: 345,
  name: {
    firstName: "Meheraz",
    middleName: "Islam",
    lastName: "Meheraz",
  },
  contactNo: "347384733",
  address: "Uganda",
};

const {
  contactNo,
  name: { middleName },
} = user;


// array destructuring

const myFriends = ['chandler', 'joey', 'ross', 'rachel', 'Monika', 'phoebe']

const [,, bestFriend, ...rest] = myFriends

