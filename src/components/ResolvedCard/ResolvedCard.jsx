import React from 'react';

const ResolvedCard = ({prb}) => {
    return (
        <div className="card card-dash bg-[#E0E7FF] mt-4">
                    <div className="card-body">
                        <h2 className="card-title">{prb.title}</h2>
                    </div>
                </div>
    );
};

export default ResolvedCard;