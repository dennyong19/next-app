'use client'

import { useEffect, useState } from 'react';

export default function Header() {
 
    const [currentTime, setCurrentTime] = useState<string | null>(null);

    useEffect(() => {
      setCurrentTime(new Date().toLocaleTimeString());
      const timer = setInterval(() => {
        setCurrentTime(new Date().toLocaleTimeString());
      }, 1000);
  
      return () => clearInterval(timer);
    }, []);
  
    return (
      <header className="bg-gradient-to-r from- bg-red-500 to-white text-white p-6 mb-6">
        <h1 className="text-3xl font-bold">{currentTime}</h1>
      </header>
    );
}
