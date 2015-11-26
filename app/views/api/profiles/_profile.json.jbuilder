json.profile do
  json.(profile, :id, :user_id, :bio, :phone, :address, :work, :hometown)
  json.nicknames do
    json.array! profile.nicknames
  end
  json.abilities do
    json.array! profile.abilities
  end
end
