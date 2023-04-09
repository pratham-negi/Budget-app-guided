import React from "react";

function Allocation(props) {
  const [val, setVal] = React.useState(props.val);
  console.log(val);

  function Increase() {
    let carrier = val;
    carrier[0].amount = 111;
    setVal(carrier);
  }

  return (
    <table className="table  table-striped">
      <thead>
        <tr>
          <th scope="col">Department</th>
          <th scope="col">Allocated Budget</th>
          <th scope="col" className="text-center">
            Increase
          </th>
          <th scope="col" className="text-center">
            Decrease
          </th>
          <th scope="col" className="text-center">
            {"  "}
            Remove
          </th>
        </tr>
      </thead>
      <tbody>
        {val.map((item, index) => {
          return (
            <tr key={index} id={index}>
              <th scope="row">{item.name}</th>
              <td>₹ {item.amount}</td>
              <td className="text-center">
                <span
                  className="badge rounded-pill bg-success"
                  onClick={Increase}
                >
                  +
                </span>
              </td>
              <td className="text-center">
                <span className="badge rounded-pill bg-danger">-</span>
              </td>
              <td className="text-center">
                <span className="badge rounded-pill bg-warning">X</span>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Allocation;
// props.setval(index, 10);
