import {useMutation, useQuery, useQueryClient} from "react-query";
import {getAllPost,deletePost} from "../../api";
import PostDetails from "../../component/postDetails";
import {useState} from "react";


const Home = () => {

    const [id, setId] = useState();
    const queryClient=useQueryClient();

    const mutation=useMutation(deletePost,{
        onSuccess:()=>{
            queryClient.invalidateQueries(['allPosts'])
        }
    })
    const {data, isLoading} = useQuery('allPosts', getAllPost);

    const getPostDetails = (id) => {
        setId(id)
    }

    const deleteSelectedPost=(id)=>{
       mutation.mutate(id)
    }

    if (isLoading) return <p>loding products...</p>

    return (
        <div style={{display: 'flex'}}>
            <div>
                list of posts:
                {
                    data.map((post, index) => (
                        <div key={`allPosts${index}`} style={{border: 'solid gray 1px', marginBottom: 5}}>
                            <h3 onClick={() => getPostDetails(post.id)}>{post.title}</h3>
                            <p>{post.body}</p>
                            <button style={{backgroundColor:"red"}} onClick={() => deleteSelectedPost(post.id)}>delete</button>
                        </div>
                    ))
                }
            </div>
            {
                id &&
                <div style={{width: '40%', marginLeft: 10}}>
                    <PostDetails id={id}/>
                </div>
            }

        </div>
    );
};

export default Home;