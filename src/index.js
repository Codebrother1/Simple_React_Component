import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author="Mike"
          timeAgo="Today at 4:45PM"
          content="Love the post!"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <CommentDetail
        author="Shabazz"
        timeAgo="Today at 2:00PM"
        content="So true bro!"
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author="Malik"
        timeAgo="Yesterday at 5:00PM"
        content="I totaly disagree"
        avatar={faker.image.avatar()}
      />
    </div>
  );
};
ReactDOM.render(<App />, document.querySelector("#root"));
