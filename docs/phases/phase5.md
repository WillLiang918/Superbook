# Phase 5: Reminders and Garbage Collection

## Rails
### Models
* Photo
* Like

### Controllers
* Api::PhotosController (create, destroy, index, show, update)
* Api::LikesController (like, unlike)

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
* ApiActions.receiveAllPhotos
* ApiActions.receiveSinglePhoto
* ApiActions.deletePhoto

### ApiUtil
* ApiUtil.fetchAllPhoto
* ApiUtil.fetchSinglePhoto
* ApiUtil.createPhoto
* ApiUtil.destroyPhoto

## Gems/Libraries
Paperclip
