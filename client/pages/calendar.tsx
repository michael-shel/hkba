import React, { Component, useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";
import ReactMarkdown from "react-markdown";
import RecomendationBlock from "../components/RecomendationBlock";
import Calendar from "react-calendar";

const CH_QUERY = () => {
  return gql`
    query CH_QUERY($date: String!) {
      chCalendars(where: { date: $date }) {
        title
        slug
        date
        reading
        comment
        schedule
      }
    }
  `;
};
export default function ChCalendar() {
  var dateFormat = require("dateformat");
  const [date, change] = useState(new Date());
  const [now, setNow] = useState(String);
  var today = {}
  useEffect(() => {
    var dd = dateFormat(date, "yyyy-mm-dd");
    setNow(dd);
  });

  const { data, loading, error } = useQuery(CH_QUERY(), {
    variables: { date: now },
  });
  if (loading) return <p>Loading ...</p>;
  if (error) return <p>Error: {JSON.stringify(error)}</p>;

  if (data.chCalendars[0]) {
    today = data.chCalendars[0]
  }

  return (
    <div className="m-3 m-md-5 pt-4">
      <div className="neumorphism-static px-3 py-2 fit-content">
        <h1 className="regular-shadow">Літургійний календар</h1>
      </div>
      <div className="d-flex flex-wrap my-5">
        <div className="col-12 col-md-6 p-0 p-md-3 order-2 order-md-1">
          <div className="neumorphism-static-inset p-3 flex-column">
            <h4 className="regular-shadow">Розклад Богослужінь</h4>
            <ReactMarkdown children={today.schedule} />
          </div>
        </div>
        <div className="col-12 col-md-6 px-0 px-lg-5 order-1 order-md-2 mb-3 mb-md-0">
          <Calendar
            onChange={change}
            value={date}
            locale="uk"
            className="ch-calendar"
          />
        </div>
      </div>
      <div className="d-flex flex-wrap my-5">
        <div className="col-12 col-md-6 mb-3 mb-md-0 p-0 p-md-3">
          <div className="neumorphism-static-inset p-3 flex-column">
            <h4 className="regular-shadow">Євангеліє</h4>
            <ReactMarkdown children={today.reading} />
          </div>
        </div>
        <div className="col-12 col-md-6 p-0 p-md-3">
          <div className="neumorphism-static-inset p-3 flex-column">
            <h4 className="regular-shadow">Коментар до Євангелія</h4>
            <ReactMarkdown children={today.comment} />
          </div>
        </div>
      </div>
    </div>
  );
}
