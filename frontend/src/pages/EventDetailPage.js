import React from "react";
import { json, redirect, useRouteLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem";

const EventDetailPage = () => {
  const data = useRouteLoaderData('eventDetail');
  return <EventItem event={data.event} />;
};

export default EventDetailPage;

export async function loader({ params }) {
  const id = params.id;
  const response = await fetch(`http://localhost:8080/events/${id}`);
  if (!response.ok) {
    throw json({ message: "Failed to fetch event" }, { status: 500 });
  } else {
    return response;
  }
}

export async function action({params,request}){
  const id = params.id;
  const response = await fetch(`http://localhost:8080/events/${id}`, {
    method: request.method,
  });
  if (!response.ok) {
    throw json({ message: "Failed to delete event" }, { status: 500 });
  }
  return redirect('/events');
}
