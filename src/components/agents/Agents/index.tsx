import React from "react";
import Agent from "./Agent";
import { Envs } from "@/constants";

async function getAgents() {
  const response = await fetch(
    `${Envs.API_URL}/api/v1/properties/agents?page=0`,
    {
      mode: "cors",
      cache: "no-store",
    }
  );

  const json = response.json();

  return json;
}

export default async function Agents() {
  const agents: {
    authors: {
      uniqueName: string;
      username: string;
      email: string;
      image: string;
      age: number;
    }[];
    pages: number;
    authorsProperties: any;
  } = await getAgents();

  return (
    <>
      {agents
        ? agents.authors.map(({ age, email, image, uniqueName, username }) => {
            return (
              //  @ts-ignore
              <Agent
                key={uniqueName}
                age={age}
                email={email}
                image={image}
                uniqueName={uniqueName}
                username={username}
                authorProperties={agents.authorsProperties[uniqueName]}
              />
            );
          })
        : null}
    </>
  );
}
