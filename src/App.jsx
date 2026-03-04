import Navbar from "./components/Navbar/Navbar";
import CustomerTickets from "./components/CustomerTickets/CustomerTickets";
import TaskStatus from "./components/TaskStatus/TaskStatus";
import { Suspense } from "react";

const fetchProblemsFunc = async () => {
  const res = await fetch('./problems.json');
  return res.json();
}

const problemsPromise = fetchProblemsFunc();

function App() {

  return (
    <>
      <Navbar></Navbar>
      <div className="bg-gray-300 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1200px] mx-auto">
          <Suspense fallback={<span className="loading loading-ring loading-xl"></span>}>

            <CustomerTickets problemsPromise={problemsPromise} ></CustomerTickets>
          </Suspense>
          <TaskStatus></TaskStatus>
        </div>
      </div>
    </>
  )
}

export default App
