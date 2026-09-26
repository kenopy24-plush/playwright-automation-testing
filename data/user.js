import { generateDOB, generatePhoneNumber } from '../utils/dataGen';

export const user = {
    first: 'John',
    last: 'Doe',
    dob: generateDOB(),
    street: '123 Test Street',
    postal: '47800',
    house_number: '67',
    city: 'Petaling Jaya',
    state: 'Selangor',
    country: 'MY',
    phone: generatePhoneNumber(),
    email: `user8888888@test.com`,
    password: 'Poplo112333##',
    //ALWAYS change the product ID for now
    product_buy: '[data-test="product-01M3E87JECG324Q8XH3AD88H08"]'
};