import { sql } from "@vercel/postgres";

export default async function Recipes() {
  const posts = await sql`SELECT * FROM posts`;
  //console.log(posts);

  return (
    <div>
      <h1>Recipes</h1>

      <ul>
        {posts.rows.map((post) => (
          <li key={`${post.id}-${post.posttitle}-${post.posttext}`}>
            <h2>{post.posttitle}</h2>
            <p>{post.posttext}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

//   return (
//     <div>
//       <h1>Recipes</h1>

//       {posts.rows.map((post) => {
//         return (
//           <ul>
//             {" "}
//             <li key={post.id}>{post.posttitle}</li>,
//             <li key={post.id}>{post.posttext}</li>
//           </ul>
//         );
//       })}
//     </div>
//   );
// }
