import React, { useEffect, useState } from 'react'
import logoZen from '/assets/logoZen.png'


export default function LoadingIndicator() {

  return (
    <div className="min-h-screen w-full">
      <div className="">
        <div className="bg-primary absolute w-[50%] h-full animate-loading-start-left" />

        <div className="bg-primary absolute w-[50%] right-0 h-full animate-loading-start-right" />
      </div>

      <div className="flex flex-col items-center justify-center h-screen">
        <img src={logoZen} className="w-[300px] animate-bounce  rounded-3xl" />
        {/* <p className="text-white font-semibold text-4xl animate-fade-in">Organizando...</p> */}
      </div>

    </div>
  )

}
