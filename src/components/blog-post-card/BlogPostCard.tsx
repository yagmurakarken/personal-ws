import { Badge } from "@mantine/core"
import Markdown from "markdown-to-jsx"
import { Link } from "react-router-dom"
import { getBlogTypeColor, getBlogTypeString, timeConverter } from "../../common/utils"
import { YABlogPost } from "../../models/YABlogPost"
import "./blogPostCard.scss"

interface BlogPostCardProps {
    data: YABlogPost
}

const BlogPostCard = (props: BlogPostCardProps) => {
    return (
        <Link to={"/blog/" + props.data.id} className="nostyle-anchor">
            <div className="ya-post-item">
                <img className="ya-post-item-image" src={props.data.image}></img>
                <div className="ya-post-item-body">
                    <div className="ya-post-item-title">{props.data.title}</div>
                    <div className="ya-post-item-details">
                        <div className="ya-post-item-date">{timeConverter(props.data.date)}</div>
                        <Badge color={getBlogTypeColor(props.data.blogType)} className="ya-post-item-type">
                            {getBlogTypeString(props.data.blogType)}
                        </Badge>
                    </div>
                </div>
            </div>
        </Link>


    )
}

export default BlogPostCard

