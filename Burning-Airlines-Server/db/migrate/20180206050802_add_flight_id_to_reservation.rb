class AddFlightIdToReservation < ActiveRecord::Migration[5.1]
  def change
    add_column :reservations, :flight_id, :integer
  end
end
