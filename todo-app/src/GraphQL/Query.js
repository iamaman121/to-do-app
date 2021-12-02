import {gql } from '@apollo/client'
const GET_TASK = gql `
query{
    tasks{
      id
      title
      body
      isDone
    }
  }
`;

export {GET_TASK}