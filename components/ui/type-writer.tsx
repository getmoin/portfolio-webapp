"use client";
import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Cloud Computing",
          "Software Engineering",
          "Containerization",
          "DevOps",
          "Kubernetes",
          "Terraform",
          "CI/CD Pipelines",
          "Serverless",
          "On premise",
          "Security"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
