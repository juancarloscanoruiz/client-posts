import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { getPost } from '../../providers/posts/'
import Row from '../../components/Row';
import Col from '../../components/Col';

const PostTitle = styled.h3`
    font-size: 24px;
`;

const PostContainer = styled.div`
    margin-top: 13px;
`;

const PostImage = styled.img`
    width: 500px;
`;

const PostLabel = styled.p`
    font-weight: bolder;
    margin-bottom: 4px;
`

const PostText = styled.p``;

const PostInfoContainer = styled.div`
    margin-top: 24px;
`

const DetailPostView = () => {
    const { id } = useParams();
    const [post, setPost] = useState({});

    const fetchPost = async () => {
        try {
            const responseGetPost = await getPost(id);
            setPost(responseGetPost.data.data);
        } catch (error) {
            console.log(error);
        }

    }

    useEffect(() => {
        fetchPost();
    }, [])
    return (
        <Row justify="center">
            <Col xl={9}>
                <PostContainer>
                    <PostTitle>{post.title}</PostTitle>
                    {
                        post.url && (
                            <PostImage src={post.url} alt={post.title} />
                        )
                    }
                    <PostInfoContainer>
                        <PostLabel>Descripción corta</PostLabel>
                        <PostText>{post.shortDescription}</PostText>

                        <PostLabel>Descripción completa</PostLabel>
                        <PostText>{post.fullDescription}</PostText>

                        <PostLabel>Ubicación</PostLabel>
                        <PostText>{post.location || 'N/A'}</PostText>

                        <PostLabel>Precio</PostLabel>
                        <PostText>{post.price || 'N/A'}</PostText>

                        <PostLabel>Cantidad</PostLabel>
                        <PostText>{post.quantity || 'N/A'}</PostText>

                        <PostLabel>Código Postal</PostLabel>
                        <PostText>{post.postalCode || 'N/A'}</PostText>

                        <PostLabel>Latitud</PostLabel>
                        <PostText>{post.latitude || 'N/A'}</PostText>

                        <PostLabel>Longitud</PostLabel>
                        <PostText>{post.longitude || 'N/A'}</PostText>
                    </PostInfoContainer>
                </PostContainer>
            </Col>
        </Row>
    )
}

export default DetailPostView;