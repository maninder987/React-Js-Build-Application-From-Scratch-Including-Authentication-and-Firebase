import React, { useEffect } from "react";
import { db } from "./../../firebase";
import { collection, getDocs } from "firebase/firestore";
import { setMoviesFunction } from "../../redux/movieSlice";
import { useDispatch } from "react-redux";
import AccordianContent from "./AccordianContent";

export default function AccordionContent({ contentTypeToLoad }) {
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      try {
        const myCollection = collection(db, "movies");
        const querySnapshot = await getDocs(myCollection);

        let newCategory = [];
        let iconicCategory = [];
        let criticallyAcclaimed = [];

        querySnapshot.forEach((doc) => {
          const data = doc.data();

          if (data.type == "new") {
            newCategory = [...newCategory, data];
          }

          if (data.type == "iconic") {
            iconicCategory = [...iconicCategory, data];
          }

          if (data.type == "critically_acclaimed") {
            criticallyAcclaimed = [...criticallyAcclaimed, data];
          }

          dispatch(
            setMoviesFunction({
              newCategory: newCategory,
              iconicCategory: iconicCategory,
              criticallyAcclaimed: criticallyAcclaimed,
            })
          );
        });
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  return (
    <AccordianContent contentTypeToLoad={contentTypeToLoad}></AccordianContent>
  );
}
