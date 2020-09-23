class AddAirtableApiKeyToUsers < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :airtable_api_key, :string
  end
end
