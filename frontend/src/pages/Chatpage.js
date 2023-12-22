// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const Chatpage = () => {
//     const [chats, setChats] = useState([]);

//     const fetchChats = async () => {
//         try {
//             const response = await axios.get('/api/chat');
//             setChats(response.data);
//         } catch (error) {
//             console.error(error);
//         }
//     }

//     useEffect(() => {
//         fetchChats();
//     }, []);

//     return (
//         <div>

            
//                 {chats.map((chat) => (
//                      <div key={chat._id}> {chat.chatName}</div>
//                 ))}
            
//         </div>
//     );
// }

// export default Chatpage;


// // import React, { useEffect, useState } from 'react';
// // import axios from 'axios';

// // const Chatpage = () => {
// // const [chats ,setChats] =useState([])
    
// //     const feacthChats = async()=>{

// //         const {data} = await axios.get ('/api/chat');
// //         setChats(data)

// //     }
// //     useEffect(()=>{
// //         feacthChats()

// //     },[])
// //   return  <div>{chats.map()}</div>;
  
// // }

// // export default Chatpage
