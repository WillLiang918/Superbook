class DemoUsers
  DEMO_USERS = Set.new([
    "Anna Marie",
    "Bruce Banner",
    "Bruce Wayne",
    "Cain Marko",
    "Charles Xavier",
    "Clark Kent",
    "Curtis Connors",
    "En Sabah Nur",
    "Eric Brooks",
    "Erik Lehnsherr",
    "Felicia Hardy",
    "Hank Mccoy",
    "Harvey Dent",
    "James Howlett",
    "James Rhodes",
    "Jean Gray",
    "Jimmy Olsen",
    "Kitty Pryde",
    "Lex Luthor",
    "Lois Lane",
    "Maryjane Watson",
    "Matt Murdock",
    "Natasha Romanova",
    "Nick Fury",
    "Norman Osborn",
    "Ororo Munroe",
    "Oswald Cobblepot",
    "Peter Parker",
    "Peter Quill",
    "Ras Al Ghul",
    "Raven Darkholme",
    "Reed Richards",
    "Remy Lebeau",
    "Scott Summers",
    "Selina Kyle",
    "Steve Rogers",
    "Thor Odinson",
    "Tony Stark",
    "Victor Fries",
    "Wilson Fisk"
  ])

  @demo_user_names = DEMO_USERS.dup

  def self.all
    @demo_user_names.to_a.sort
  end

  def self.add(name)
    @demo_user_names.add(name) if DEMO_USERS.include?(name)
  end

  def self.remove(name)
    @demo_user_names.delete(name)
  end
end
