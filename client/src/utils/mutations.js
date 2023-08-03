import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_ORDER = gql`
  mutation addOrder($products: [ID]!) {
    addOrder(products: $products) {
      purchaseDate
      products {
        _id
        name
        description
        price
        quantity
        image
        seller
        category
        keyword
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $username: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      username: $username
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_PRODUCT = gql`
  mutation addProduct(
    $name: String!
    $description: String!
    $price: Int
    $quantity: Int!
    $image: String!
    $condition: String!
    $seller: String!
    $category: String!
    $keyword: String!
  ) {
    addProduct(
      name: $name
      description: $description
      price: $price
      quantity: $quantity
      image: $image
      condition: $condition
      seller: $seller
      category: $category
      keyword: $keyword
    ) {
      
      product {
        _id
      }
    }
  }
`;