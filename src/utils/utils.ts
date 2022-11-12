import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  orderBy,
  query,
  setDoc,
} from "firebase/firestore";
import db from "../firebase";

export type BlogType = {
  id: string;
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
      id: doc.id,
      heading,
      body,
      date,
    });
  });

  return res;
};

export const addBlog = async (blogHeading: string, blogBody: string) => {
  addDoc(collection(db, "blogs"), {
    heading: blogHeading,
    body: blogBody,
    date: new Date(),
  }).catch((err: any) => console.error(err));
};

export const deleteBlog = async (id: string) => {
  await deleteDoc(doc(db, "blogs", id));
};
