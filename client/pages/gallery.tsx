import React, { Component, useState } from "react";
import { useQuery, gql } from '@apollo/client';
import Query from '../components/Query.component';
import MEDIA_QUERY from '../apollo/MediaQuery';
import MediaCard from '../components/MediaCard.component'
import ReactMarkdown from 'react-markdown';
import RecomendationBlock from "../components/RecomendationBlock";
import Calendar from 'react-calendar';

const CONTACTS = gql`
  query Contacts {
    contact {
      title
      content
    }
  }
`;

export default function Gallery() {
  const [value, onChange] = useState(new Date());
  const { loading, error, data } = useQuery(CONTACTS);
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <section className=''>
    <div className="media-content">
        <Query slug query={MEDIA_QUERY()}>
            {({ data }) => {
                return data.mediaArticles.map(Media => {
                        return <div className={`media-bloc`}><MediaCard key={Media.slug} article={Media} /></div>
                })
            }}
        </Query>
    </div>
    </section>
  )
}
