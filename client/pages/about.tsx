import React, { Component } from "react";
import { useQuery, gql } from '@apollo/client';
import ReactMarkdown from 'react-markdown';
const ABOUT = gql`
  query About {
    about {
      title
      content
    }
  }
`;

export default function About() {

    const { loading, error, data } = useQuery(ABOUT);
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    return (
        <div className="container mt-4">
            <h1 className="page-title">
                {data.about.title}
            </h1>
            <div className="leading-loose">
                <ReactMarkdown children={data.about.content}></ReactMarkdown>
            </div>
        </div >
    )
}
