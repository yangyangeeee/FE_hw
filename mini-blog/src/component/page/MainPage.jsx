import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import data from "../../db/data.json";
import Button from "../ui/Button";
import styles from "./MainPage.module.css";

export default function MainPage({ posts }) {
  const navigate = useNavigate();

  const allPosts = [...posts, ...data];
  return (
    <>
      <div className={styles.container}>
        <h3 className={styles.title}>
          <Link to="/">서윤이의 미니 블로그</Link>
        </h3>
      </div>

      <div className={styles.contentList}>
        <div className={styles.buttonLoc}>
          <Button
            className={styles.buttonDes}
            onClick={() => navigate("/write")}
          >
            글 작성하기
          </Button>
        </div>

        {allPosts.map((post) => (
          <div className={styles.postBox} key={post.key}>
            <Link
              to={`/post/${post.id}`}
              key={post.id}
              className={styles.contentTitle}
            >
              {post.title}
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
