import { collection, addDoc, query, getDocs } from "firebase/firestore";
import { YABlogPost } from "../../models/YABlogPost";
import { db } from "../firebaseConfig";

export const addBlogPost = async (post: YABlogPost) => {
    try {
        const docRef = await addDoc(collection(db, "blogposts"), post);
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

export const getAllBlogPosts = async () => {
    const posts: YABlogPost[] = []
    const querySnapshot = await getDocs(collection(db, "blogposts"));
    querySnapshot.forEach((doc) => {
        posts.push(doc.data() as YABlogPost)
    });
    return posts;
}

