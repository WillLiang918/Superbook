# Phase 4: Allow Complex Styling in Notes (1 day)

## Rails
### Models
* FriendRequest
* Friendship

### Controllers
* Api::FriendRequestsController
* Api::FriendshipsController

### Views
* friend_requests/index.json.jbuilder
* friend_requests/show.json.jbuilder
* friend_ships/index.json.jbuilder
* friendships/show.json.jbuilder


## Flux
### Views (React Components)
* FriendList
  - FriendItem

### Stores
* FriendRequest
* Friend

### Actions
* ApiActions.receiveSingleFriendRequest
* ApiActions.receiveAllFriendRequests
* ApiActions.deleteFriendRequest
* ApiActions.receiveSingleFriend
* ApiActions.receiveAllFriends
* ApiActions.deleteFriend

### ApiUtil
* ApiUtil.sendFriendRequest
* ApiUtil.denyFriendRequest
* ApiUtil.acceptFriendRequest
* ApiUtil.fetchAllFriendRequests
* ApiUtil.fetchSingleFriendRequest
* ApiUtil.fetchAllFriends
* ApiUtil.fetchSingleFriend
* ApiUtil.unFriend

## Gems/Libraries
