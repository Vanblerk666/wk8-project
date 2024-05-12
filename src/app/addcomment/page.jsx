import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default function AddComment() {
  async function handleAddComment(formData) {
    "use server";

    const username = formData.get("username");
    const comment = formData.get("comment");

    await sql`INSERT INTO comments (username, comment) values (${username}, ${comment})`;

    revalidatePath("/");

    redirect("/");
  }

  return (
    // <>
    //   <div>
    //     <ul>
    //       <h2>{post.posttitle}</h2>
    //       <p>{post.posttext}</p>
    //     </ul>
    //   </div>

    <div>
      <form action={handleAddComment}>
        <label htmlFor="username">User Name</label>
        <input name="username" id="username" placeholder="Type username here" />

        <label htmlFor="comment">Type comment here</label>
        <input name="comment" id="comment" placeholder="Type comment here" />

        <button type="submit">Add comment</button>
      </form>
    </div>
    // </>
  );
}
