let rerenderEntireTree = () => {
  console.log"state changed");
};

export const subscriber = observer => {
  rerenderEntireTree = observer;
};

let state = {
  profile: {
    newPostText: "",

    postsData: [
      { postId: 1, userId: 1, textOfPost: "bla-bla-bla", likes: 4 },
      { postId: 2, userId: 2, textOfPost: "It`s my life", likes: 22 },
      { postId: 3, userId: 3, textOfPost: "Why do you cry?", likes: 890 },
      { postId: 4, userId: 4, textOfPost: "Business and I", likes: 12 },
      {
        postId: 5,
        userId: 5,
        textOfPost: "All about your interests",
        likes: 28,
      },
    ].reverse(),
    // перевернула, чтобы по умолчанию массив вставал по id в обратном порядке (от раниих к поздним)
  },

  dialogs: {
    newDialogMessage: "",

    messageDialogsData: [
      { id: 1, userId: 1, message: "Hi!" },
      { id: 2, userId: 2, message: "How are you?" },
      { id: 3, userId: 3, message: "Not so bad" },
      { id: 4, userId: 4, message: "And?" },
      { id: 8, userId: 4, message: "What do you want?" },
      { id: 5, userId: 5, message: "Ahhh?" },
      { id: 6, userId: 6, message: "Mom, can I have a dog?" },
      { id: 7, userId: 2, message: "I`ll do it by myself..." },
    ],
    usersDialogsData: [
      {
        userId: 1,
        userName: "Iryna",
        friendStatus: true,
        avatar:
          "https://99px.ru/sstorage/1/2024/06/image_10606241417289546641.jpg",
      },
      {
        userId: 2,
        userName: "Ihor",
        friendStatus: true,
        avatar:
          "https://99px.ru/sstorage/1/2024/05/image_12205242350265553263.gif",
      },
      {
        userId: 3,
        userName: "Mykchailo",
        friendStatus: true,
        avatar:
          "https://99px.ru/sstorage/1/2024/05/image_121052411240785237.jpg",
      },
      {
        userId: 4,
        userName: "Vira",
        friendStatus: true,
        avatar:
          "https://99px.ru/sstorage/1/2024/05/image_12105241118153001870.jpg",
      },
      {
        userId: 5,
        userName: "Lisa",
        friendStatus: true,
        avatar:
          "https://99px.ru/sstorage/1/2024/06/image_10206240954235750431.jpg",
      },
      {
        userId: 6,
        userName: "Galyna",
        friendStatus: true,
        avatar:
          "https://99px.ru/sstorage/1/2024/05/image_12105241108231030018.jpg",
      },
    ],
  },
};
export default state;
// ==============================================================POSTS==============================================================

export const addPost = () => {
  let newPost = {
    postId: state.profile.postsData.length + 1,
    //userId по умолчанию должен быть залогиненого user-a
    userId: 1,
    textOfPost: state.profile.newPostText,
    likes: 0,
  };
  // добавление через unshift потому, что сам массив в реверсе, если бы не был, добавляла бы в конец, а не в начало массива push-ем
  state.profile.postsData.unshift(newPost);
  clearTextarea();
  rerenderEntireTree();
};

export const changePostText = postText => {
  state.profile.newPostText = postText;
  rerenderEntireTree();
};

export const clearTextarea = () => {
  state.profile.newPostText = "";
  rerenderEntireTree();
};

// ==============================================================DIALOGS==============================================================
export const addDialogMessage = () => {
  let newMessage = {
    id: state.dialogs.messageDialogsData.length + 1,
        //userId по умолчанию должен быть залогиненого user-a
    userId: 1,
    message: state.dialogs.newDialogMessage,
  };
  state.dialogs.messageDialogsData.push(newMessage);
  clearDialogTextarea();
  rerenderEntireTree();
};

export const changeDialogMessage = (postDialogMessage) => {
  state.dialogs.newDialogMessage = postDialogMessage;
  rerenderEntireTree();
};

export const clearDialogTextarea = () => {
  state.dialogs.newDialogMessage = "";
  rerenderEntireTree();
};


// =============================================================================================================================================
