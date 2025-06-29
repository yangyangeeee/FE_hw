import React from "react";
import { Link } from "react-router-dom";
import styles from "./page/MainPage.module.css";

function PostListItem({ post }) {
  return (
    <Link to={`/post/${post.id}`} className={styles.postItem}>
      <div className={styles.postTitle}>{post.title}</div>
      <div className={styles.postContent}>{post.content.slice(0, 50)}</div>
    </Link>
  );
}

export default PostListItem;
