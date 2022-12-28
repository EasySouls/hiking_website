import React from "react";
import NavBtn from "./NavBtn";

export default function Navbar() {
  return (
    <div className='w-screen h-12'>
      <div className='h-[10%] bg-sky-300' />
      <div className='h-[90%] bg-sky-700 flex justify-center items-center gap-2'>
        <NavBtn text='Aktuális' route='/aktualis' />
        <NavBtn text='Magunkról' route='/magunkrol' />
        <NavBtn text='Programok' route='/programok' />
        <NavBtn text='Kapcsolat' route='/kapcsolat' />
      </div>
    </div>
  );
}
