"use server";

import { sql } from "@vercel/postgres";
import Link from "next/link";

export default async function Posts() {
  const posts = await sql`SELECT * FROM posts`;
  //console.log(posts);

  return (
    <div>
      <h1>Recipes</h1>
      <Link href="/addnew">
        <button>Add your recipe</button>
      </Link>

      <ul>
        {posts.rows.map((post) => (
          <ul key={`${post.id}-${post.posttitle}-${post.posttext}`}>
            <h2>{post.posttitle}</h2>
            <p>{post.posttext}</p>

            <Link href={`/addcomment/${encodeURIComponent(post.id)}`}>
              <button>Add comment</button>
            </Link>
          </ul>
        ))}
      </ul>
    </div>
  );
}
