import React from 'react';
import TaskCard from '../TaskCard/TaskCard';

const TaskStatus = ({ inProgressProblems, setInProgressProblems, resolveProblems, setresolveProblems }) => {
    return (
        <div className="md:col-span-1 ">
            <h2 className="text-2xl font-semibold">Task Status</h2>
            <div>
                {
                    inProgressProblems.map(problem => <TaskCard setInProgressProblems={setInProgressProblems}
                        inProgressProblems ={inProgressProblems}
                        key= {problem.id}
                        resolveProblems = {resolveProblems}
                        setresolveProblems ={setresolveProblems}
                         problem = {problem}></TaskCard>)
                }
            </div>
        </div>
    );
};

export default TaskStatus;