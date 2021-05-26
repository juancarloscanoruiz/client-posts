import React from 'react';
import Row from '../../components/Row';
import Col from '../../components/Col';
import { updatePost } from '../../providers/posts';
import FormPost from '../../components/Form';
import { useParams } from 'react-router-dom';


const UpdatePostView = () => {
    const { id } = useParams();
    const handleUpdate = async (e) => {
        let data = {};
        const inputs = e.target;
        for (const input of inputs) {
            if (input.id) {
                if (!input.value) {
                    continue
                }
                if (input.id === 'price' || input.id === 'quantity') {
                    const key = input.id
                    data[key] = Number(input.value);
                    continue;
                }
                const key = input.id
                data[key] = input.value;
            }
        };

        data['id'] = id;
        try {
            await updatePost(data);
            window.location.href = '/';
        } catch (error) {
            console.log(error);   
        }
    }

    return (
        <Row justify="center">
            <Col xl={6} gap={16}>
                <FormPost isUpdate onSubmitCapture={handleUpdate}/>
            </Col>
        </Row>
    )
}

export default UpdatePostView;
