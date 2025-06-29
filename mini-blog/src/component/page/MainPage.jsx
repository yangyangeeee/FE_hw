import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import data from "../../db/data.json";
import Button from "../ui/Button";
import styles from "./MainPage.module.css";

export default function Header() {
  const navigate = useNavigate();

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

        {data.map((title) => (
          <div className={styles.postBox} key={title.key}>
            <Link
              to={`/post/${title.id}`}
              key={title.id}
              className={styles.contentTitle}
            >
              {title.title}
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
