"use client";

import { useState, useRef } from "react";
import { popConfetti } from "./confetti";

export default function Home() {
  const [message, setMessage] = useState("-");
  const [isConnected, setIsConnected] = useState(false);
  const sourceRef = useRef<EventSource | null>(null);

  const connect = () => {
    const source = new EventSource("/numbers?s=20");
    sourceRef.current = source;
    setIsConnected(true);

    source.onmessage = (event) => {
      setMessage(event.data);
      const num = parseInt(event.data);
      popConfetti(num);
    };

    source.onerror = (error) => {
      console.error("EventSource error:", error);
      source.close();
      sourceRef.current = null;
      setIsConnected(false);
      setMessage("-");
    };
  };

  const disconnect = () => {
    if (sourceRef.current) {
      sourceRef.current.close();
      sourceRef.current = null;
    }
    setIsConnected(false);
  };

  const handleConnection = () => {
    if (isConnected) {
      disconnect();
    } else {
      connect();
    }
  };

  return (
    <div className="flex flex-col  gap-4 items-center justify-center min-h-screen">
      <div className="text-3xl px-8 py-4 bg-zinc-800 rounded-md text-white">
        {message}
      </div>
      <button
        className={`px-8 py-4 font-semibold rounded-lg transition-colors ${
          isConnected
            ? "bg-gray-500 text-white hover:bg-gray-600"
            : "bg-blue-600 text-white hover:bg-blue-700"
        }`}
        onClick={handleConnection}
      >
        {isConnected ? "Disconnect" : "Connect"}
      </button>
    </div>
  );
}
