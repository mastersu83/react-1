import { Route } from "react-router-dom";
import Profile from "./Profile/Profile";
import News from "./News/News";
import Music from "./Music/Music";
import Settings from "./Settings/Settings";
import classes from "./Content.module.css";
import DialogsContainer from "./Dialogs/DialogsContainer";

const Content = (props) => {
  return (
    <main className={classes.content}>
      <Route
        path="/dialogs"
        render={() => (
          <DialogsContainer
          // store={props.store}
          />
        )}
      />
      <Route
        path="/profile"
        render={() => (
          <Profile
          // store={props.store}
          />
        )}
      />
      <Route path="/news" render={() => <News />} />
      <Route path="/music" render={() => <Music />} />
      <Route path="/settings" render={() => <Settings />} />
    </main>
  );
};

export default Content;
