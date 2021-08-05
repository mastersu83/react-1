import { Route } from "react-router-dom";
import Profile from "./Profile/Profile";
import News from "./News/News";
import Music from "./Music/Music";
import Settings from "./Settings/Settings";
import Dialogs from "./Dialogs/Dialogs";
import classes from "./Content.module.css";

const Content = (props) => {
  return (
    <main className={classes.content}>
      <Route
        path="/dialogs"
        render={() => <Dialogs state={props.state.dialogsPage} />}
      />
      <Route
        path="/profile"
        render={() => <Profile state={props.state.profilePage} />}
      />
      <Route path="/news" render={() => <News />} />
      <Route path="/music" render={() => <Music />} />
      <Route path="/settings" render={() => <Settings />} />
    </main>
  );
};

export default Content;
