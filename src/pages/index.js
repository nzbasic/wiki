import React, { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    location.href = "/docs";
  });

  return <div></div>;
}
