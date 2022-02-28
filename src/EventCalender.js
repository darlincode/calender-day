import React, { useState } from "react";
import {Calendar} from 'calendar-base';
import CalendarTitle from './CalenderTitle';
import CalendarDay from './CalenderDay';
import DemoModal from './Modal';
import MaterialIcon from 'material-icons-react';

function EventCalender (props){
        const [currentDate, setCurrentDate] = useState(new Date());
        const [isModalOpen, setIsModalOpen] = useState(false);

        console.log(currentDate);
        let calenderObj = new Calendar({siblingMonths: true, });

        let calendar = calenderObj.getCalendar(currentDate.getFullYear(), currentDate.getMonth());
        let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        return (
            <>
            
                <span > {isModalOpen && <DemoModal isModalOpen ={ isModalOpen } fn = {closeOpenModal}/>}</span>
                {/* <DemoModal isModalOpen ={ isModalOpen } fn = {closeOpenModal}/> */}
            <div className="text-align-center">
                <span style={{cursor:"pointer"}}>
                    <MaterialIcon icon="arrow_back_ios" onClick={() => setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth()-1)))}/>
                </span>
                <span>{currentDate.toLocaleDateString("en-US", options)}</span>
                <span style={{cursor:"pointer"}}>
                    <MaterialIcon icon="arrow_forward_ios" onClick={() => setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth()+1)))}/>
                </span>
            </div>
            <div className="flexContainer">
                {renderDaysOfTheWeek(props)}
                {renderCalendarDays(props, calendar, handleDayClick)}
            </div>
            </>
        );

        function closeOpenModal() {
            setIsModalOpen(false);
        }

        function handleDayClick(target, day) {
            setIsModalOpen(true);
        }
}


function renderCalendarDays(props, calendar, handleDayClick) {
    return calendar.map((day) => day).map((day, index) => {     
        return (
            <CalendarDay 
                key={'day_'+getSerializedDay(day)}
                day={day} 
                onClick={handleDayClick}
                />
            );
    });
}

function getSerializedDay(day) {
    return [day.weekDay, day.day, day.month, day.year].join('');
}




function renderDaysOfTheWeek(props) {
    return (
      props.daysOfTheWeek.map((title, index) => {
        // console.log(title);
          return (
              <CalendarTitle 
                  key={'title_'+ index}
                  title={title} 
              />
          )   
      }));
  }
  
  EventCalender.defaultProps = {
    daysOfTheWeek: [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
    ],
    events: [],
    wrapTitle: true,
    maxEventSlots: 10,
  };
  
export default EventCalender;