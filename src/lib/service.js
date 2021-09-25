import axios from "axios";

async function  getData (userId) {
    let { data:users}=await axios(`https://jsonplaceholder.typicode.com/users/${userId}`); 
    //Sonundaki user idleri değişeceği için const değil de let kullanmak gerekiyor.

    let { data:posts}=await axios(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    //Sonundaki user idleri değişeceği için const değil de let kullanmak gerekiyor.
    
    
    console.log("users:", users);
    console.log("posts:", posts);
}


getData();

export default getData;