import {
  collection,
  getDocs,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import React from "react";
import db from "../firebase";

export type BlogType = {
  heading: string;
  body: string;
  date: {
    seconds: number;
    nanoseconds: number;
  };
};

export const getBlogs = async () => {
  let res: BlogType[] = [];

  const q = query(collection(db, "blogs"), orderBy("date", "desc"));

  const querySnapshot = await getDocs(q);

  querySnapshot.forEach((doc) => {
    const { heading, body, date } = doc.data();
    res.push({
      heading,
      body,
      date,
    });
  });

  return res;
};
