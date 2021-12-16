/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getFood = /* GraphQL */ `
  query GetFood($id: ID!) {
    getFood(id: $id) {
      id
      name
      description
      price
      img
      type
      createdAt
      updatedAt
    }
  }
`;
export const listFoods = /* GraphQL */ `
  query ListFoods(
    $filter: ModelFoodFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFoods(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        price
        img
        type
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
