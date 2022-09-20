import { Grid } from "@mantine/core"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import BlogPostCard from "../../components/blog-post-card/BlogPostCard"
import { YABlogPost } from "../../models/YABlogPost"
import { getAllBlogPosts } from "../../services/database-service/DatabaseService"
import "./homePage.scss"

const HomePage = () => {
    const [posts, setPosts] = useState<YABlogPost[]>([]);

    useEffect(() => {
        getAllBlogPosts().then((results) => setPosts(results));
    }, [])

    return (
        <div className="ya-home-page-container">
            <div className="container">
                <div className="py-2"></div>
                <Grid>
                    {posts.map(post => <Grid.Col span={12} sm={6} lg={4} ><BlogPostCard data={post} /></Grid.Col>)}
                </Grid>
            </div>
        </div>

    )
}

export default HomePage