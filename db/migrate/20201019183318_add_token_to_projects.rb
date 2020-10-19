class AddTokenToProjects < ActiveRecord::Migration[6.0]
  def change
    add_column :projects, :token, :string
  end
end
