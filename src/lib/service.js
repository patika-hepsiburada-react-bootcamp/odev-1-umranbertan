import axios from "axios";

async function  getData (userId) {
    //Sonundaki user idleri değişeceği için const değil de let kullanmak gerekiyor.
    const { data:users}=await axios(`https://jsonplaceholder.typicode.com/users/${userId}`); 
    
  //Sonundaki user idleri değişeceği için const değil de let kullanmak gerekiyor.
    const { data:posts}=await axios(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    
    
    users.posts=posts;
    return {...users, posts}
   
}


getData();

export default getData;