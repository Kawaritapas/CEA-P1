import React from 'react'

export default function DisLikedCard() {
    const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${props.postId}`)
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(posts);
  return (
    <div>
      <div
        class="ui  card"
        style={{
          width: "600px",
          backgroundColor: "white",
          margin: "auto",
          marginTop: "20px",
        }}
      >
        <div class="content">
          <div class="header">Post Title</div>
          <p>{posts.title}</p>
        </div>
        <div class="content">
          <h4 class="ui sub header" style={{ color: "blue" }}>
            Description
          </h4>
          <div class="ui small feed">
            <div class="event">
              <div class="content">
                <div class="summary">
                  <p>{posts.body}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
