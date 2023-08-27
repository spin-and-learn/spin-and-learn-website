import { faker } from '@faker-js/faker'
import moment from 'moment';


export const students = () => {
    const originData = [];
    const status = ["completed", "warning", "error"]
    const school = ["ps1", "ps2", "ps3"]

    for (let i = 0; i < 7; i++) {
        originData.push({
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            school: school[Math.floor(Math.random() * school.length)],
            period: `Jan 1, 23 - Jan 7, 23`,
            date: moment(faker.date.past(0.1)).fromNow()
        })
    }
    return originData
}

