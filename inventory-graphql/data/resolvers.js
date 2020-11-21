class Activity {
    constructor(id, { name, date, description }) {
        this.id = id
        this.name = name
        this.date = date
        this.description = description
    }
}

class Alert {
    constructor(id, { name, date, description }) {
        this.id = id
        this.name = name
        this.date = date
        this.description = description
    }
}

class Item {
    constructor(id, { name, date, amount, location }) {
        this.id = id
        this.name = name
        this.date = date
        this.amount = amount
        this.location = location
    }
}

class Activity {
    constructor(id, { name, date, description }) {
        this.id = id
        this.name = name
        this.date = date
        this.description = description
    }
}

const rootDb = {}

export const resolvers = {
    Query: {
        getActivity: ({ id }) => {
            return new Activity(id, rootDb[id])
        },
        getActivities: () => {
            return new Activity(rootDb)
        },
        getAlert: ({ id }) => {
            return new Alert(id, rootDb[id])
        },
        getAlerts: () => {
            return new Alerts(rootDb)
        },
        getAItem: ({ id }) => {
            return new Item(id, rootDb[id])
        },
        getItems: () => {
            return new Items(rootDb)
        },
        getUser: ({ id }) => {
            return new User(id, rootDb[id])
        },
        getUsers: () => {
            return new Users(rootDb)
        },
    },
    Mutation: {
        createActivity: ({ input }) => {
            const id = require("crypto").randomBytes(10).toString("hex")
            rootDb[id] = input

            return new Activity(id, input)
        },
        createAlert: ({ input }) => {
            const id = require("crypto").randomBytes(10).toString("hex")
            rootDb[id] = input

            return new Activity(id, input)
        },
        createItem: ({ input }) => {
            const id = require("crypto").randomBytes(10).toString("hex")
            rootDb[id] = input

            return new Activity(id, input)
        },
        createUser: ({ input }) => {
            const id = require("crypto").randomBytes(10).toString("hex")
            rootDb[id] = input

            return new Activity(id, input)
        }
    }
}
