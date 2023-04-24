import React, { Suspense } from "react";
import { dehydrate, useQuery } from "react-query";
import { queryClient } from "./_app";
import dynamic from "next/dynamic";
import { getSource } from "@/utils/api";
import Link from "next/link";

const ListSource = dynamic(() => import("@/feature/ListSource"), {
  loading: () => <div>Loading...</div>,
});

const Fetch = () => {
  const {
    data: listSource,
    isError,
    isLoading,
  } = useQuery("source", getSource, {
    staleTime: Infinity,
  });
  if (listSource) {
    return (
      <div style={{ height: "100vh" }}>
        <Link href={"/"}>To Home page</Link>
        <ListSource data={listSource?.data} />
      </div>
    );
  }
  if (isError) {
    return <div>Error</div>;
  }
  return <div>Loading...</div>;
};

export default Fetch;

export const getStaticProps = async () => {
  await queryClient.prefetchQuery("source", getSource);
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
    revalidate: 10,
  };
};
