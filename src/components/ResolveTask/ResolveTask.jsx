import React from 'react';
import ResolvedCard from '../ResolvedCard/ResolvedCard';

const ResolveTask = ({resolveProblems}) => {
    return (
        <div className="md:col-span-1 ">
            <h2 className="text-2xl font-semibold">Resolved Task</h2>
            <div>
            {
                resolveProblems.map(prb => <ResolvedCard
                prb = {prb}
                key={prb.id}
                ></ResolvedCard>)
            }
            </div>
        </div>
    );
};

export default ResolveTask;