import { gql } from "@apollo/client";

export const AboutUs = gql`
  query AboutUs {
    aboutUs {
      documentId
      title
      description
      features {
        title
        images {
          url
          publishedAt
          name
          id
          caption
          alternativeText
        }
        id
        description
      }
      createdAt
      updatedAt
      publishedAt
    }
  }
`;
