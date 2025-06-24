import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import styled from "styled-components";

export default function DayList() {
  const days = useFetch("http://localhost:3001/days");

  if (days.length === 0) {
    return <span>Loading...</span>;
  }

  const DayList = styled.ul`
    display: flex;
    flex-wrap: wrap;
  `;

  const DayContent = styled.li`
    flex: 20% 0 0;
    box-sizing: border-box;
    padding: 10px;
  `;

  const DayLink = styled(Link)`
    display: block;
    padding: 20px 0;
    font-weight: bold;
    color: #fff;
    text-align: center;
    border-radius: 10px;
    background-color: dodgerblue;
    width: 150px;
  `;

  return (
    <DayList>
      {days.map((day) => (
        <DayContent key={day.id}>
          <DayLink to={`/day/${day.day}`}>Day {day.day}</DayLink>
        </DayContent>
      ))}
    </DayList>
  );
}
