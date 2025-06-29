import React from "react";
import CommentListItem from "./CommentListItem";

function CommentList({ comments }) {
  return (
    <div className="commentList">
      {comments.map((c, index) => (
        <CommentListItem key={c.id || index} comment={c} />
      ))}
    </div>
  );
}

export default CommentList;
