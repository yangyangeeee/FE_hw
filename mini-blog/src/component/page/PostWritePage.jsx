import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";
import TextInput from "../ui/TextInput";
import styles from "../page/MainPage.module.css";

export default function PostWritePage({ setPosts }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (title.trim() === "" || content.trim() === "") {
      alert("내용을 입력해주세요.");
      return;
    }

    const newPost = {
      id: Date.now(),
      title,
      content,
      comments: [],
    };

    setPosts((prev) => [...prev, newPost]);
    navigate("/");
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>
        <Link to="/">서윤이의 미니 블로그</Link>
      </h3>

      <div className={styles.inputBox}>
        <TextInput
          className={styles.titleInput}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <TextInput
          className={styles.contentInput}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            width: "600px",
            textAlign: "left",
          }}
        >
          <Button
            style={{
              borderRadius: "5px",
              border: "none",
              backgroundColor: "#ccc",
              height: "30px",
              boxShadow: "1px 2px 1px 0px #9c9999",
              width: "100px",
            }}
            onClick={handleSubmit}
          >
            글 작성하기
          </Button>
        </div>
      </div>
    </div>
  );
}
