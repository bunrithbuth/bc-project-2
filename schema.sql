CREATE DATABASE bc-project-2;

USE bc-project-2;


-- FOR GENERATING A POLL

INSERT INTO users (id, name) values (1, 'bunrith');

INSERT INTO polls (id, type, user_id, is_private) values (1, 'star', 1, 0);

INSERT INTO poll_entry (poll_id, name, description, star_rating, star_rating_count, votes) values (1, 'mcdonalds', 'fast food place', 1, 3, null);

