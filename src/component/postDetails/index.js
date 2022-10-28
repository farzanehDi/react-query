import React from 'react';
import {useQuery} from "react-query";
import {getPostDetails} from "../../api";

const PostDetails = ({id}) => {

    const {data, isLoading} = useQuery(['productDetails',id],()=> getPostDetails(id));

    console.log('data', data)
    if (isLoading) return <p>loading details...</p>


    return (
        <>
            details of post:
            <h3>{data.id}</h3>
            <p>{data.title}</p>
            <p>{data.body}</p>
        </>
    );
};

export default PostDetails;