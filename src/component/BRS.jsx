import React from "react";

function BRS(props) {
  let [budget, setBudget] = React.useState(props.val.budget);
  console.log(budget);

  const [currency, setCurrency] = React.useState(props.val.currency);
  return (
    <div className="row   text-center gx-5">
      <div className="col alert alert-secondary input-group mb-3 ">
        <span className="input-group-text">Budget: {currency} </span>{" "}
        <input
          type="number"
          className="form-control"
          value={budget}
          onChange={(e) => {
            budgetval = e.target.value;
            setBudget(budgetval);
            props.setval(budget, "budget");
          }}
          require="true"
        />
      </div>

      <div className="col alert alert-warning ">
        <span>
          Spent so far: {currency} {props.val.spent}
        </span>
      </div>

      <div className="col alert alert-success ">
        <span>
          Remaining so far: {currency} {budget - props.val.spent}
        </span>
      </div>

      <div className="col alert alert-danger ">
        <select
          className="form-select"
          aria-label="Default select example"
          onChange={(e) => {
            setCurrency(e.target.value);
            props.setval(currency, "currency");
          }}
        >
          <option defaultValue>Open this Currency</option>
          <option value="€">Euro</option>
          <option value="£">Pound</option>
          <option value="$">Dollar</option>
          <option value="₹">Rupee</option>
        </select>
      </div>
    </div>
  );
}

export default BRS;
//
//<Remaining />
//<Spent />
//<Currency />
