import { Button, Skeleton } from "@mantine/core"
import Markdown from "markdown-to-jsx"
import { useEffect, useState } from "react"
import { timeConverter } from "../../common/utils"
import { YABlogPost } from "../../models/YABlogPost"
import { getMdFileFromFirebase } from "../../services/database-service/DatabaseService"
import "./blogView.scss"

interface BlogPostCardProps {
    data: YABlogPost
}

const BlogView = (props: BlogPostCardProps) => {

    const [content, setContent] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        getMdFileFromFirebase(props.data.id).then((result) => {
            setContent(result);
            setIsLoading(false);
        }
        )
    }, [])

    const drawLoadingAnimation = () => {
        const bars = [<Skeleton height={24} width="50%" mb={10} radius="xl" />]
        for (let i = 0; i < 20; i++) {
            bars.push(<Skeleton height={12} mt={6} radius="xl" width={i % 3 === 0 ? "70%" : "100%"} />)
        }
        return bars;
    }

    return (
        <div className="ya-blog-view">
            <div className="ya-blog-view-cover-container">
                <img className="ya-blog-view-cover" src={props.data.image} />
            </div>
            <img className="ya-blog-view-image" src={props.data.image} />
            <div className="py-3"></div>
            <div className="ya-blog-view-title">{props.data.title}</div>
            <div className="ya-blog-view-date">{timeConverter(props.data.date)}</div>
            <hr />
            <div className="py-1"></div>
            {isLoading ? drawLoadingAnimation() :
                <Markdown className="ya-blog-view-content" children={content}></Markdown>}
        </div>
    )
}

export default BlogView