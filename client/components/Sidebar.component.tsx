import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';

export default function Sidebar() {
    const [value, onChange] = useState(new Date());

    return (
        <div className="sidebar-container justify-center">
            <div className="neumorphism-static dayly-blog">
                <h2 className="danger-shadow">14.03</h2>
                <h4 className="regular-shadow">Задушна субота</h4>
                <small>Святому</small>
                <span>1 Сл. 4,13-17;</span>
                <span>Ів. 5,24-30;</span>
                <small>Рядове</small>
                <span>Євр. 10,32-38;</span>
                <span>Мр. 2,14-17;</span>
            </div>

            <div className="neumorphism-footer mt-4 dayly-blog w8 ">
                <h2 className="regular-shadow">Розклад Богослужіння</h2>
                <div className="neumorphism-static-inset p-3 flex-column text-justify">
                    <h5 className="regualar-shadow">Євангеліє від Марка</h5>
                    <span className="font-weight-bold">Мк 2:14-17</span>
                    А коли Він прохо́див, то побачив Левія Алфі́євого, що сидів на ми́тниці, і каже йому: „Іди за Мною!“ Той устав, і пішов услід за Ним.

 15 Коли ж Він сидів при столі в його домі, то багато ми́тників і грішників сиділи з Ісусом та з у́чнями Його; бо було їх багато, і вони ходили за Ним.

 16 Як побачили ж книжники та фарисеї, що Він їсть із грішниками та з ми́тниками, то сказали до учнів Його: „Чому́ то Він їсть із ми́тниками та з грішниками?“

 17 А Ісус, як почув, промовляє до них: „Лікаря не потребують здорові, а слабі. Я не прийшов кликати праведних, але грішників (на покаяння).“
                </div>
            </div>
        </div>
    )
}