import React from 'react';

const TaskCard = ({problem}) => {
    return (
        <div className="card card-dash bg-base-100 mt-4">
            <div className="card-body">
                <h2 className="card-title">{problem.title}</h2>
                <div className="card-actions ">
                    <button className="btn bg-[#02A53B] text-white p-4
                                w-full mx-auto">Complete</button>
                </div>
            </div>
        </div>
    );
};

export default TaskCard;