import React from "react";
import PostListItem from "./PostListItem";

function PostList({ posts }) {
  return (
    <div className="postList">
      {posts.map((post) => (
        <PostListItem key={post.id} post={post} />
      ))}
    </div>
  );
}

export default PostList;

// function PostList(props) {
//   const id = props.id;
//   const title = props.title;
//   const content = props.content;
//   const comments = props.comments;

//   return (
//     <>
//       <div className="bigPost">
//         <h3 className="bigTitle">{title}</h3>
//         <p className="bigContent">{content}</p>
//       </div>

//       <div className="bigCommtent">
//         {comments.map((c, index) => (
//           <p key={index}>{c.content}</p>
//         ))}
//       </div>
//     </>
//   );
// }

// export default PostList;
