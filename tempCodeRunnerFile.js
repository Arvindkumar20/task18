
const person = {
        name: 'John Doe',
        address: {
                street: '123 Main St',
                city: 'Anytown',
                state: 'CA',
                zip: '12345'
            },
            contact: {
                    phone: '555-555-5555',
                    email: 'johndoe@example.com'
                }
            };
            console.log(person.contact?.phone); // 555-555-5555
            console