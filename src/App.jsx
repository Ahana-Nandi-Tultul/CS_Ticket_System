import Navbar from "./components/Navbar/Navbar";
import CustomerTickets from "./components/CustomerTickets/CustomerTickets";
import TaskStatus from "./components/TaskStatus/TaskStatus";
import { Suspense, useState } from "react";
import { ToastContainer } from 'react-toastify';
import ResolveTask from "./components/ResolveTask/ResolveTask";
import ShowCounts from "./components/ShowCounts/ShowCounts";

const fetchProblemsFunc = async () => {
  const res = await fetch('./problems.json');
  return res.json();
}

const problemsPromise = fetchProblemsFunc();

function App() {

  const [inProgressProblems, setInProgressProblems] = useState([]);
  const [resolveProblems, setresolveProblems] = useState([]);
  const [allProblems, setAllProblems] = useState([]);
  console.log(allProblems);
  return (
    <>
      <Navbar></Navbar>
      <div className="bg-gray-300 py-20 px-4">
        <ShowCounts inProgressProblems = {inProgressProblems}
        resolveProblems = {resolveProblems}></ShowCounts>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1200px] mx-auto">
          <Suspense fallback={<span className="loading loading-ring loading-xl"></span>}>

            <CustomerTickets problemsPromise={problemsPromise}
              inProgressProblems={inProgressProblems}
              setInProgressProblems={setInProgressProblems}
              allProblems={allProblems}
              setAllProblems = {setAllProblems}></CustomerTickets>
          </Suspense>

          <div className="flex flex-col gap-6">
            <TaskStatus inProgressProblems={inProgressProblems}
              setInProgressProblems={setInProgressProblems}
              resolveProblems={resolveProblems}
              setresolveProblems={setresolveProblems}
              allProblems = {allProblems}
              setAllProblems= {setAllProblems}></TaskStatus>

            <ResolveTask resolveProblems={resolveProblems} ></ResolveTask>
          </div>
          <ToastContainer />
        </div>
      </div>
    </>
  )
}

export default App
