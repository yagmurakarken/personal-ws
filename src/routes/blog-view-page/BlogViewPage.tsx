import { Skeleton } from '@mantine/core';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import BlogView from '../../components/blog-view/BlogView'
import { YABlogPost } from '../../models/YABlogPost';
import { getBlogPost } from '../../services/database-service/DatabaseService';

const BlogViewPage = () => {
    const params = useParams();
    const [blogPost, setBlogPost] = useState<YABlogPost>();
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        if (params.id) {
            getBlogPost(params.id).then(result => {
                setBlogPost(result)
                setIsLoading(false)
            })
        }

    }, [])

    const drawLoadingAnimation = () => {
        const bars = []
        bars.push(<Skeleton height={420} mb={10} radius="md" />)
        bars.push(<Skeleton height={28} mb={10} radius="xl" />)
        bars.push(<Skeleton height={28} mb={10} width="50%" radius="xl" />)
        bars.push(<Skeleton height={16} mb={10} width={100} radius="xl" />)
        bars.push(<hr />)
        bars.push(<Skeleton height={24} mb={10} radius="xl" />)
        for (let i = 0; i < 20; i++) {
            bars.push(<Skeleton height={12} mt={6} radius="xl" width={i % 3 === 0 ? "70%" : "100%"} />)
        }
        return bars;
    }

    return (
        <div className='container'>
            {isLoading ? drawLoadingAnimation() : (blogPost ? <BlogView data={blogPost} /> : <p>error</p>)}

        </div>
    )
}

export default BlogViewPage