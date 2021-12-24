SELECT * FROM "user";

SELECT COUNT(*) FROM "user";

SELECT username FROM "user" ORDER BY username;
SELECT username FROM "user" ORDER BY username DESC;
SELECT username, email FROM "user" WHERE id=5;

INSERT INTO "user" (username, id_firebase, email, phone) VALUES ('Anne', 'sA75idsd34E', 'Anne@sopt.org', '010-738-8304');
INSERT INTO "user" VALUES ('Conan', 'h43Dgbg68fDF23', 'Conan@sopt.org', '010-766-2514');

UPDATE "user" SET username='gngsn' WHERE id=3;
SELECT * FROM "user" WHERE id=3;

DELETE FROM "user" WHERE id=3;
SELECT * FROM "user" WHERE id=3;