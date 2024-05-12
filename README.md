another fail i'm afraid

i was going quite well until i hit the use of id to load specific pages for the individual comments.

Things I achieved;

- produced wireframes so I knew the direction i was going in
- designing a database and built it (in Supabase and
  Vercel - I used sb to write and test my SQL scripts before using them in vercel, which is pretty low on useability).
- building my database and getting queries that worked.
- linked the db to my web pages and pulled in data into a main page.
- opening up form pages and getting them to store the form output into my vercel database
- ...and shutting those pages and refreshing the landing page to show when the 'submit' button was clicked. see the 'add recipe' function for proof1
- using the layout.jsx to put headers and footers around the child page content.

Problems;

- i followed the methodology from the workshops and had to re-structure my pages a couple of times, as tim and joe go about things in very different ways, and i kept finding i needed different structures. e.g. one of the demos put functions on the app/page.jsx page - when i copied it i had to restructure as i realised when i wanted to make things dynamic, i couldn't put and [id] folder in as i had put functions on a page that wasn't a child page with a folder.
- my strategy was to build the forms and get them functioning properly (which i achieved), then do the dynamic linking. i don't think the course info was sufficient to enable me to do this, and there was no help available at weekends to solve this. i looked through past lessons and just couldn't work out how to link to external pages by id and get content to load properly. my 'add new recipe' works perfectly, but couldn't get messages attached to individual comments. i'd guess i spent about 8 hrs failing to do this... i got individual pages to load, but could only get the header and footer to load.
- i wasted a lot of time due to a shonky keyboard where keys on the left don't work very well and resulted in a lot of instances where curly braces ween't etc. on the plus side, resulted in improved debugging skills1

all in all very frustrating not to have managed to get it sorted, despite being so close.

Requirements;

🎯 Created using create-next-app

achieved

🎯 Design a SQL schema for a posts table, and a comments table that has a post_id column connecting it to the posts table.

achieved

🎯 Either create a form where users can add posts OR seed your database with at least 4 posts that comments can be added to (if you do the seed, one of the stretch goals will be harder).

achieved

🎯 Add a form to the individual post page to allow creating a new comment, which is saved to the new comments table including the Post ID.

achieved

🎯 Refresh the /posts route data when adding a new post, and redirect the user to the list of posts

achieved

🎯 Refresh the /post/:postId route when adding a new comment, so the new comment is displayed on the page

partial success - got the form working, but couldn't work out how to display the comment by the post by id - see problems section.
