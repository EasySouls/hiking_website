import React from "react";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <>
      <div className='h-[15%] bg-[url("./assets/header-img.webp")] bg-cover' />
      <Navbar />
    </>
  );
}
