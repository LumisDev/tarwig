import React from "react";
import { createRoot } from "react-dom/client";
import "./main.css";
import { Canvas } from "@react-three/fiber";
import App from "./App";

createRoot(document.getElementById("root")).render(<div className="bg-gradient-to-t from-pink-800 to-slate-500 w-screen h-screen"><App /></div>);
