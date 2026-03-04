import React from 'react';

const ProblemCard = () => {
    return (
        <div className="card card-border bg-base-100">
                <div className="card-body">
                  <div className="flex justify-between items-center">
                     <h2 className="card-title">Login Issues - Can't Access Account</h2>
                     <button className="btn rounded-3xl bg-[#02A53B]"><GoDotFill className="text-[#0B5E0] text-2xl" />Open</button>
                  </div>
                  <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                  <div className="flex justify-between items-center">
                    <div className="flex justify-between items-center gap-3">
                        <p className="text-gray-800 font-semibold">#1001</p>
                        <p className="text-red-600">HIGH PRIORITY</p>
                    </div>
                    <div className="flex justify-between items-center gap-3">
                        <p className="text-gray-800">John Smith</p>
                        <p className="text-gray-800 flex justify-between items-center gap-0"><FaRegCalendar /> <span>1/15/2024</span></p>
                    </div>
                  </div>
                </div>
              </div>
    );
};

export default ProblemCard;