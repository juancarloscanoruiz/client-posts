import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { getPosts } from '../../providers/posts/';
import Row from '../../components/Row';
import Col from '../../components/Col';
import Card from './components/Card';
import { deletePost } from '../../providers/posts';
import { Button } from 'antd';

const CustomButton = styled(Button)`
    margin-left: 8px;
    margin-top: 24px;
    margin-bottom: 16px;
`;

const PostsView = () => {
    const [posts, setPosts] = useState([]);
    const handleDelete = async (id) => {
        const cardId = id;
        try {
            const responseDeletePost = await deletePost(cardId);
            const code = responseDeletePost.data.code;
            console.log(responseDeletePost)
            if (code === 200) {
                const oldPosts = posts.slice();
                const newPosts = oldPosts.filter((post) => post.id !== id);
                setPosts([
                    ...newPosts
                ])
            }
        } catch (error) {
            console.log(error);
        }
    }
    const fetchPosts = async () => {
        try {
            const responsePosts = await getPosts();
            const dataPosts = responsePosts.data.data;
            setPosts(dataPosts);
            console.log(responsePosts.data.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchPosts();
    }, [])
    return (
        <Row justify="center">
            <Col  xl={10}>
                <Link to="/create">
                    <CustomButton type="primary">Añadir publicación</CustomButton>
                </Link>
                <Row>
                    {
                        posts.map((post) => (
                            <Col gap={8} key={post.id} xl={6}>
                                <Card 
                                    id={post.id} 
                                    title={post.title} 
                                    imageUrl={post.url}
                                    shortDescription={post.shortDescription}
                                    handleDelete={handleDelete}
                                />
                            </Col>
                        ))
                    }
                </Row>
            </Col>
        </Row>
    )
};

export default PostsView;