class CreateLeads < ActiveRecord::Migration[6.0]
  def change
    create_table :leads do |t|
      t.string :email
      t.string :role
      t.string :need

      t.timestamps
    end
  end
end
