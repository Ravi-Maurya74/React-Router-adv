import React from "react";
import EventForm from "../components/EventForm";
import { json, redirect } from "react-router-dom";

const NewEventPage = () => {
  return <EventForm />;
};

export default NewEventPage;

export async function action({ request }) {
  const data = await request.formData();
  const eventData = {
    title: data.get("title"),
    description: data.get("description"),
    date: data.get("date"),
    image: data.get("image"),
  };
  console.log(eventData);

  const response = await fetch("http://localhost:8080/events", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(eventData),
  });

  if(response.status===422){
    return response;
  }

  if (!response.ok) {
    throw json({ message: "Failed to create event" }, { status: 500 });
  }
  return redirect("/events");
}
