import { useLoaderData } from "react-router-dom";

import EventList from "../components/EventsList";

export default function EventsPage() {
  const events = useLoaderData();

  return <EventList events={events} />;
}


export async function loader(){
 const response = await fetch('http://localhost:8080/events');

  if(!response.ok){
        throw new Response(JSON.stringify{ message: 'could not fetch events.'}),
        { status: 500 ,}
  }else{
     return response;
  }
}