class AddFbFieldsToUser < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :fb_id, :string
  end
end
