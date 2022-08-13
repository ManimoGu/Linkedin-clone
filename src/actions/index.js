import { SET_USER, SET_LOADING_STATUS, GET_ARTICLES} from "./actionType";
import { auth, storage } from "../firebase";
import db from "../firebase";


export const setuser = (payload) => ({
  type: SET_USER,
  user: payload,
});

export const setLoading = (status) =>({

    type : SET_LOADING_STATUS,
    status : status

})

export const getArticles = (payload) =>({
  type : GET_ARTICLES,
  payload : payload,
})

export const getUserauth = () => {
  return (dispatch) => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        dispatch(setuser(user));
      }
    });
  };
};

export const signoutAPI = () => {
  return (dispatch) => {
    auth
      .signOut()
      .then(() => {
        dispatch(setuser(null));
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
};

export const postArticleAPI = (payload) => {
  return (dispatch) => {
    dispatch(setLoading(true))

    if (payload.image !== "") {
      const upload = storage
        .ref(`images/${payload.image.name}`)
        .put(payload.image);

      upload.on(
        "state_change",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(`Progress : ${progress}%`);
          if (snapshot.state === "RUNNING") {
          console.log(`Progress : ${progress}`);
          }
        },
        (error) => console.log(error.code),
        async () => {
          const downloadURL = await upload.snapshot.ref.getDownloadURL();
          db.collection("article").add({
            actor: {
              description: payload.user.email,
              title: payload.user.displayName,
              date: payload.timestamp,
              image: payload.user.photoURL,
            },
            video: payload.video,
            SharedImg: downloadURL,
            comments: 0,
            description: payload.description,
          });
          dispatch(setLoading(false))
        }
      );
    } else if (payload.video) {
      db.collection("article").add({
        actor: {
          description: payload.user.email,
          title: payload.user.displayName,
          date: payload.timestamp,
          image: payload.user.photoURL,
        },
        video: payload.video,
        SharedImg: "",
        comments: 0,
        description: payload.description,
      });
      dispatch(setLoading(false))
    }
  };
};


export const getArticleAPI = () =>{

  return (dispatch) =>{
    let payload;
    db.collection('article').orderBy("actor.date", "desc")
    .onSnapshot((snapshot ) =>{
      payload = snapshot.docs.map((doc)=>doc.data())
      dispatch(getArticles(payload))
    })
  }
}
