"use client";
import React from "react";

export default function Footer() {
  return (
    <footer>

      <div className="mt-12 text-center border-t border-cyan-500/10 pt-6 text-gray-500 text-sm mb-5">
        © {new Date().getFullYear()} Ahmad. All rights reserved.  
      </div>
    </footer>
  );
}
