json.sent_requests @sent_requests.map(&:receiver_id)
json.received_requests @requesters.map(&:id)
json.users do
  @requesters.each do |requester|
    json.set! requester.id do
      json.partial! 'api/users/user', user: requester
    end
  end
end
