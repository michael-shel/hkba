import { useQuery, gql } from "@apollo/client";
import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import ReactMarkdown from "react-markdown";
import SingleCalendar from "../apollo/SingleCalendar";
import Query from "./Query.component";
import { Accordion, Button } from "react-bootstrap";
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

export default function DropdownCH() {
  var dateFormat = require("dateformat");
  var now = new Date();
  var date = dateFormat(now, "yyyy-mm-dd");
  var dm = dateFormat(now, "dd.mm");
  const { data, loading, error } = useQuery(CH_QUERY(), {
    variables: { date: date },
  });
  if (loading) return <p>Loading ...</p>;
  if (error) return <p>Error: {JSON.stringify(error)}</p>;

  if (data) {
    var today = data.chCalendars[0];
  }

  return (
    <div className="sidebar-container justify-center">
      <div className="neumorphism-static mx-3 mx-lg-5 mt-5 p-3">
        <Accordion defaultActiveKey="1">
          <Accordion.Toggle
            className="px-3 py-2 collapse-title neumorphism-dynamic-btn regular-shadow my-4 "
            eventKey="1"
          >
            Євангеліє від Марка
          </Accordion.Toggle>

          <Accordion.Collapse eventKey="1">
            <div className="neumorphism-static-inset flex-column px-3 py-2">
              <ReactMarkdown children={today.reading} />
            </div>
          </Accordion.Collapse>
        </Accordion>

        <Accordion defaultActiveKey="1">
          <Accordion.Toggle
            className="px-3 py-2 collapse-title neumorphism-dynamic-btn regular-shadow my-4"
            eventKey="1"
          >
            Коментар до Євангелія
          </Accordion.Toggle>

          <Accordion.Collapse eventKey="1">
            <div className="neumorphism-static-inset flex-column px-3 py-2">
              <ReactMarkdown children={today.comment} />
            </div>
          </Accordion.Collapse>
        </Accordion>
      </div>
    </div>
  );
}
