import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import BRS from "./component/BRS";
import Allocation from "./component/Allocation";
import AllocationForm from "./component/AllocationForm.";

function App() {
  const [initialState, setInitial] = React.useState({
    budget: 1000,
    spent: 1600,
    currency: "€",
  });

  const [AllocationList, setAllocationList] = React.useState([
    { name: "Marketing", amount: 1010 },
    { name: "IT", amount: 290 },
    { name: "Finnance", amount: 200 },
    { name: "Sales", amount: 70 },
    { name: "Human Resource", amount: 30 },
  ]);

  function expenseSetter(index, amount) {
    let carrier = AllocationList;
    carrier[index].amount += amount;

    setAllocationList(carrier);
  }

  function setter(val, type) {
    let carrier = initialState;
    if (type === "budget") {
      carrier.budget = val;
    } else if (type === "spent") {
      carrier.spent = val;
    } else if (type === "currency") {
      carrier.currency = val;
    }

    setInitial(carrier);
    console.log("ttt");
  }

  return (
    <div className="container">
      <h1 className="mt-3">Company's Budget Allocation</h1>

      <BRS val={initialState} setval={setter} />

      <h1 className="mt-3">Allocation</h1>
      <Allocation val={AllocationList} setval={expenseSetter} />
      <h1 className="mt-3">Change Allocation</h1>
      <AllocationForm />
    </div>
  );
}
export default App;
