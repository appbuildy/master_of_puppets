# frozen_string_literal: true

class AirtableCredentials
  attr_reader :credentials

  def initialize(credentials = {})
    @credentials = credentials
  end

  def to_hash
    {
      api_key: credentials['api_key'],
      shared_url: credentials['base'],
      base: base
    }
  end

  private

  def base
    credentials['base']&.split('/').to_a.last
  end
end
