import React, { Component } from "react";
import { useQuery, gql } from '@apollo/client';
import ReactMarkdown from 'react-markdown';
import RecomendationBlock from "../components/RecomendationBlock";
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
    <div className="main-page">
      <article className="page px-3 px-lg-0">
        <div className="neumorphism-static-inset flex-column p-4 my-5">
          <h1 className="page-title regular-shadow">
            {data.contact.title}
          </h1>
          <div className="leading-loose">
            <ReactMarkdown children={data.contact.content}></ReactMarkdown>
          </div>
        </div>
      </article>
      <aside className="recomendation">
        <div className="px-3 px-md-0">
          <RecomendationBlock />
        </div>
      </aside>
    </div>
  )
}
