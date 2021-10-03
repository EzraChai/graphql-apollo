const { gql }  = require('apollo-server')

const typeDefs = gql`

    type User {
        id: ID!
        name: String!
        username: String!
        age: Int!
        nationality: Nationality!
        friends: [User]
        favouriteMovies: [Movie]
    }

    type Movie {
        id: ID!
        name: String!
        yearOfPublication: Int!
        isInTheaters: Boolean!
    }

    type Query {
        users: [User!]!
        user(id: ID!): User
        movies: [Movie!]!
        movie(name: String!): Movie!
    }

    input CreateUserInput {
        name: String!
        username: String!
        age: Int!
        nationality: Nationality = TAIWAN
    }

    input UpdateUsernameInput {
        id: ID!
        username: String!
    }

    input updateNationalityInput {
        id: ID!
        nationality: Nationality!
    }

    type Mutation {
        createUser(input: CreateUserInput!): User!
        updateUsername(input: UpdateUsernameInput!): User
        updateNationality(input: updateNationalityInput!): User
        deleteUser(id: ID!):User
    }


    enum Nationality {
        CANADA
        BRAZIL
        INDIA
        MALAYSIA
        GERMANY
        SINGAPORE
        TAIWAN
        CHILE
    }
`;

module.exports = { typeDefs }