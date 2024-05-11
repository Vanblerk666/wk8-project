import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default function AddRecipe() {
  async function handleAddRecipe(formData) {
    "use server";

    const username = formData.get("username");
    const posttitle = formData.get("posttitle");
    const posttext = formData.get("posttext");

    await sql`INSERT INTO posts (username, posttitle, posttext) values (${username}, ${posttitle}, ${posttext})`;

    revalidatePath("/");

    redirect("/");
  }

  return (
    <div>
      <h2>Add your recipe here</h2>
      <form action={handleAddRecipe}>
        <label htmlFor="username">User Name</label>
        <input name="username" id="username" placeholder="Type username here" />
        <label htmlFor="posttitle">Type recipe title here</label>
        <input
          name="posttitle"
          id="posttitle"
          placeholder="Type recipe title here"
        />
        <label htmlFor="posttext">Type recipe title here</label>
        <input name="posttext" id="posttext" placeholder="Type recipe here" />

        <button type="submit">All done? Add recipe</button>
      </form>
    </div>
  );
}
