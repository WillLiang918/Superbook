# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
first_name      | string    | not null
last_name       | string    | not null
email           | string    | not null, indexed, unique
birthday        | date      | not null
sex             | string    | not null
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
avatar_id       | integer   | foreign key (references photo)

## posts
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
author_id       | integer   | not null, foreign key (references user)
receiver_id     | integer   | not null, foreign key (references user)
body            | string    | not null


## comments
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
author_id       | integer   | not null, foreign key (references user)
commentable_id  | integer   | not null, foreign key (references commentable)
commentable_type| string    | not null, foreign key (references commentable)
body            | string    | not null
parent_id       | integer   | not null, foreign key (references comment)

## friend_requests
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
sender_id       | integer   | not null, foreign key (references user)
receiver_id     | integer   | not null, foreign key (references user)

## friendships
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
user_id         | integer   | not null, foreign key (references user)
friend_id     | integer   | not null, foreign key (references user)

## photos
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
attachment      | attachment| not null (paperclip)
owner_id        | integer   | not null, foreign key (references user)

## likes
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
user_id         | integer   | not null, foreign key (references user)
likeable_id     | integer   | not null, foreign key (references likeable)
likeable_type   | string    | not null, foreign key (references likeable), unique [likeable_id, user_id]

## messages
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
sender_id       | integer   | not null, foreign key (references user)
receiver_id     | integer   | not null, foreign key (references user)
body            | string    | not null
seen            | boolean   | not null

## notifications
column name        | data type | details
-------------------|-----------|-----------------------
id                 | integer   | not null, primary key
user_id            | integer   | not null, foreign key (references user)
notificatable_id   | integer   | not null, foreign key (references notificatable)
notificatable_type | string    | not null, foreign key (references notificatable)
seen               | boolean   | not null
