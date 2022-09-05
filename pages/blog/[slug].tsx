import { GetStaticPaths, GetStaticProps } from "next";

type BlogPostProps = {
  date: Date;
};

export default function BlogPost({ date }: BlogPostProps) {
  return <h1>{date}</h1>;
}

export const getStaticPaths: GetStaticPaths = async () => {
  // pega os posts mais lidos

  return {
    paths: [],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      date: new Date().toISOString(),
    },
    revalidate: 60 * 60 * 4, // 4 hours
  };
};
