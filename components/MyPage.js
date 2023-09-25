import React, { useState, useEffect } from 'react';
import { throttle } from "lodash";
import '../css/new.css'

const R095_reactThrottle = () => {
    let throttleFunc = throttle(() => {
        console.log("Throttle API Call");
    }, 1000);

const [currentDate, setCurrentDate] = useState('');
const [currentTime, setCurrentTime] = useState('');

useEffect(() => {
    const updateClock = () => {
    const today = new Date();

    // 날짜와 요일 표시
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const date = today.getDate();
    const day1 = today.getDay();

    const dayNames = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];
    const day2 = dayNames[day1];

    const currentDate = `${year}년 ${month}월 ${date}일 ${day2}`;

      // 시간 표시
        let hrs = today.getHours();
        let mins = today.getMinutes();
        let secs = today.getSeconds();

        let period = "AM";
            if (hrs === 0) {
            hrs = 12;
        } else if (hrs > 12) {
            hrs = hrs - 12;
            period = "PM";
        }

        hrs = (hrs < 10) ? "0" + hrs : hrs;
        mins = (mins < 10) ? "0" + mins : mins;
        secs = (secs < 10) ? "0" + secs : secs;

        const currentTime = `${period} ${hrs} : ${mins} : ${secs}`;

        setCurrentDate(currentDate);
        setCurrentTime(currentTime);
        };

    updateClock();
    const clockInterval = setInterval(updateClock, 1000);

    // 컴포넌트가 언마운트되면 인터벌 제거
    return () => {
        clearInterval(clockInterval);
    };
}, []);


    return (
        <>
        <div className="container">
        <div className="today">
            {currentDate}
        </div>
        <div className="clock">
            {currentTime}
        </div>
        </div>
        <h2>검색어 입력</h2> 
        <input type="text" onChange={throttleFunc} />
        
        </>
    )
    }

export default R095_reactThrottle;
