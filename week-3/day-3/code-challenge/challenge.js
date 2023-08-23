let users = []
class User {
    constructor(firstName, lastName, username, password, email){
        this.firstName = firstName,
        this.lastName = lastName,
        this.username = username,
        this.password = password,
        this.email = email,
        
        this.subscribed = false,
    //  ! the push method below can be used instead of typing out each individual user in a console.log, and will auto-fill every new class that's created //
        users.push(this)
       
    }
        subscribe = () => {   
            if(this.subscribed){
                this.subscribed = false;
                return `${this.username} has unsubscribed`
            } else {
                this.subscribed = true;
                return `Thanks for subscribing!`;
            }
        }
}



let user1 = new User(`Michael`, `Giles`, `mgiles1`, `p@ssword1`, `email1@email.com`)

let user2 = new User(`London`, `Gurrero`, `lgurrero2`, `p@ssword2`, `email2@email.com`)

let user3 = new User(`Jacob`, `Critzman`, `jcritsman3`, `p@ssword3`, `eamail3@email.com`)

let user4 = new User(`Truett`, `Dishman`, `tdishman4`, `p@ssword4`, `eamail4@email.com`)

let user5 = new User(`Bruce`, `Wayne`, `bwyane5`, `p@ssword5`, `eamail5@email.com`)

// let userArr = () => {
//     return [user1, user2, user3, user4, user5]
// }

// console.log(userArr())


const subscribeByName = (arr) => {
    arr.forEach(user => {
        let {firstName} = user;
        firstName = firstName.toLowerCase();
        if(firstName[0] === `s` || firstName.startsWith(`m`) || firstName[0] === `l`){
            user.subscribe()
        }
    });
}
subscribeByName(users)
console.log(users)