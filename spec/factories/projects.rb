FactoryBot.define do
  factory :project do
    name { "MyString" }
    slug { Haikunator.haikunate }
    airtable_credentials { {} }
  end
end
