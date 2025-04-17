import { gql } from "@apollo/client";

export const ContactUs = gql`
  mutation CreateContactUs($data: ContactUsInput!) {
    createContactUs(data: $data) {
      message
    }
  }
`;
