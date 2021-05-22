import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function Sidebar() {
    const [value, onChange] = useState(new Date());

    return (
        <div className="container flex justify-center">
            <Calendar
                onChange={onChange}
                value={value}
                locale="uk"
            />
        </div>
    )
}