import axios from "axios";

const client=axios.create({
    baseURL:'https://jsonplaceholder.typicode.com'
})

const getAllPost=async ()=>{
    const {data}=await client.get('/posts')
    return data;
}

const getPostDetails=async (id)=>{
    const {data}=await client.get(`/posts/${id}`)
    return data;
}

const deletePost=async (id)=>{
    const {data}=await client.delete(`/posts/${id}`)
    return data;
}

export {
    getAllPost,
    getPostDetails,
    deletePost
}