import React from 'react';
import classnames from 'classnames';
import { Calendar } from 'calendar-base';
const CalendarDay = ({day, onClick}) => {

    let today=new Date();
    const isNotActive = new Date(
        `${today.getFullYear()}/${today.getMonth()+1}/${today.getDate()}`
        ) > new Date(
        `${day.year}/${day.month+1}/${day.day}`
        );

    const dayClasses = classnames({
        'flexColumn': true,
        'day': true,
        'inactive': isNotActive,
        'today': Calendar.interval({
            day: day.day, 
            month: day.month, 
            year: day.year
        }, {
            day: today.getDate(),
            month: today.getMonth(),
            year: today.getFullYear(),
        }) === 1
    });
    return (
        <div 
            onClick={isNotActive?()=>{}:onClick.bind(null, this, day) }
            style={isNotActive?{}:{cursor:"pointer"}}
            className={dayClasses}
            >
            <div className="inner-grid" style={{padding: "20px 20px"}}>
                <div className="date">
                    {day.day}
                </div>
            </div>
        </div>
    );
}
export default CalendarDay;