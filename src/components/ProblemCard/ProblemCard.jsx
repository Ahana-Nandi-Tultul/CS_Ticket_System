import React from 'react';
import { GoDotFill } from "react-icons/go";
import { FaRegCalendar } from "react-icons/fa";

const ProblemCard = ({ problem }) => {
    const { id, title, description, status, priority, customer_name, objection_date } = problem;
    return (
        <div className="card card-border bg-base-100">
            <div className="card-body">
                <div className="flex justify-between items-center">
                    <h2 className="card-title">{title}</h2>
                    <button className= {`btn rounded-3xl ${status ==="Open" ? " bg-[#02A53B]": "bg-[#F8F3B9]" }`}><GoDotFill className={`text-2xl ${status ==="Open" ? "text-[#0B5E0]": "text-[#FEBB0C]" }`} />{status}</button>
                </div>
                <p>{description}</p>
                <div className="flex justify-between items-center">
                    <div className="flex justify-between items-center gap-3">
                        <p className="text-gray-800 font-semibold">#{id}</p>
                        <p className={`${(priority === 'Low' || priority == 'Medium') ? "text-yellow-700" : "text-red-600"} `}>{priority} Priority</p>
                    </div>
                    <div className="flex justify-between items-center gap-3">
                        <p className="text-gray-800">{customer_name}</p>
                        <p className="text-gray-800 flex justify-between items-center gap-1"><FaRegCalendar /> <span>{objection_date}</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProblemCard;