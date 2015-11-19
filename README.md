# Superbook

[Superbook][heroku]

[heroku]: http://super-book.herokuapp.com

## Minimum Viable Product

Superbook is a social networking web application for super-people (heros, villains, etc.) using Ruby on Rails and React.js. Superbook allows users to:

- [x] Create an account
- [x] Log in / Log out
- [x] Create, read, edit, and delete posts
- [ ] Comment on posts
- [ ] Friend other users
- [ ] Upload photos
- [ ] Like posts, comments, and photos
- [ ] Receive notifications
- [ ] Message other users
- [ ] Toggle between multiple accounts

## Design Docs
* [View Wireframes][view]
* [DB schema][schema]

[view]: ./docs/views.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: User Authentication, Post Model and JSON API (.5 days)

In Phase 1, I will implement user signup and authentication from scratch.
I will setup a JSON API for Posts.

[Details][phase-one]

### Phase 2: Flux Architecture and Post CRUD (.5 days)

Phase 2 is focused on setting up Flux, the React Router, and the React view
structure for the main application. Users should be able to visit other users'
show pages and create Posts.

[Details][phase-two]

### Phase 3: Friends (1 day)

Phase 3 adds the ability to friend other users. Make FriendRequest model
as well as a Friendship model which are user self joins.
(Note: Using 2 models as opposed to status column in 1 to speed up friend lookup)
Introduce feed based on most recent friend posts.

[Details][phase-three]

### Phase 4: Photos and Likes (2 days)

Phase 4 introduces Photos and Likes for comments, photos, and posts as a
polymorphic association. Also, comments should be polymorphic as well on
both posts and photos. Add avatar, and timeline background to User.

[Details][phase-four]

### Phase 5: Comments (1 days)

Phase 5 adds comments to the Posts. Comments should nest arbitrarily deep.

[Details][phase-five]

### Phase 6: Notifications and Messages (3 days)

Phase 6 add notifications for user activity, (i.e. likes and comments), and
live chat. Implement messaging via web sockets. Add chat sidebar and list of online
users (also handled by web socket controller). Add unread message notifications
which disappear on click.

[Details][phase-six]

### Phase 7: Multiple Accounts and Seed Data (1 day)

Phase 7 makes it possible for users to toggle between different accounts.
Make 1 account the primary account and have secondary accounts reference this.
Add destroy hook on primary account to promote secondary account.

[Details][phase-seven]

### Bonus Features (TBD)
- [ ] Groups and Events
- [ ] People You May Know
- [ ] Infinite scroll for feed
- [ ] Tag Photos
- [ ] Photo facial recognition
- [ ] Check-Ins
- [ ] Privacy Features
- [ ] Video Chat

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
[phase-six]: ./docs/phases/phase6.md
[phase-seven]: ./docs/phases/phase7.md
