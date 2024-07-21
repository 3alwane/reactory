"use client";
import { UserButton, UserProfile } from "@clerk/nextjs";
import React from "react";

function dashboard() {
  return (
    <div>
      <span>This is a dashbaord</span>

      <UserButton />
    </div>
  );
}

export default dashboard;
