class CreateFlights < ActiveRecord::Migration[5.1]
  def change
    create_table :flights do |t|
      t.integer :flight_No
      t.string :date
      t.text :origin
      t.text :destination
      t.text :plane

      t.timestamps
    end
  end
end
