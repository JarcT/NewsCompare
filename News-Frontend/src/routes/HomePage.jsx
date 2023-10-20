import React from "react";
import { useLoaderData } from "react-router";
import axios from "axios";
import ScreenshotList from "../components/ScreenshotList";

export const loader = async () => {
  const resp = await axios.get("http://localhost:3000/api/v1/newScreenshots");
  const { data } = resp;
  return data;
};

export default function HomePage() {
  const { data } = useLoaderData();
  console.log(data);
  return (
    <>
      <h1 style={{ color: "#242424", marginTop: "3rem" }}>
        Today's frontpages of some news outlets
      </h1>
      <ScreenshotList data={data} />
    </>
  );
}
