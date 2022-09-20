import { collection, addDoc, query, getDocs, doc, getDoc } from "firebase/firestore";
import { YABlogPost } from "../../models/YABlogPost";
import { db, storage } from "../firebaseConfig";
import { getBlob, getBytes, getDownloadURL, getStorage, ref } from "firebase/storage";

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

export const getBlogPost = async (id: string): Promise<YABlogPost | undefined> => {
    const docRef = doc(db, "blogposts", id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        return docSnap.data() as YABlogPost;
    } else {
        return undefined;
    }
}

export const getMdFileFromFirebase = async (id: string) => {
    const docRef = ref(storage, 'posts/' + id + '/content.md');
    const bytes = await getBytes(docRef);
    const decoder = new TextDecoder("utf-8");
    const decodedData = decoder.decode(bytes);
    console.log(decodedData);
    return decodedData;


}