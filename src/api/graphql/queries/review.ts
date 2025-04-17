import { gql } from "@apollo/client";

export const Reviews = gql`
  query Reviews {
    reviews {
      documentId
      message
      user {
        userName
        image {
          url
          alternativeText
        }
        id
      }
    }
  }
`;
