# Phase 5: Comments (1 days)

## Rails
### Models
* Comment

### Controllers
* Api::CommentsController (create, destroy, index, show, update)

### Views
* comments/index.json.jbuilder
* comments/show.json.jbuilder

## Flux
### Views (React Components)
* CommentList
  - CommentItem
  - CommentForm

### Stores
* Comment

### Actions
* ApiActions.receiveAllComments
* ApiActions.receiveSingleComment
* ApiActions.deleteComment

### ApiUtil
* ApiUtil.fetchAllComments
* ApiUtil.fetchSingleComment
* ApiUtil.createComment
* ApiUtil.editComment
* ApiUtil.destroyComment

## Gems/Libraries
