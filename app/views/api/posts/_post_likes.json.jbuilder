json.likes do
  json.post do
    posts.each do |post|
      json.set! post.id, post.likes.map(&:user_id)
    end
  end

  json.comment do
    posts.each do |post|
      post.comments.each do |comment|
        json.set! comment.id, comment.likes.map(&:user_id)
      end
    end
  end
end
