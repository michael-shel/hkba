import React, { Component, useState } from "react";
import { useQuery, gql } from '@apollo/client';
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

export default function ChCalendar() {
  const [value, onChange] = useState(new Date());
  const { loading, error, data } = useQuery(CONTACTS);
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <div className="m-3 m-md-5 pt-4">
      <div className="neumorphism-static px-3 py-2 fit-content">
        <h1 className="regular-shadow">Літургійний календар</h1>
      </div>
      <div className="d-flex flex-wrap my-5">
        <div className="col-12 col-md-6 p-0 p-md-3 order-2 order-md-1">
          <div className="neumorphism-static-inset p-3 flex-column">
              <h4 className="regular-shadow">Розклад Богослужінь</h4>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui fugit nam obcaecati iusto ab tenetur alias dicta quia nisi, dignissimos, perspiciatis magnam quidem repudiandae quasi atque dolorum maiores asperiores veniam?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui fugit nam obcaecati iusto ab tenetur alias dicta quia nisi, dignissimos, perspiciatis magnam quidem repudiandae quasi atque dolorum maiores asperiores veniam?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui fugit nam obcaecati iusto ab tenetur alias dicta quia nisi, dignissimos, perspiciatis magnam quidem repudiandae quasi atque dolorum maiores asperiores veniam?
          </div>
        </div>
        <div className="col-12 col-md-6 px-0 px-lg-5 order-1 order-md-2 mb-3 mb-md-0">
          <Calendar
                onChange={onChange}
                value={value}
                locale="uk"
                className="ch-calendar"
            />
        </div>
      </div>
      <div className="d-flex flex-wrap my-5">
        <div className="col-12 col-md-6 mb-3 mb-md-0 p-0 p-md-3">
          <div className="neumorphism-static-inset p-3 flex-column">
              <h4 className="regular-shadow">Євангеліє</h4>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui fugit nam obcaecati iusto ab tenetur alias dicta quia nisi, dignissimos, perspiciatis magnam quidem repudiandae quasi atque dolorum maiores asperiores veniam?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui fugit nam obcaecati iusto ab tenetur alias dicta quia nisi, dignissimos, perspiciatis magnam quidem repudiandae quasi atque dolorum maiores asperiores veniam?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui fugit nam obcaecati iusto ab tenetur alias dicta quia nisi, dignissimos, perspiciatis magnam quidem repudiandae quasi atque dolorum maiores asperiores veniam?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui fugit nam obcaecati iusto ab tenetur alias dicta quia nisi, dignissimos, perspiciatis magnam quidem repudiandae quasi atque dolorum maiores asperiores veniam?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui fugit nam obcaecati iusto ab tenetur alias dicta quia nisi, dignissimos, perspiciatis magnam quidem repudiandae quasi atque dolorum maiores asperiores veniam?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui fugit nam obcaecati iusto ab tenetur alias dicta quia nisi, dignissimos, perspiciatis magnam quidem repudiandae quasi atque dolorum maiores asperiores veniam?
          </div>
        </div>
        <div className="col-12 col-md-6 p-0 p-md-3">
          <div className="neumorphism-static-inset p-3 flex-column">
              <h4 className="regular-shadow">Коментар до Євангелія</h4>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui fugit nam obcaecati iusto ab tenetur alias dicta quia nisi, dignissimos, perspiciatis magnam quidem repudiandae quasi atque dolorum maiores asperiores veniam?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui fugit nam obcaecati iusto ab tenetur alias dicta quia nisi, dignissimos, perspiciatis magnam quidem repudiandae quasi atque dolorum maiores asperiores veniam?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui fugit nam obcaecati iusto ab tenetur alias dicta quia nisi, dignissimos, perspiciatis magnam quidem repudiandae quasi atque dolorum maiores asperiores veniam?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui fugit nam obcaecati iusto ab tenetur alias dicta quia nisi, dignissimos, perspiciatis magnam quidem repudiandae quasi atque dolorum maiores asperiores veniam?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui fugit nam obcaecati iusto ab tenetur alias dicta quia nisi, dignissimos, perspiciatis magnam quidem repudiandae quasi atque dolorum maiores asperiores veniam?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui fugit nam obcaecati iusto ab tenetur alias dicta quia nisi, dignissimos, perspiciatis magnam quidem repudiandae quasi atque dolorum maiores asperiores veniam?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui fugit nam obcaecati iusto ab tenetur alias dicta quia nisi, dignissimos, perspiciatis magnam quidem repudiandae quasi atque dolorum maiores asperiores veniam?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui fugit nam obcaecati iusto ab tenetur alias dicta quia nisi, dignissimos, perspiciatis magnam quidem repudiandae quasi atque dolorum maiores asperiores veniam?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui fugit nam obcaecati iusto ab tenetur alias dicta quia nisi, dignissimos, perspiciatis magnam quidem repudiandae quasi atque dolorum maiores asperiores veniam?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui fugit nam obcaecati iusto ab tenetur alias dicta quia nisi, dignissimos, perspiciatis magnam quidem repudiandae quasi atque dolorum maiores asperiores veniam?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui fugit nam obcaecati iusto ab tenetur alias dicta quia nisi, dignissimos, perspiciatis magnam quidem repudiandae quasi atque dolorum maiores asperiores veniam?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui fugit nam obcaecati iusto ab tenetur alias dicta quia nisi, dignissimos, perspiciatis magnam quidem repudiandae quasi atque dolorum maiores asperiores veniam?
          </div>
        </div>
      </div>
    </div>
  )
}
