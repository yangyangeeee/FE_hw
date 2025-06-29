import React from "react";
import styles from "../page/MainPage.module.css";

function CommentListItem({ comment }) {
  return (
    <div className={styles.commentItem}>
      <p>{comment.content}</p>
    </div>
  );
}

export default CommentListItem;
