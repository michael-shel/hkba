/*
 *
 * HomePage
 *
 */
import {
  Link
} from "react-router-dom";
import React, { memo, useState, setState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import pluginId from '../../pluginId';
import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';
// import '../../style/calendar.css';



const HomePage = () => {
  const [value, onChange] = useState(new Date());
  const [list, setList] = useState([]);

  function getList() {
    return fetch('http://localhost:1337/ch-calendars')
      .then(data => data.json())
  }

  function setItem(item) {
   return fetch('http://localhost:1337/ch-calendars', {
     method: 'POST',
     headers: {
       'Content-Type': 'application/json'
     },
     body: JSON.stringify({ item })
   })
     .then(data => data.json())
  }

  useEffect(() => {
    getList()
      .then(items => {
          setList(items)
      })
  }, [])

  return (

    <div className="container calendar-container">
      {/* <h1>{pluginId}&apos;s HomePage</h1> */}
      {/* <Link to={`content-manager/collectionType/application::ch-calendar.ch-calendar/1`}>fsddfsfsd</Link> */}
      <Calendar
                onChange={onChange}
                value={value}
                locale="uk"
            />

            <div className="container">
              <ul>
                {list.map(item =>
                  <li>
                    <Link to={`content-manager/collectionType/application::ch-calendar.ch-calendar/${item.id}`}>{item.title}</Link>
                  </li>
                )}
              </ul>
            </div>
    </div>
  );
};

export default memo(HomePage);
