import React from "react";
import { Link } from "react-router-dom";

export default function () {
  return (
    <div className='w-screen h-fit lg:h-[30rem]'>
      <div className='bg-sky-300 h-[2px]' />
      <div className='flex flex-col lg:flex-row'>
        <div>
          <p>Icon</p>
          <p>Szöveg</p>
          <a href='https://goo.gl/maps/draWPFcTtiA32M5dA'>
            1188 Budapest, Kalász u. 27a
          </a>
          <a href='tel:06304327752'>+36 60 432 7752</a>
          <a href='mailto:tarjanyicsanad@gmail.com'>tarjanyicsanad@gmail.com</a>
        </div>
        <div>
          <Link to='/'>Főoldal</Link>
          <Link to='/aktualis'>Aktuális</Link>
          <Link to='/magunkrol'>Magunkról</Link>
          <Link to='/programok'>Programok</Link>
          <Link to='/kapcsolat'>Kapcsolat</Link>
        </div>
        <div>
          <p>Keress fel minket a közösségi média oldalainkon is!</p>
          <div
            class='fb-page'
            data-href='https://www.facebook.com/profile.php?id=100088828370701'
            data-width='380'
            data-hide-cover='false'
            data-show-facepile='false'
          />
          <a href='https://www.instagram.com/tarjanyi_csanad/'>
            Kövess minket az Instagram-on!
          </a>
        </div>
        <div>
          <p>
            Ha kérdésed van, vagy bizonytalan vagy valamiben, lépj velünk
            kapcsolatba!
          </p>
          {/* Form */}
        </div>
      </div>
    </div>
  );
}
