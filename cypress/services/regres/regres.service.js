import Rest from './_restRegres.service'


export default class Regres extends Rest {


    static getUsers() {
        const url = '/api/users'
        return super.get(url)

    }
}