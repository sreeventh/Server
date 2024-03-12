const { gql } = require("apollo-server");

const typeDefs = gql`
    type User{
        uid: ID!
        name: String!
        username: String!
        admin: Boolean!
        password: String!
    }

    type Query{
        users: [User!]!
    }


    input SignInput{
        name: String!
        username: String!
        password: String!
    }

    type Mutation{
        newUser(input:SignInput): User!
    }
`

module.exports = { typeDefs };