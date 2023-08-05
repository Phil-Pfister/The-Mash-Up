import { gql } from '@apollo/client';


  

export const QUERY_CHECKOUT = gql`
  query getCheckout($products: [ProductInput]) {
    checkout(products: $products) {
      session
    }
  }
`;

export const QUERY_ALL_PRODUCTS = gql`
  {
    products {
      _id
      name
      description
      price
      quantity
      image
      condition
      seller
      category
      keyword
    }
  }
`;



export const QUERY_USER = gql`
  {
    user {
      username
      email
      firstName
      lastName
      products {
        _id
        name
      }
     
    }
  }
`;
