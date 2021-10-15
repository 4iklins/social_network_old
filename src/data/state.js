let state = {
  users:[  {
    id: "1",
    name: "Andrei Bakinovskiy",
    avatar: ""
  },
  {
    id: "2",
    name: "Anthony Kiedis",
    avatar: "https://avatars.mds.yandex.net/i?id=dbe15ebdff2bdb03960c008e55c2b271-4034399-images-thumbs&n=13"
  },
  {
    id: "3",
    name: "Chad Smith",
    "avatar": "https://kennyaronoff.com/wp-content/uploads/2016/08/Chad-Smith.jpg"
  },
  {
    id: "4",
    "name": "Flea",
    "avatar": "https://thumbnailer.mixcloud.com/unsafe/900x900/extaudio/8/f/9/e/fd7c-7e05-4d36-b23f-025885fd60e1.jpg"
  },
  {
    id: "5",
    "name": "John Frusciante",
    "avatar": "https://avatars.mds.yandex.net/i?id=02f58dbcd6821115f096fcc625d22156-4577390-images-thumbs&n=13"
  }],

  dialogs:[ {
    id: "1",
    messages:[
      { isMe: false,
        message:"Bor!"
      },
      {isMe: true,
      message: "Back in of sky!"}
    ]
  },
  {
    id: "2",
    messages:[
      { isMe: false,
        message:"Yo man!",
      },
      {isMe: true,
      message: "Otherside "}
    ]
  },
  {
    id: "3",
    messages:[
      { isMe: false,
        message:"",
      },
      {isMe: true,
      message: ""}
    ]
  },
  {
    id: "4",
    messages:[
      { isMe: false,
        message:"Yo man!",
      },
      {isMe: true,
      message: "Yo Flea"}
    ]
  },
  {
    id: "5",
    messages:[
      { isMe: false,
        message:"",
      },
      {isMe: true,
      message: ""}
    ]
  }
  ],

  posts:[
    {
      text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quis dolores quidem eum voluptates eaque, optio, cum alias deserunt esse voluptatibus totam unde consequatur, quos assumenda. Dolorem unde minima non?",
      likes:1337,
      comments:10
    },
    {
      text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quis dolores quidem eum voluptates eaque, optio.",
      likes:1303,
      comments:15
    }
  ]
}

export default state;
