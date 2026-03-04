import React from 'react';
import { toast } from 'react-toastify';

const TaskCard = ({problem, inProgressProblems, setInProgressProblems, resolveProblems, setresolveProblems}) => {
    const handleCompleteTask = (p) => {
        const remaining = inProgressProblems.filter(prb => prb.id != p.id);
        setInProgressProblems([]);
        setInProgressProblems([...remaining]);
        setresolveProblems([...resolveProblems, p]);
        toast("Task Resolved")
    }
    return (
        <div className="card card-dash bg-base-100 mt-4">
            <div className="card-body">
                <h2 className="card-title">{problem.title}</h2>
                <div className="card-actions ">
                    <button className="btn bg-[#02A53B] text-white p-4
                                w-full mx-auto" onClick={()=> handleCompleteTask(problem)}>Complete</button>
                </div>
            </div>
        </div>
    );
};

export default TaskCard;