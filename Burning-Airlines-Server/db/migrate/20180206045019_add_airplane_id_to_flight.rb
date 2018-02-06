class AddAirplaneIdToFlight < ActiveRecord::Migration[5.1]
  def change
    add_column :flights, :airplane_id, :integer
  end
end
