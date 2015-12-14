[live]: http://www.superbook.site
[newsfeed]: https://github.com/ryandgoldenberg1/Superbook/raw/master/app/assets/images/readme/newsfeed.png
[timeline]: https://github.com/ryandgoldenberg1/Superbook/raw/master/app/assets/images/readme/timeline.png
[search]: https://github.com/ryandgoldenberg1/Superbook/raw/master/app/assets/images/readme/search.png
[friends]: https://github.com/ryandgoldenberg1/Superbook/raw/master/app/assets/images/readme/friends.png
[image_upload]: https://github.com/ryandgoldenberg1/Superbook/raw/master/app/assets/images/readme/image_upload.png
[token_input]: https://github.com/ryandgoldenberg1/Superbook/raw/master/app/assets/images/readme/token_input.png
[portfolio]: http://www.ryandgoldenberg.com
[infinite_scroll]: http://blog.ryandgoldenberg.com/post/135027241088/infinite-scroll-in-react
[mixins]: https://github.com/ryandgoldenberg1/Superbook/tree/master/app/assets/javascripts/utils/mixins

# Superbook

[Live][live]

A social networking website for super-people inspired by Facebook.

![timeline][timeline]

##Tradeoffs
####Friendships
Friendships are stored as a join table with `user_id` and `friend_id` foreign keys.
Each friendship is duplicated and has a corresponding reverse friendship.
#####Gains
* Reduced code complexity in associations and queries
#####Losses
* Larger database
* Must keep duplicated data in sync
To handle keeping the data in sync it is necessary to wrap the operations in transactions like so:
```ruby
class FriendRequest < ActiveRecord::Base
  def accept!
    ActiveRecord::Base.transaction do
      Friendship.create!(user_id: self.sender_id, friend_id: self.receiver_id)
      Friendship.create!(user_id: self.receiver_id, friend_id: self.sender_id)
      self.destroy!
    end
  end
end
```

##Features
* Rails back end, React.js and Flux front end
* Infinite scroll dynamically fetches data
* Live updates implemented through polling strategy
* Modular design with [mixins][mixins] that share behavior, including Polling and [Infinite Scroll][infinite_scroll]
* Search across multiple attributes and through associations
* Polymorphic associations for Likes and Comments
* Upload images through Paperclip and AWS S3

##Action Shots
####Search  
![search][search]  

####Friends  
![friends][friends]  

####Images  
![image_upload][image_upload]  

####Aliases / Token Inputs  
![token_input][token_input]  


***
Developed by [Ryan Goldenberg][portfolio]
