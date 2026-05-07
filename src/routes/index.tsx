import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  useEffect(() => {
    window.location.replace("/home.html");
  }, []);
  return (
    <div style={{minHeight:"100vh",display:"grid",placeItems:"center",background:"#FDF8F0",fontFamily:"serif",color:"#1A6B3A"}}>
      <p>Loading Pandit Raghunath Prasad Charitable Trust…</p>
    </div>
  );
}
