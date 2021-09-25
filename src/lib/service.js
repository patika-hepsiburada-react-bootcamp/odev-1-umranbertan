import axios from "axios";

async function  getData (userId) {
    // "axios" kütüphanesi kullanıldı. İsteği yaparken aşağıdaki endpointin sonundaki rakamı parametrede gelen user id'ile değişmekte.
    const { data:users}=await axios(`https://jsonplaceholder.typicode.com/users/${userId}`); 
    
     // "axios" kütüphanesi kullanıldı. İsteği yaparken aşağıdaki endpointin sonundaki rakamı parametrede gelen user id'ile değişmekte.
    const { data:posts}=await axios(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    
    
    users.posts=posts;
    return {...users, posts}
   
}


getData();

export default getData;
