import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import React from "react";
import { queryClient } from "../_app";
import { dehydrate, useQuery } from "react-query";
import { list } from "..";
import styles from "@/styles/Home.module.css";
import { useRouter } from "next/router";

const Detail = () => {
  const { query } = useRouter() as any;
  const { data: detail } = useQuery(["detail", query.id], () =>
    getInformation(query.id)
  );
  return <div className={styles.main}>{detail?.firstName}</div>;
};

export default Detail;

export const getStaticProps = async (ctx: any) => {
  const { id } = ctx.params;
  await queryClient.prefetchQuery(["detail", id], () => getInformation(id));

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
    revalidate: 10,
  };
};

export const getStaticPaths: GetStaticPaths = () => {
  const paths = list.map((information) => ({
    params: {
      id: information.id + "",
    },
  }));
  return {
    paths,
    fallback: "blocking", // can also be true or 'blocking'
  };
};

const getInformation = async (id: string) => {
  const detail = list.find((information) => information.id + "" === id);
  return JSON.parse(JSON.stringify(detail));
};
