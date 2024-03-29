# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.destroy_all

seed_image_root = "#{Rails.root}/app/assets/images/seeds/"

["male", "female"].each do |sex|
  avatar_root = seed_image_root + "#{sex}/avatars/"
  cover_root  = seed_image_root + "#{sex}/covers/"

  Dir.foreach(avatar_root) do |path|
    next if path.starts_with?(".")

    name_path, extension = path.split(".")
    name_parts = name_path.split("_").map(&:capitalize)
    first_name = name_parts.first
    last_name = name_parts.drop(1).join(" ")
    email = name_path.gsub("_", ".") + "@gmail.com"
    birthday = 50.years.ago
    avatar_path = avatar_root + path
    cover_path = Dir.glob(cover_root + name_path + ".*").first

    user = User.create!(
      first_name: first_name,
      last_name: last_name,
      email: email,
      password: "password",
      sex: sex,
      birthday: birthday,
      avatar: File.new(avatar_path),
      cover: File.new(cover_path)
    )
  end
end

User.all.each do |user|
  User.where.not(id: user.id).sample(30).each do |other_user|
    next if Friendship.find_by(user_id: user.id, friend_id: other_user.id)

    request = FriendRequest.find_by(sender_id: other_user.id, receiver_id: user.id)
    if request.nil?
      FriendRequest.create!(sender_id: user.id, receiver_id: other_user.id)
    else
      request.accept!
    end
  end
end


timeline_posts = {
  "Bruce Banner"    => ["You wouldn't like to see me angry."],
  "Bruce Wayne"     => ["It's not who I am underneath... but what I *do*... that defines me."],
  "Cain Marko"      => ["I'm the juggernaut B****!"],
  "Charles Xavier"  => ["I've fallen and I can't get up!"],
  "Clark Kent"      => [
                        "Aren't my glasses just the coolest?",
                        "Sometimes I feel like I'm an alien."
                       ],
  "Curtis Connors"  => ["Ready to play God?"],
  "En Sabah Nur"    => ["I am APOCALYPSE! Look upon the future, AND TREMBLE! All who oppose me... shall be crushed!"],
  "Eric Brooks"     => ["It's open season on all suckheads."],
  "Erik Lehnsherr"  => ["Humans, you're time has come...", "Meet the next phase of evolution!"],
  "Hank Mccoy"      => ["Oh my stars and garters!"],
  "Harvey Dent"     => [
                         "The night is darkest just before the dawn. And I promise you, the dawn is coming.",
                         "You either die a hero or you live long enough to see yourself become the villain."
                       ],
  "James Howlett"   => ["You picked the wrong timeline, bub."],
  "James Rhodes"    => ["I'm handling the hero chores these days. You might want to write that down somewhere --- so you remember it."],
  "Jimmy Olsen"     => ["He wears red and blue, flies, crime rate's plummeted since he's risen from the grave. Gosh, you think Superman's a zombie?"],
  "Lex Luthor"      => ["Anyone got kryptonite? I'm buying."],
  "Matt Murdock"    => ["This is a city born of heroes, that one man CAN make a difference."],
  "Nick Fury"       => ["I still believe in heroes."],
  "Norman Osborn"   => ["The world is a mess and the world needed me to fix it."],
  "Oswald Cobblepot"=> ["I'm the King of Gotham!"],
  "Peter Parker"    => [
                        "With great power comes great responsibility. RIP Uncle Ben.",
                        "Just got bitten by a radioactive spider."
                       ],
  "Peter Quill"     => ["I come from Earth, a planet of outlaws. My name is Peter Quill. There's one other name you may know me by. Star-Lord."],
  "Ras Al Ghul"     => ["Always mind your surroundings."],
  "Reed Richards"   => ["This was the world that I had created. I know what I have to do to fix it...to make things right. There's no problem that can't be solved."],
  "Remy Lebeau"     => ["Every man has a price to charge and a price to pay."],
  "Scott Summers"   => ["The Professor used to tell me. The most important part of leading wasn't personality, tactics, or training. It was doing whatever it takes to get your team back alive."],
  "Steve Rogers"    => ["I punched out Adolf Hitler 200 times."],
  "Thor Odinson"    => ["This mortal form has grown weak. I need sustenance!"],
  "Tony Stark"      => ["Woohoo! Just saved the world from Ultron. Party at my place!!"],
  "Victor Fries"    => ["Tonight, hell freezes over!"],
  "Wilson Fisk"     => ["Problems are just opportunities that haven't presented themselves."],

  "Anna Marie"      => ["I wish there was someone I could touch without hurting them."],
  "Felicia Hardy"   => ["For years I was the little thief pretending to be a socialite. But this... This is new. I'm done pretending. This cat's going to be a queen. Queen of thieves. Queen of crime. Queen of this whole town! And nothing and no one are going to get in my way!"],
  "Jean Gray"       => ["Sometimes I wish I couldn't read minds."],
  "Kitty Pryde"     => ["Everything is so fragile. There is so much conflict, there is so much pain... you keep waiting for the dust to settle and then you realize this is it; the dust is your life going on"],
  "Lois Lane"       => ["If only I knew who Superman really was"],
  "Maryjane Watson" => ["Being married to Spider-Man is worse than being married to a policeman. At least a policeman's wife would get a call in the middle of night."],
  "Natasha Romanova"=> ["First rule of going on the run is: 'Don't run. Walk.'"],
  "Ororo Munroe"    => [
                        "RAIN RESPOOOND TO MYYY COMMAAAAND... A WAAARD OF RAAAIN TO DRENCH THE FLAAMES!!",
                        "I am the gathering tempest. I am the howling wind. The roar of the rain. The voice of THUNDER!"
                      ],
  "Raven Darkholme" => ["I know what I have to do. It's us, or them..."],
  "Selina Kyle"     => ["I'm the coolest crazy cat lady you ever met."]
}

timeline_posts.each do |name, posts|
  user = User.find_by_name(name)
  posts.each do |post_body|
    Post.create!(body: post_body, author: user, receiver: user) if post_body.present?
  end
end

posts = [
  {
    author_name: "Remy Lebeau",
    receiver_name: "Anna Marie",
    body: "You can drain my energy any time, Chère. Gambit has plenty."
  },
  {
    author_name: "Selina Kyle",
    receiver_name: "Bruce Wayne",
    body: "There's a storm coming, Mr. Wayne. You and your friends better batten down the hatches, because when it hits, you're all gonna wonder how you ever thought you could live so large and leave so little for the rest of us."
  }
]

posts.each do |post|
  author = User.find_by_name(post[:author_name])
  receiver = User.find_by_name(post[:receiver_name])
  if author.id != receiver.id && Friendship.find_by(user_id: author.id, friend_id: receiver.id).nil?
    author.friend!(receiver)
  end

  Post.create!(author: author, receiver: receiver, body: post[:body])
end

comments = {
  "Just got bitten by a radioactive spider." => {author_name: "Maryjane Watson", body: "You should probably get that checked out."},
  "I wish there was someone I could touch without hurting them." => {author_name: "Remy Lebeau", body: "Here I am Chère!"},
  "Sometimes I wish I couldn't read minds." => {author_name: "James Howlett", body: "You can read mine any time."},
  "Sometimes I wish I couldn't read minds." => {author_name: "Scott Summers", body: "Watch it Logan."},
  "Sometimes I wish I couldn't read minds." => {author_name: "James Howlett", body: "You want some bub? Come and get it."}
}

comments.each do |comment_body, comment_attributes|
  post = Post.find_by(body: comment_body)
  author = User.find_by_name(comment_attributes[:author_name])
  if post.receiver_id != author.id && Friendship.find_by(user_id: post.receiver_id, friend_id: author.id).nil?
    author.friend!(post.receiver)
  end

  Comment.create!(commentable: post, author: author, body: comment_attributes[:body])
end


users = User.all
Post.all.each do |post|
  num_likes = (rand * 10).floor
  users.sample(num_likes).each do |user|
    Like.create!(user: user, likeable: post)
  end
end

Comment.all.each do |comment|
  num_likes = (rand * 3).floor
  users.sample(num_likes).each do |user|
    Like.create!(user: user, likeable: comment)
  end
end

nicknames = {
  "Bruce Banner"    => ["Hulk"],
  "Bruce Wayne"     => ["Batman", "Dark Knight", "Inspector"],
  "Cain Marko"      => ["Juggernaut"],
  "Charles Xavier"  => ["Professor X"],
  "Clark Kent"      => ["Superman", "Man of Steel"],
  "Curtis Connors"  => ["Lizard"],
  "En Sabah Nur"    => ["Apocalypse"],
  "Eric Brooks"     => ["Blade", "Daywalker"],
  "Erik Lehnsherr"  => ["Magneto"],
  "Hank Mccoy"      => ["Beast"],
  "Harvey Dent"     => ["Two Face", "White Knight"],
  "James Howlett"   => ["Weapon X", "Wolverine"],
  "James Rhodes"    => ["War Machine"],
  "Matt Murdock"    => ["Daredevil"],
  "Nick Fury"       => ["Bad Motherf*****"],
  "Norman Osborn"   => ["Green Goblin"],
  "Oswald Cobblepot"=> ["Penguin"],
  "Peter Parker"    => ["Spider Man", "Spidey"],
  "Peter Quill"     => ["Star Lord"],
  "Reed Richards"   => ["Mr Fantastic"],
  "Remy Lebeau"     => ["Gambit"],
  "Scott Summers"   => ["Cyclops"],
  "Steve Rogers"    => ["Captain America"],
  "Thor Odinson"    => ["God of Thunder"],
  "Tony Stark"      => ["Iron Man"],
  "Victor Fries"    => ["Mr Freeze"],
  "Wilson Fisk"     => ["Kingpin"],
  "Anna Marie"      => ["Rogue"],
  "Felicia Hardy"   => ["Black Cat"],
  "Jean Gray"       => ["Phoenix"],
  "Kitty Pryde"     => ["Shadowcat"],
  "Natasha Romanova"=> ["Black Widow"],
  "Ororo Munroe"    => ["Storm", "Weather Witch"],
  "Raven Darkholme" => ["Mystique"],
  "Selina Kyle"     => ["Catwoman"]
}

nicknames.each do |user_name, names|
  user = User.find_by_name(user_name)
  user.update_nicknames!(names) if user
end

abilities = {
  "Bruce Banner"    => ["Super Strength"],
  "Bruce Wayne"     => ["Gadgets", "Stealth", "Kung Fu"],
  "Cain Marko"      => ["Super Strength", "Invulnerable"],
  "Charles Xavier"  => ["Psychic"],
  "Clark Kent"      => ["Super Strength", "Super Speed", "Ice Breath", "Heat Vision"],
  "En Sabah Nur"    => ["Immortality"],
  "Eric Brooks"     => ["Kung Fu"],
  "Erik Lehnsherr"  => ["Magnetism"],
  "Hank Mccoy"      => ["Agility", "Furriness"],
  "James Howlett"   => ["Healing", "Adamantium"],
  "James Rhodes"    => ["Weapons"],
  "Matt Murdock"    => ["Super Hearing", "Kung Fu"],
  "Nick Fury"       => ["Negotiation"],
  "Norman Osborn"   => ["Super Strength"],
  "Peter Parker"    => ["Spider Sense", "Spider Strength", "Crawling", "Web", "Agility"],
  "Reed Richards"   => ["Stretch"],
  "Remy Lebeau"     => ["Explosion"],
  "Scott Summers"   => ["Energy Beam"],
  "Thor Odinson"    => ["Magic Hammer", "God Strength"],
  "Tony Stark"      => ["Charisma"],
  "Anna Marie"      => ["Power Absorbsion"],
  "Jean Gray"       => ["Telekenesis", "Psychic"],
  "Kitty Pryde"     => ["Phasing", "Time Travel"],
  "Natasha Romanova"=> ["Negotiation"],
  "Ororo Munroe"    => ["Weather Manipulation"],
  "Raven Darkholme" => ["Shapeshifting"]
}

abilities.each do |user_name, names|
  user = User.find_by_name(user_name)
  user.update_abilities!(names) if user
end
