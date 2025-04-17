import { gql } from "@apollo/client";

export const FeaturesComp = gql`
  query Features {
    feature {
      features {
        description
        title
        images {
          alternativeText
          url
        }
      }
    }
  }
`;
