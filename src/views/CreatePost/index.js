import React from 'react';
import Row from '../../components/Row';
import Col from '../../components/Col';
import { createPost } from '../../providers/posts';
import FormPost from '../../components/Form';

const CreatePostView = () => {
    const handleCreate = async (e) => {
        let data = {};
        const inputs = e.target;
        for (const input of inputs) {
            if (input.id) {
                if (input.id === 'price' || input.id === 'quantity') {
                    const key = input.id
                    data[key] = Number(input.value);
                    continue;
                }
                const key = input.id
                data[key] = input.value;
            }
        };

        try {
            await createPost(data);
            window.location.href = '/';
        } catch (error) {
            console.log(error);   
        }
    }

    return (
        <Row justify="center">
            <Col xl={6} gap={16}>
                <FormPost onSubmitCapture={handleCreate}/>
            </Col>
        </Row>
    )
}

export default CreatePostView;