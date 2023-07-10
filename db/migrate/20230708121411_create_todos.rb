class CreateTodos < ActiveRecord::Migration[7.0]
  def change
    create_table :todos do |t|
      t.string :title, null: false
      t.string :description, null: false
      t.boolean :completed

      t.timestamps
    end
  end
end
