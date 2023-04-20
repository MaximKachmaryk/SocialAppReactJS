import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dalogs";
import Friends from "./components/SideBar/SideBar";
/* import store from "./components/redux/state"; */

function App(props) {
  return (
    <Router>
      <div className="App">
        <Header />
        <Navbar />
        <Friends friends={props.state.frendsState.friends} />
        <Routes>
          <Route
            path="/dialogs"
            element={
              <Dialogs
                store={props.store}
                dialogsReducer={props.store.getState().dialogsReducer} 
              /*   messages={props.state.messagesPage.messages}
                dialogStore={props.state.profilePage.dialogStore} */
              />
            }
          />
          <Route
            path="/profile"
            element={
              <Profile
                postNewData={props.state.profilePage.postNewData}
                postData={props.state.profilePage.postData}
                dispatch={props.dispatch}
                /* updateNewPost={props.updateNewPost} */
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
