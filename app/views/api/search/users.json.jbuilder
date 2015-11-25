json.users do
  json.array! json.partial! 'api/users/user', collection: @users, as: :user
end
