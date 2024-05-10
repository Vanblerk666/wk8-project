import styles from "./page.module.css";
import Recipes from "./posts/page.jsx";

// export default function Home() {
//   return {
//     <div>
//     <h1>This is my homepage</h1>
//     </div>
//   };
// }

export default function Home() {
  return (
    <div>
      <h1>Title goes here</h1>
      <Recipes />
    </div>
  );
}
