import { useEffect, useState } from "react";

const tabs = ["posts", "comments", "albums"];

function Content() {
  const [type, setType] = useState("");
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    if (type) {
      fetch(`https://jsonplaceholder.typicode.com/${type}`)
        .then((response) => response.json())
        .then((data) => {
          setPosts(data);
        });
    }
  }, [type]);

  return (
    <div>
      {tabs.map((tab) => (
        <button
          key={tab}
          style={type === tab ? { color: "#fff", backgroundColor: "red" } : {}}
          onClick={() => setType(tab)}
        >
          {tab}
        </button>
      ))}
      <input value={type} />
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title || post.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Content;
