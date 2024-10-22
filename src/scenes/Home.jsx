import React, {useEffect} from "react";
import LatestMenu from "../components/LatestMenu";
import Categories from "../components/LatestCategories";

const Home=()=> {
   useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
    <LatestMenu/>
    <Categories/>
    </>
  );
}

export default Home;