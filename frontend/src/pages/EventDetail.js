import { useParams } from "react-router-dom";

function EventDetailPage() {
  const params = useParams();

  return (
    <>
      <h1>EventDetailPage</h1>
      <p>Event ID: {params.eventId}</p>
      <pre>
        <h1>EventDetailPage</h1>
        <p>Event ID: {params.eventId}</p>
      </pre>
    </>
  );
}
export default EventDetailPage;
