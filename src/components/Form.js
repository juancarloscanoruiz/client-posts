import React, { useEffect, useState } from 'react';
import { Form, Input, Button, InputNumber } from 'antd';
import { useParams } from 'react-router-dom';
import { getPost } from '../providers/posts';


const FormPost = ({ onSubmitCapture, isUpdate }) => {
    const [post, setPost] = useState({});
    const { id } = useParams();

    const fetchPost = async () => {
        const responseGetPost = await getPost(id);
        console.log(responseGetPost.data.data)
        setPost(responseGetPost.data.data);
    }

    useEffect(() => {
        if (id) {
            fetchPost();
        }
    }, [])
    return (
    <Form
        layout="vertical"
        onSubmitCapture={(e) => onSubmitCapture(e)}
    >
        <Form.Item
          label="Título"
          name="title"
          rules={!isUpdate && ([{ required: true}])}
          initialValue={post.title}
        >
          <Input />
        </Form.Item>
  
        <Form.Item
          label="Descripción Corta"
          name="shortDescription"
          rules={!isUpdate && ([{ required: true}])}
          initialValue={isUpdate && (post.shortDescription)}
        >
          <Input.TextArea />
        </Form.Item>
        <Form.Item
          label="Descripción Completa"
          name="fullDescription"
          rules={!isUpdate && ([{ required: true}])}
          initialValue={isUpdate && (post.fullDescription)}
        >
          <Input.TextArea />
        </Form.Item>
        <Form.Item
          label="Ubicación"
          name="location"
          rules={!isUpdate && ([{ required: true}])}
          initialValue={isUpdate && (post.location)}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Precio"
          name="price"
          rules={!isUpdate && ([{ required: true}])}
          initialValue={isUpdate && (post.price)}
        >
          <InputNumber />
        </Form.Item>
        <Form.Item
          label="Cantidad disponible"
          name="quantity"
          initialValue={isUpdate && (post.quantity)}
        >
          <InputNumber  />
        </Form.Item>
        <Form.Item
          label="Código Postal"
          name="postalCode"
          initialValue={isUpdate && (post.postalCode)}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Latitud"
          name="latitude"
          initialValue={isUpdate && (post.latitude)}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Longitud"
          name="longitude"
          initialValue={isUpdate && (post.longitude)}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="URL de imagen"
          name="url"
        >
          <Input  />
        </Form.Item>
        <Form.Item  initialValue={isUpdate && (post.url)}>
          <Button type="primary" htmlType="submit">
            {
                isUpdate ? 'Actualizar registro' : 'Crear registro'
            }
          </Button>
        </Form.Item>
      </Form>
    )
}

export default FormPost;