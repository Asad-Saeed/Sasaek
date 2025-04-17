"use client";
import { FunctionComponent, PropsWithChildren } from "react";
import { ApolloProvider } from "@apollo/client";
import Link from "next/link";
import { client } from "@/api/graphql/client";
const ApploClientProvider: FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default ApploClientProvider;
