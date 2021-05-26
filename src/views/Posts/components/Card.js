import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import "antd/dist/antd.css";
import { Button } from 'antd';


const CustomCard = styled.div`
    box-shadow: 5px 5px 8px 0px rgba(0,0,0,0.5);
    padding: 16px;
    min-height: 100px;
    border-radius: 5px;
`;

const FlexContainer = styled.div`
    display: flex;
`;

const ImageCard = styled.img`
    height: 100px;
    margin-right: 16px;
    border-radius: 5px;
`;

const CardTitle = styled.h4`
    font-size: 16px;
    font-weight: bold;
    line-height: 1;
    margin-bottom: 4px;
`;

const CardText = styled.p`
    font-size: 12px;
`;

const CardDetailsContainer = styled.div``;
const CardButtonsContainer = styled.div`
    margin-top: 16px;
    display: flex;
    justify-content: flex-end;
`;


const Card = ({ id, title, price, imageUrl, shortDescription, handleDelete }) => {

    return(
        <CustomCard>
            <FlexContainer>
                {
                    imageUrl && (
                        <ImageCard src={imageUrl} alt={title} />
                    )
                }
                <CardDetailsContainer>
                    <CardTitle>{title}</CardTitle>
                    {
                        price && <CardText>{price}</CardText>
                    }
                    <CardText>{shortDescription}</CardText>
                    <CardButtonsContainer>
                        <Button onClick={() => handleDelete(id)} danger style={{marginRight: '8px' }}>Eliminar</Button>
                        <Link to={`/update/${id}`}>
                            <Button type="primary">Editar</Button>
                        </Link>
                        <Link to={`/post/${id}`}>
                            <Button type="link" style={{marginLeft: '8px' }}>Ver detalle</Button>
                        </Link>
                    </CardButtonsContainer>
                </CardDetailsContainer>
            </FlexContainer>
        </CustomCard>
    )
}

Card.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number,
    imageUrl: PropTypes.string,
    shortDescription: PropTypes.string,
    handleDelete: PropTypes.func,
}

Card.defaultProps = {
    price: null,
    imageUrl: '',
    shortDescription: '',
    handleDelete: () => {}
};

export default Card;