import { useState } from "react";
import styled from "styled-components";

export default function Word({ word: w }) {
  const [word, setWord] = useState(w);
  const [isShow, setIsShow] = useState(false);
  const [isDone, setIsDone] = useState(word.isDone);

  function toggleShow() {
    setIsShow(!isShow);
  }

  function toggleDone() {
    fetch(`http://localhost:3001/words/${word.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...word,
        isDone: !isDone,
      }),
    }).then((res) => {
      if (res.ok) {
        setIsDone(!isDone);
      }
    });
  }

  function del() {
    if (window.confirm("삭제하시겠습니까?")) {
      fetch(`http://localhost:3001/words/${word.id}`, {
        method: "DELETE",
      }).then((res) => {
        if (res.ok) {
          setWord({
            ...word,
            id: 0,
          });
        }
      });
    }
  }

  const Tr = styled.tr`
    &.off {
      background: #eee;
      color: #ccc;
    }
  `;

  const StyledButton = styled.button`
    padding: 10px;
    font-weight: bold;
    font-size: 18px;
    cursor: pointer;
    border: 0 none;
    border-radius: 6px;
    padding: 10px 20px;
    color: #fff;
    background-color: dodgerblue;
  `;

  const DeleteButton = styled.button`
    margin-left: 10px;
    color: #fff;
    background-color: firebrick;
  `;

  if (word.id === 0) return null;

  return (
    <Tr className={isDone ? "off" : ""}>
      <td>
        <input type="checkbox" checked={isDone} onChange={toggleDone} />
      </td>
      <td>{word.eng}</td>
      <td>{isShow ? word.kor : " "}</td>
      <td>
        <StyledButton onClick={toggleShow}>
          {isShow ? "뜻 숨기기" : "뜻 보기"}
        </StyledButton>
        <DeleteButton onClick={del}>삭제</DeleteButton>
      </td>
    </Tr>
  );
}
