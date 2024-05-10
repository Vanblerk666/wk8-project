CREATE TABLE IF NOT EXISTS posts (
id SERIAL PRIMARY KEY,
username TEXT,
posttitle TEXT,
posttext TEXT

);

CREATE TABLE IF NOT EXISTS comments (
id SERIAL PRIMARY KEY,
post_id INTEGER REFERENCES posts(id),
username TEXT,
comment TEXT
);

INSERT INTO posts (username, posttitle, posttext) VALUES
('Vanblerk', 'Cubed radish kimchi aka Kkakdugi', 'Peel Korean radish, rinse in cold water and pat dry.
Cut it into ¾ to 1 inch cubes. Put into a large bowl.Add kosher salt and sugar, and mix well.
*tip: If you like your kkakdugi sweeter, add 1 or more extra tbs of sugar.
Set aside for 30 minutes.
Drain the juice from the radish into a small bowl.
Add minced garlic, minced ginger, green onions, fish sauce, hot pepper flakes, and ⅓ cup of the juice from the radish.
*tip: The amount of hot pepper flakes you use depends on your taste; use ¼ cup hot pepper flakes for a mild version. For a vegetarian version, replace fish sauce with soy sauce.
Mix it up well until the seasonings coat the radish cubes evenly, and the radish looks juicy.
Put the kkakdugi into a glass jar and press down on the top of it to remove any air from between the radish cubes.
You can eat it right away, and then store it in the refrigerator. Or you can let it ferment by keeping it outside of the refrigerator for a few days. When it starts fermenting, little bubbles may appear on top of the kkakdugi and it will smell strong & sour. Then put it in the refrigerator.');

INSERT INTO comments (post_id, username, comment) VALUES
('1', 'Manny', 'Not enough pimento picante for me');
