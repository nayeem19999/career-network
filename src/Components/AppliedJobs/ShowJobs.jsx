import React from "react";

const ShowJobs = ({ local }) => {
    const {_id} = local

    const handleDelete =(id)=>{
        console.log(id)
    }
  return (
    <div className="max-w-7xl mx-auto mb-10">
      <div className="hero bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={local.image}
            className="max-w-56 h-56 rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">{local.job_title}</h1>
            <p className="py-6">
              {(local.description)}
            </p>
            <div className="flex justify-end">
            <button className="btn btn-error px-10" onClick={()=>handleDelete(_id)}>Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowJobs;
