import React from "react";

function AllocationForm() {
  return (
    <div className="row   text-center gx-5">
      <div className="col alert alert-secondary input-group mb-3 ">
        <span className="input-group-text">Department </span>{" "}
        <select className="form-select" aria-label="Default select example">
          <option defaultValue>Open this Currency</option>
          <option value="€">Marketing</option>
          <option value="£">Sales</option>
          <option value="$">IT</option>
          <option value="₹">Human Resource</option>
          <option vlaue=" ">Finnance</option>
        </select>
      </div>

      <div className="col alert alert-secondary input-group mb-3 ">
        <span className="input-group-text">Allocation </span>{" "}
        <select className="form-select" aria-label="Default select example">
          <option defaultValue>Add</option>
          <option value="€">Add</option>
        </select>
      </div>

      <div className="col alert alert-secondary input-group mb-3 ">
        <span className="input-group-text">₹</span>{" "}
        <input className="form-control" value="500" />
      </div>

      <div className="col alert alert-secondary input-group mb-3 ">
        <button className="form-control btn btn-primary">Save</button>
      </div>
    </div>
  );
}

export default AllocationForm;
