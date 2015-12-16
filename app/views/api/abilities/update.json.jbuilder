json.set! current_user.id do
  json.array! current_user.abilities(true)
end
