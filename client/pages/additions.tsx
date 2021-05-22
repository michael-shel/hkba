import React, { Component } from "react";
import { useQuery, gql } from '@apollo/client';
import ReactMarkdown from 'react-markdown';
const ADDITIONS = gql`
  query Additions {
    addition {
      title
      content
    }
  }
`;

export default function Additions() {

    const { loading, error, data } = useQuery(ADDITIONS);
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    return (
        <div className="container mt-4">
            <h1 className="page-title">
                {data.addition.title}
            </h1>
            <div className="leading-loose">
                <ReactMarkdown children={data.addition.content}></ReactMarkdown>
            </div>
        </div >
    )
}
