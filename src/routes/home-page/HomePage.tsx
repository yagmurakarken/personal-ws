import { Button, Grid } from "@mantine/core"
import { useEffect, useState } from "react"
import BlogPostCard from "../../components/blog-post-card/BlogPostCard"
import { example_blog, YABlogPost } from "../../models/YABlogPost"
import { getAllBlogPosts, addBlogPost } from "../../services/database-service/DatabaseService"


const HomePage = () => {
    const [posts, setPosts] = useState<YABlogPost[]>([]);

    useEffect(() => {
        getAllBlogPosts().then((results) => setPosts(results));
    }, [])

    return (
        <div className="container">
            <div className="py-2"></div>
            <Grid>
                {posts.map(post => <Grid.Col span={12} sm={6} lg={4} ><BlogPostCard data={post} /></Grid.Col>)}
            </Grid>

        </div>
    )
}

export default HomePage