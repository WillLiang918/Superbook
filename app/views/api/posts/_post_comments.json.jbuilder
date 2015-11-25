json.comments do
  posts.each do |post|
    nested_comments = post.comments.reduce(Hash.new { |h, k| h[k] = [] }) do |accum, comment|
      accum[comment.parent_id] << comment; accum
    end

    if nested_comments.size == 0
      json.set! post.id, {}
    else
      json.set! post.id do
        nested_comments.each do |parent_id, comments|
          json.set! (parent_id || "null") do
            json.array! comments
          end
        end
      end
    end
  end
end
