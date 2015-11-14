# Phase 5: Reminders and Garbage Collection

## Rails
### Models
* Photo
* Like

### Controllers
* Api::PhotosController (create, destroy, index, show, update)
* Api::LikesController (create, destroy, index, show, update)

### Views
* photos/index.json.jbuilder
* photos/show.json.jbuilder

## Flux
### Views (React Components)
* PhotoViewer
  - Carousel
    * Photo
      - PhotoDetail

### Stores
* Photo

### Actions
* ApiActions.receiveAllReminders
* ApiActions.receiveSingleReminder
* ApiActions.deleteReminder

### ApiUtil
* ApiUtil.fetchAllReminders
* ApiUtil.fetchSingleReminder
* ApiUtil.createReminder
* ApiUtil.updateReminder
* ApiUtil.destroyReminder

## Gems/Libraries
Paperclip
