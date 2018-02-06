class CreateReservations < ActiveRecord::Migration[5.1]
  def change
    create_table :reservations do |t|
      t.string :date
      t.integer :reservation_No

      t.timestamps
    end
  end
end
