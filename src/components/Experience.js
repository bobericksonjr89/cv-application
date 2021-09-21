import React, { useState } from "react";
import uniqid from "uniqid";
import Job from "./Experience-Job";
import "../styles/Experience.css";

const Experience = () => {
  const [jobs, setJobs] = useState([
    {
      company: "Company",
      time: "Time",
      title: "Title",
      description: "Description",
      key: uniqid(),
    },
  ]);

  const handleClick = () => {
    setJobs([
      ...jobs,
      {
        company: "Company",
        time: "Time",
        title: "Title",
        description: "Description",
        key: uniqid(),
      },
    ]);
  };

  const saveJob = (job) => {
    const updatedJobs = jobs.map((oldJob) => {
      if (oldJob.key === job.key) {
        oldJob = job;
      }
      return oldJob;
    });
    setJobs(updatedJobs);
  };

  const deleteJob = (jobKey) => {
    const updatedJobs = jobs.filter((job) => job.key !== jobKey);
    setJobs(updatedJobs);
  };

  const jobComponents = jobs.map((job) => (
    <Job key={job.key} job={job} deleteJob={deleteJob} saveJob={saveJob} />
  ));

  return (
    <div>
      <h3 className="experience__header" onClick={handleClick}>
        Experience
      </h3>
      {jobComponents}
    </div>
  );
};

export default Experience;
