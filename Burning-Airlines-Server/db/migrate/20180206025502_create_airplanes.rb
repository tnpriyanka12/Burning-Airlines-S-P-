class CreateAirplanes < ActiveRecord::Migration[5.1]
  def change
    create_table :airplanes do |t|
      t.text :name
      t.integer :rows
      t.text :column

      t.timestamps
    end
  end
end
