import React, { useEffect, useState } from "react";
import styles from "./loadingPage.module.css";
import { useRouter } from "next/router";

const LoadingPage = () => {
  const route = useRouter();

  const [stylesActive, setStylesActice] = useState([styles.loading]);

  const handleRouteChangeComplete = () => {
    setStylesActice([...stylesActive, styles.complete]);
  };

  const handleRouteChangeStart = () => {
    const startStateStyles = stylesActive;

    startStateStyles[1] = styles.start;

    setStylesActice(startStateStyles);
  };

  useEffect(() => {
    route.events.on("routeChangeStart", handleRouteChangeStart);

    route.events.on("routeChangeComplete", handleRouteChangeComplete);
  }, []);
  return <div className={stylesActive.join(" ")}></div>;
};

export default LoadingPage;
