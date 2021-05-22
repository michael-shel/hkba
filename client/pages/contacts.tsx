import React, { Component } from "react";
import { useQuery, gql } from '@apollo/client';
import ReactMarkdown from 'react-markdown';
const CONTACTS = gql`
  query Contacts {
    contact {
      title
      content
    }
  }
`;

export default function Contacts() {

    const { loading, error, data } = useQuery(CONTACTS);
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    return (
        <div className="container mt-4">
            <h1 className="page-title">
                {data.contact.title}
            </h1>
            <div className="leading-loose">
                <ReactMarkdown children={data.contact.content}></ReactMarkdown>
            </div>
        </div >
    )
}
