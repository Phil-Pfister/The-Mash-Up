const { gql } = require('apollo-server-express');

const typeDefs = gql`
 

  type Product {
    _id: ID
    name: String
    description: String
    price: Float
    quantity: Int
    image: String
    condition: String
    seller: String
    category: String
    keyword: [String]
    
  }
    

  type Order {
    _id: ID
    purchaseDate: String
    products: [Product]
  }

  type User {
    _id: ID
    username: String
    email: String
    products: [Product]
    orders: [Order]
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    
    products: [Product]
    product(_id: ID!): Product
    user: User
    order(_id: ID!): Order
  }

  type Mutation {
    addUser(
      username: String!
      email: String!
      password: String!
    ): Auth
    addOrder(products: [ID]!): Order
    updateUser(
      username: String
      email: String
      password: String
    ): User
    updateProduct(_id: ID!, quantity: Int!, seller: String): Product
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
