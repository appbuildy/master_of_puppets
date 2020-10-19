FactoryBot.define do
  factory :project do
    name { "MyString" }
    airtable_credentials  {}
    slug { Haikunator.haikunate }
  end
end
