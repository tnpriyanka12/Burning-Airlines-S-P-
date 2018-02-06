class AddFlightIdToAirplane < ActiveRecord::Migration[5.1]
  def change
    add_column :airplanes, :flight_id, :integer
  end
end
