json.sent_requests @sent_requests.map(&:receiver_id)
json.received_requests @received_requests.map(&:sender_id)
