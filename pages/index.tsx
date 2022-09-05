import { GetServerSideProps, GetStaticProps } from "next";
import React, { useEffect, useState } from "react";

type ItemProps = {
  name: string;
};

type HomeProps = {
  repositories: string[];
  date: Date;
};

export default function Home({ repositories, date }: HomeProps) {
  useEffect(() => {}, []);

  return (
    <>
      <h1>{date}</h1>
      <ul>
        {repositories.map((repository: string) => (
          <li key={repository}>{repository}</li>
        ))}
      </ul>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch(
    "https://api.github.com/users/erik-ferreira/repos"
  );

  const data = await response.json();
  const repositoryNames = data.map((item: ItemProps) => item.name);

  return {
    props: {
      repositories: repositoryNames,
      date: new Date().toISOString(),
    },
    revalidate: 5,
  };
};
