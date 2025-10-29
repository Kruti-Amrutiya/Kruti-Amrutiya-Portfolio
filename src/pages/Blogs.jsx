import { useEffect, useState } from "react";

export default function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchMediumPosts = async () => {
      try {
        const response = await fetch(
          `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@krutiamrutiya1998`
        );
        const data = await response.json();

        if (data.items) {
          const articles = data.items.slice(0, 4).map((item) => {
            // Extract image from content
            const parser = new DOMParser();
            const doc = parser.parseFromString(item.content, "text/html");
            const imgTag = doc.querySelector("img");
            const thumbnail =
              imgTag?.src ||
              "https://cdn-icons-png.flaticon.com/512/5968/5968885.png";
            const textContent = doc.body.textContent
              .replace(/\s+/g, " ")
              .trim()
              .slice(0, 200);

            return {
              title: item.title,
              link: item.link,
              date: new Date(item.pubDate).toLocaleDateString("en-IN", {
                year: "numeric",
                month: "long",
                day: "numeric",
              }),
              content: textContent + "...",
              thumbnail,
            };
          });
          setPosts(articles);
        }
      } catch (error) {
        console.error("Error fetching Medium posts:", error);
      }
    };
    fetchMediumPosts();
  }, []);

  return (
    <section id="blog">
      <h2>Blog</h2>
      <p className="section-subtitle">
        Thoughts on software development and productivity.
      </p>

      <div className="blog-list">
        {posts.length > 0 ? (
          posts.map((post, index) => (
            <div key={index} className="blog-card">
              <div className="blog-image">
                <img src={post.thumbnail} alt={post.title} />
              </div>
              <div className="blog-info">
                <h3>{post.title}</h3>
                <small>{post.date}</small>
                <p>{post.content}</p>
                <a
                  href={post.link}
                  target="_blank"
                  rel="noreferrer"
                  className="blog-btn"
                >
                  Read Full Article →
                </a>
              </div>
            </div>
          ))
        ) : (
          <p style={{ textAlign: "center", color: "#94a3b8" }}>
            Loading latest articles...
          </p>
        )}
      </div>
    </section>
  );
}
