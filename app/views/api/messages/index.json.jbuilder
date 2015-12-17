current_user.sent_messages.each do |message|
  json.partial! "api/messages/message", locals: {message: message}
end

current_user.received_messages.each do |message|
  json.partial! "api/messages/message", locals: {message: message}
end
