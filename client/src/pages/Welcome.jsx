import React, { useState } from "react";
import axios from "axios";
import { useNavigation, Route } from "react-router-dom";
import welcome from "../../public/images/welcome.jpg";

export default function Welcome() {
  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 welcome-page">
       <Login />
      </div>
     
    </>
  );
}
