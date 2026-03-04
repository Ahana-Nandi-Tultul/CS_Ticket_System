import React, { use } from 'react';
import ProblemCard from '../ProblemCard/ProblemCard';


const CustomerTickets = ({problemsPromise, inProgressProblems, setInProgressProblems}) => {
    const problems = use(problemsPromise);
    // console.log(problems);
    return (
        <div className="md:col-span-2">
            <h2 className="text-2xl font-semibold">Customer Tickets</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
              {
                problems.map(problem => <ProblemCard problem={problem} 
                    inProgressProblems = {inProgressProblems}
                    setInProgressProblems = {setInProgressProblems}
                    key={problem.id}></ProblemCard>)
              }
            </div>
          </div>
    );
};

export default CustomerTickets;