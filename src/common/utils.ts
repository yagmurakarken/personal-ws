import { YABlogPostType } from "../models/YABlogPost";

export const timeConverter = (timestamp: number) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleDateString("tr-TR");

}

export const getBlogTypeString = (btype: YABlogPostType) => {
    switch (btype) {
        case "paper":
            return "paper";
        case "diary":
            return "diary";
        case "lecture_notes":
            return "lecture notes";
        default:
            return undefined
    }
}

export const getBlogTypeColor = (btype: YABlogPostType) => {
    switch (btype) {
        case "paper":
            return "cyan";
        case "diary":
            return "violet";
        case "lecture_notes":
            return "lime";
        default:
            return undefined
    }
}