

let state = {
  me:{
    avatar: '/static/media/avatar.38c7a0b0.jpg'
  },

  users:[  {
    id: 0,
    name: "Andrei Bakinovskiy",
    avatar: "https://sun9-73.userapi.com/impg/NSpxZb1J_V-M_YJNBMaJhCVThrQniOiL73eGNQ/9cFQ4T1g3OA.jpg?size=810x1080&quality=95&sign=faeaf2da7a2da7c581b509f3b2eaacd2&type=album"
  },
  {
    id: 1,
    name: "Anthony Kiedis",
    avatar: "https://avatars.mds.yandex.net/i?id=dbe15ebdff2bdb03960c008e55c2b271-4034399-images-thumbs&n=13"
  },
  {
    id: 2,
    name: "Chad Smith",
    "avatar": "https://kennyaronoff.com/wp-content/uploads/2016/08/Chad-Smith.jpg"
  },
  {
    id: 3,
    "name": "Flea",
    "avatar": "https://thumbnailer.mixcloud.com/unsafe/900x900/extaudio/8/f/9/e/fd7c-7e05-4d36-b23f-025885fd60e1.jpg"
  },
  {
    id: 4,
    "name": "John Frusciante",
    "avatar": "https://avatars.mds.yandex.net/i?id=02f58dbcd6821115f096fcc625d22156-4577390-images-thumbs&n=13"
  },
  {
    id: 5,
    "name": "Neil Degrasse Tyson",
    "avatar": ""
  }],

  dialogs:[ {
    id: "0",
    messages:[
      { 
        isMe: false,
        message:"Bor!",
        date: new Date(2021, 8, 21, 13, 40, 13)
      },
      {
        isMe: true,
        message: "Back in of sky!",
        date:new Date(2021, 8, 21, 15, 40, 13)
      }
    ]
  },
  {
    id: "1",
    messages:[
      { 
        isMe: false,
        message:"Yo man!",
        date: new Date(2021, 9, 16, 13, 40, 13)
      },
      {
        isMe: true,
        message: "Otherside ",
        date: new Date(2021, 9, 17, 13, 40, 13)
      }
    ]
  },
  {
    id: "2",
    messages:[]
  },
  {
    id: "3",
    messages:[
      { 
        isMe: false,
        message:"Yo man!",
        date: new Date(2021, 8, 21, 15, 40, 13)
      },
      {
        isMe: true,
        message: "Yo Flea!",
        date: new Date(2021, 8, 21, 16, 44, 13)
      }
    ]
  },
  {
    id: "4",
    messages:[]
  },
  {
    id: "5",
    messages:[],
  }
  ],

  posts:[
    { 
      id:1,
      text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quis dolores quidem eum voluptates eaque, optio, cum alias deserunt esse voluptatibus totam unde consequatur, quos assumenda. Dolorem unde minima non?",
      likes:1337,
      comments:10
    },
    { 
      id:0,
      text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quis dolores quidem eum voluptates eaque, optio.",
      likes:1303,
      comments:15
    }
  ],
  newPostText:''
}
let rerenderEntireTree;

export const newPost = () => {
  let post = {};
  post.id = state.posts.length;
  post.text = state.newPostText;
  post.likes = 0;
  post.comment = 0;
  state.posts.unshift(post);
  state.newPostText = '';
  rerenderEntireTree(state);
}

export const updateEnteredPostText = (text) => {
  state.newPostText = text;
  rerenderEntireTree(state);
}

export const subscribe = (observer) => {
  rerenderEntireTree = observer
}

export default state;
