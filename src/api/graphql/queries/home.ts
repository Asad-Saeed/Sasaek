import { gql } from "@apollo/client";

export const Homecomp = gql`
  query Home {
    home {
      documentId
      title
      createdAt
      updatedAt
      publishedAt
      features {
        id
        title
        description

        images {
          url
          caption
          alternativeText
          name
        }
        icon {
          url
          caption
          alternativeText
        }
      }
      feature_card {
        title
        description
        images {
          url
          alternativeText
        }
        icon {
          url
          alternativeText
        }
      }
    }
  }
`;
