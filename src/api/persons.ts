let persons = [
  {
    id: 1,
    isopened: false,
    employee: "Anna Cruickshank",
    registeredDate: "March 18, 2020",
    registeredDay: "Sunday",
    ranking: "4.0",
    status: "On project",
    statusColor: "bg-blue-500",
    statusTextColor: "text-blue-500",
    transaction: "ARB-2560",
    division: "Marketing",
    location: "New York, NY",
    progress: "100%",
    score: "32,127",
    email: "jane.cooper@example.com",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    id: 2,
    isopened: true,
    employee: "Providenci Alten",
    email: "Alten@address.com",
    registeredDate: "February 14, 2020",
    registeredDay: "Friday",
    ranking: "3.5",
    status: "Available",
    statusColor: "bg-green-500",
    statusTextColor: "text-green-500",
    transaction: "ARB-8947",
    division: "Sales",
    location: "Chicago, IL",
    progress: "98%",
    score: "15,384",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    id: 3,
    isopened: false,
    employee: "Fred Oberbrunner",
    email: "Oberbrunner@mail.com",
    registeredDate: "May 20, 2002",
    registeredDay: "Tuesday",
    ranking: "5.0",
    status: "Available",
    statusColor: "bg-green-500",
    statusTextColor: "text-green-500",
    transaction: "xyz-0024",
    division: "Design",
    location: "New York, NY",
    progress: "91%",
    score: "10,862",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    id: 4,
    isopened: false,
    employee: "Harrison P.",
    email: "harry@address.com",
    registeredDate: "April 32, 2056",
    registeredDay: "Tuesday",
    ranking: "5.0",
    status: "No project",
    statusColor: "bg-green-500",
    statusTextColor: "text-yellow-500",
    transaction: "xyz-0048",
    division: "Shit Management",
    location: "Mytischi, MO",
    progress: "89%",
    score: "8,904",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    id: 5,
    isopened: false,
    employee: "Andrej Ostopenka",
    email: "a_ostap@sexproduct.com",
    registeredDate: "December 4, 2020",
    registeredDay: "Tuesday",
    ranking: "3.5",
    status: "No project",
    statusColor: "bg-green-500",
    statusTextColor: "text-yellow-500",
    transaction: "BITKA-550",
    division: "Development",
    location: "Boston, MA",
    progress: "97%",
    score: "3,561",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    id: 6,
    isopened: false,
    employee: "Rose Satter",
    email: "satter@address.com",
    registeredDate: "October 11, 2017",
    registeredDay: "Tuesday",
    ranking: "5.0",
    status: "On project",
    statusColor: "bg-blue-500",
    statusTextColor: "text-yellow-500",
    transaction: "ARB-0110",
    division: "Techical Support",
    location: "Arbat, MO",
    progress: "98%",
    score: "96",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
];

export const getPersons = () => {
  return new Promise((resolve, reject) => {
    resolve({ data: persons });
  });
};

export const addPerson = (person: any) => {
  return new Promise((resolve, reject) => {
    persons = persons.concat(person);
    resolve({ ...person, id: persons.length + 1 });
  });
};

export const editPerson = (payload: any) => {
  return new Promise((resolve, reject) => {
    persons = persons.map((person) => {
      return person.id === payload.id ? { ...person, ...payload } : person;
    });
    resolve(persons);
  });
};

// export const getAllTransactions = (account) => {
//   return new Promise((resolve, reject) => {
//     if (account === undefined) {
//       resolve(transactions);
//     } else {
//       let data = transactions.filter(
//         (transaction) =>
//           transaction.particular.toAc === account ||
//           transaction.particular.fromAc === account
//       );
//       resolve(data);
//     }
//   });
// };

// export const createTransaction = (transaction) => {
//   return new Promise((resolve, reject) => {
//     transaction.id = transactions.length + 1;
//     transactions = transactions.concat(transaction);
//     resolve(transaction);
//   });
// };
