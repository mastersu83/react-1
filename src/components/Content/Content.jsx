import { Route } from "react-router-dom";
import Profile from "./Profile/Profile";
import News from "./News/News";
import Music from "./Music/Music";
import Settings from "./Settings/Settings";
import Dialogs from "./Dialogs/Dialogs";
import classes from "./Content.module.css";

const Content = () => {
  return (
    <main className={classes.content}>
      <Route path="/dialogs" component={Dialogs} />
      <Route path="/profile" component={Profile} />
      <Route path="/news" component={News} />
      <Route path="/music" component={Music} />
      <Route path="/settings" component={Settings} />
    </main>
  );
};

export default Content;
