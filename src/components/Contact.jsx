import React from "react";
import Header from "./Header";

export default function Contact() {
  return (
    <div className='w-screen h-screen'>
      <Header />
      <div className='h-full'>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2700.8543770869333!2d19.20142501623028!3d47.39527411054455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741ea1714fc153f%3A0x5dc35a30342f24d4!2sBudapest%2C%20Kal%C3%A1sz%20u.%2027a%2C%201188!5e0!3m2!1shu!2shu!4v1672258399474!5m2!1shu!2shu'
          style={{ border: 0 }}
          allowFullScreen=''
          loading='lazy'
          referrerpolicy='no-referrer-when-downgrade'
          className='w-screen h-1/3'
        ></iframe>
      </div>
    </div>
  );
}
