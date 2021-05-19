import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function Sidebar() {
    const [value, onChange] = useState(new Date());
    const [isTop, setScroll] = useState(true);
    const [mobileToggle, handleMobileToggle] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            setScroll(window.scrollY < 175)
        })
    })

    return (
        <div className={`container ${isTop ? '' : 'fixed top-32'}`}>
            <Calendar
                onChange={onChange}
                value={value}
                locale="uk"
                />
        </div>
    )
}