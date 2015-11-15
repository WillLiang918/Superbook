# Phase 4: Allow Complex Styling in Notes (1 day)

## Rails
### Models
* Message
* Notification

### Controllers
* Api::MessagesController
* Api::NotificationsController

### Views
* messages/index.json.jbuilder
* messages/show.json.jbuilder
* notifications/index.json.jbuilder
* notifications/show.json.jbuilder

## Flux
### Views (React Components)
* Messages
  - ConversationList
    * ConversationItem
  - MessageList
    * MessageItem
    * MessageForm
### Stores
* Message
* Notification

### Actions
* ApiActions.receiveAllMessages
* ApiActions.receiveSingleMessage
* ApiActions.clickConversation
* ApiActions.markNotificationsSeen
* ApiActions.markConversationSeen

### ApiUtil
* ApiUtil.fetchAllMessages
* ApiUtil.fetchSingleMessage
* ApiUtil.createMessage
* ApiUtil.destroyMessage
* ApiUtil.updateMessage
* ApiUtil.markAllInConversationsSeen
* ApiUtil.fetchAllNotifications
* ApiUtil.fetchSingleNotification
* ApiUtil.markAllNotificationsSeen


## Gems/Libraries
Websocket Rails
