import styles from "./page.module.css";
import { sql } from "@vercel/postgres";

export default async function Home() {
  const posts = await sql`SELECT * FROM posts`;
  //console.log(posts);

  return (
    <div>
      <h1>Recipes</h1>
      <button></button>

      <ul>
        {posts.rows.map((post) => (
          <ul key={`${post.id}-${post.posttitle}-${post.posttext}`}>
            <h2>{post.posttitle}</h2>
            <p>{post.posttext}</p>
            <button></button>
          </ul>
        ))}
      </ul>
    </div>
  );
}
