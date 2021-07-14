import React, { Component } from "react";
import { useQuery, gql } from '@apollo/client';
import ReactMarkdown from 'react-markdown';
import RecomendationBlock from "../components/RecomendationBlock";
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
      <div className="main-page">
      <article className="page px-3 px-lg-0">
      <div className="neumorphism-static-inset flex-column p-4 my-5">
        <h1 className="page-title regular-shadow">
        {data.about.title}
          </h1>
          <div className="leading-loose">
              <ReactMarkdown children={data.about.content}></ReactMarkdown>
          </div>
      </div>
      </article>
      <aside className="recomendation">
      <div className="px-3 px-md-0">
        <RecomendationBlock/>
      </div>
      </aside>
    </div>
    )
}
