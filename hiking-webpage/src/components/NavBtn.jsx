import React from "react";
import { useNavigate } from "react-router-dom";

export default function NavBtn({ route, text }) {
  const navigate = useNavigate();

  function handleClick() {
    navigate(route);
  }

  return (
    <button
      className='w-fit h-full px-2 lg:px-4 2xl:px-6 text-white text-center uppercase hover:bg-sky-500'
      onClick={handleClick}
    >
      {text}
    </button>
  );
}
