json.set! message.id do
  json.(message, :id, :sender_id, :receiver_id, :created_at, :updated_at, :body)
end
