import { Route } from "react-router-dom";
import Profile from "./Profile/Profile";
import Music from "./Music/Music";
import Settings from "./Settings/Settings";
import classes from "./Content.module.css";
import DialogsContainer from "./Dialogs/DialogsContainer";
import UsersContainer from "./Users/UsersContainer";
import NewsContainer from "./News/NewsContainer";

const Content = () => {
  return (
    <main className={classes.content}>
      <Route path="/dialogs" render={() => <DialogsContainer />} />
      <Route path="/profile" render={() => <Profile />} />
      <Route path="/users" render={() => <UsersContainer />} />
      <Route path="/news" render={() => <NewsContainer />} />
      <Route path="/music" render={() => <Music />} />
      <Route path="/settings" render={() => <Settings />} />
    </main>
  );
};

export default Content;
