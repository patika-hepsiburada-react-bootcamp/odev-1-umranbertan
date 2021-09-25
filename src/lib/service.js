import axios from "axios";

async function  getData () {
    const { data:users}=await axios("https://jsonplaceholder.typicode.com/users/");

    const { data:posts}=await axios("https://jsonplaceholder.typicode.com/posts/");

    console.log("users:", users);
    console.log("posts:", posts);
}


getData();

export default getData;