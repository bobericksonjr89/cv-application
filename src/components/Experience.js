import React from "react";
import uniqid from "uniqid";
import Job from "./Experience-Job";

class Experience extends React.Component {
  constructor() {
    super();

    this.state = {
      jobs: [
        {
          company: "Company",
          time: "Time",
          title: "Title",
          description: "Description",
          key: uniqid(),
        },
      ],
    };
  }

  handleClick = () => {
    this.setState({
      jobs: this.state.jobs.concat([
        {
          company: "Company",
          time: "Time",
          title: "Title",
          description: "Description",
          key: uniqid(),
        },
      ]),
    });
  };

  deleteJob = (e) => {
    const linkID = e.target.dataset.id;
    const updatedJobs = this.state.jobs.filter((job) => job.key !== linkID);
    this.setState({
      jobs: updatedJobs,
    });
  };

  render() {
    const jobs = this.state.jobs.map((job) => (
      <Job key={job.key} job={job} deleteJob={this.deleteJob} />
    ));
    return (
      <div>
        <h3 className="experience__header" onClick={this.handleClick}>
          Experience
        </h3>
        {jobs}
      </div>
    );
  }
}

export default Experience;
