import React, { useState, useEffect } from "react";
import { fetchComments } from "../../api/commentsApi";

const BlogPage = () => {
  const [num, setNum] = useState([]);
  const [chosenNum, setChosenNum] = useState();
  const [comments, setComments] = useState([]);

  useEffect(() => {
    if (num.length === 10) return;
    for (let i = 1; i <= 10; i++) {
      setNum((prev) => [...prev, i]);
    }
  }, []);

  useEffect(() => {
    fetchComments().then((values) => {
      console.log(values);
      let filtered = values.filter((val) => val.postId == chosenNum);
      setComments(filtered);
    });
  }, [chosenNum]);

  function submitHandler(val) {
    console.log(val.target.value);
    setChosenNum(val.target.value);
  }

  console.log(comments);

  return (
    <>
      <select onChange={submitHandler}>
        {num.map((n) => (
          <option value={n}>{n}</option>
        ))}
      </select>
      <div>{comments.toString()}</div>
    </>
  );
};

export default BlogPage;
