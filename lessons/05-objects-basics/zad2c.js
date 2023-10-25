const refObj = {
    name: 'Jan',
    surname: 'Kowalski',
    age: 65,
    occupation: 'worker',
    children: ['Sandra', 'Damian', 'Maja'],
    address: {
       street: 'Poznanska',
       homeNumber: '34',
       city: 'Warsaw',
    },
 };

 const clone = structuredClone(refObj);
 