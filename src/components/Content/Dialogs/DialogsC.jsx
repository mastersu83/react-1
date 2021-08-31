import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";

class Dialogs extends React.Component {
  addMessage = () => {
    this.props.addMessage();
  };

  onMessageChange = (e) => {
    let text = e.target.value;
    this.props.onMessageChange(text);
  };

  render() {
    return (
      <div className={classes.dialogs}>
        <div className={classes.items}>
          {this.props.dialogs.map((d) => (
            <DialogItem name={d.name} id={d.id} key={d.id} />
          ))}
        </div>
        <div className={classes.messages}>
          {this.props.messages.map((m) => (
            <Message message={m.message} key={m.id} />
          ))}
        </div>
        <div>
          <textarea
            className={classes.textarea}
            onChange={this.onMessageChange}
            value={this.props.newMessageText}
          />
        </div>
        <div>
          <button onClick={this.addMessage}>Add post</button>
        </div>
      </div>
    );
  }
}

export default Dialogs;