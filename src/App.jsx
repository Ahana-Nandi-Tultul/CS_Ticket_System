import Navbar from "./components/Navbar/Navbar";
import CustomerTickets from "./components/CustomerTickets/CustomerTickets";
import TaskStatus from "./components/TaskStatus/TaskStatus";

function App() {

  return (
    <>
      <Navbar></Navbar>
      <div className="bg-gray-300 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1200px] mx-auto">
          <CustomerTickets></CustomerTickets>
          <TaskStatus></TaskStatus>
        </div>
      </div>
    </>
  )
}

export default App
