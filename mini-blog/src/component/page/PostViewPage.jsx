import React from "react";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import data from "../../db/data.json";
import CommentList from "../list/CommentList";
import TextInput from "../ui/TextInput";
import Button from "../ui/Button";
import styles from "../page/MainPage.module.css";

export default function PostViewPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const post = data.find((item) => String(item.id) === id);

  const [comment, setComment] = useState("");
  const [comments, setComments] = useState(post.comments || []);

  const handleAddComment = () => {
    if (comment.trim() !== "") {
      setComments([...comments, comment]);
      setComment("");
    }
  };

  if (!post) {
    return <p>해당 게시글을 찾을 수 없습니다.</p>;
  }

  return (
    <div className={styles.postviewpage}>
      <div
        style={{
          maxWidth: "650px",
          margin: "10px auto -10px auto",
          display: "flex",
          justifyContent: "flex-start",
        }}
      >
        <button className={styles.buttonDes} onClick={() => navigate(-1)}>
          뒤로 가기
        </button>
      </div>

      <div className={styles.postView}>
        <h2 className={styles.postviewtitle}>{post.title}</h2>
        <p className={styles.postviewcontent}>{post.content}</p>
      </div>

      <div
        style={{
          maxWidth: "600px",
          margin: "0 auto",
        }}
      >
        <h3
          style={{
            fontWeight: 500,
            fontSize: "15px",
            margin: "5px",
          }}
        >
          댓글
        </h3>
      </div>

      <CommentList comments={comments} />

      <div className={styles.newcomment}>
        <TextInput
          className={styles.inputDes}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <Button
          style={{
            borderRadius: "5px",
            border: "none",
            backgroundColor: "#ccc",
            height: "30px",
            boxShadow: "1px 2px 1px 0px #9c9999",
            width: "100px",
          }}
          onClick={handleAddComment}
        >
          댓글 작성하기
        </Button>
      </div>
    </div>
  );
}
