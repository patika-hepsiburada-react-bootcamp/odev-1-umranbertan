import axios from "axios";

async function  getData (userId) {
    let { data:users}=await axios(`https://jsonplaceholder.typicode.com/users/${userId}`);

    let { data:posts}=await axios(`https://jsonplaceholder.typicode.com/posts/${userId}`);

    console.log("users:", users);
    console.log("posts:", posts);
}


getData();

export default getData;