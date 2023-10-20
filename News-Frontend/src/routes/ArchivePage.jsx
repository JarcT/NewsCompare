import React from "react";
import axios from "axios";
import { useLoaderData } from "react-router";
import ArchiveWrapper from "../components/ArchiveWrapper";

export const loader = async () => {
  const resp = await axios.get("http://localhost:3000/api/v1/archive");
  const { data } = resp;
  console.log(data);
  return { data };
};

export default function ArchivePage() {
  const { data } = useLoaderData();
  console.log(data);
  return (
    <div>
      <ArchiveWrapper data={data} />
    </div>
  );
}
