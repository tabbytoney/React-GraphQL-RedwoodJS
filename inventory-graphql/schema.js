type Item {
    id: ID
    name: String
    date: String
    location: String
    amount: Int
}

type Activity {
    id: ID
    name: String
    date: String
    description: String
}

type Alert {
    id: ID
    name: String
    date: String
    description: String
}

type User {
    id: ID
    name: String
    date: String
    description: String
}

query {
    getItem(id: ID): Item, 
    getItems: [Item],
    getActivities: [Activity],
    getActivity(name: String): Activitiy,
    getAlerts: [Alert].mapgetAlerts,
    getAlert(date: String): Alert,
    getUsers: [Users],
    getUser(id: ID, name: String): User
}

input ItemInput {
    id: ID
    name: String
    date: String
    location: String
    amount: Int
}

input ContentInput {
    id: ID
    name: String
    date: String
    description: String
}

mutation {
    createItem(input: ItemInput): Item,
    createActivity(input: ContentInput): Activity,
    createAlert(input: ContentInput): Alert,
    createUser(input: ContentInput): User
}