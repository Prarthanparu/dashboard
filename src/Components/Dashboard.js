import React from 'react';
import Income from './Income';
import Boxes from './Boxes';
import IncomeBox from './IncomeBox';
import Charts from './Charts';
function Dashboard() {
    return (
        <>
            <Income/>
            <Boxes/>
            <IncomeBox/>
            <Charts/>
        </>
    )
}

export default Dashboard;

