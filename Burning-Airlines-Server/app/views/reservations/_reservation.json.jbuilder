json.extract! reservation, :id, :date, :reservation_No, :created_at, :updated_at
json.url reservation_url(reservation, format: :json)
