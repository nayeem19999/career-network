import React, { useEffect, useState } from "react";
import { getDataFromLocalStorage } from "../../LocalStorage/LocalStorage";
import { useLoaderData } from "react-router-dom";
import ShowJobs from "./ShowJobs";

const AppliedJobs = () => {
  const values = useLoaderData();
  const [localData, setLocalData] = useState([]);
  useEffect(() => {
    const data = getDataFromLocalStorage();
    const jobsApplied = [];
    for (const dat of data) {
      const final = values.find((value) => dat === value._id);
      jobsApplied.push(final);
    }
    setLocalData(jobsApplied);
  }, []);
  return (
    <div>
        <h1 className='text-center font-bold text-5xl my-10 max-w-7xl mx-auto bg-gradient-to-r from-indigo-600 h-16 flex justify-center items-center'>Applied jobs</h1>
      <div>
        {localData.map((local) => (
          <ShowJobs key={local._id} local={local}></ShowJobs>
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
