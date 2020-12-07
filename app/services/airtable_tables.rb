require 'open-uri'

class AirtableTables
  DATA_REGEX = /window.initData = (?<json>.*)/
  SEARCH_TERM = 'window.initData ='

  def initialize(shared_url = 'https://airtable.com/shrRZPMRGEuB2PJgR')
    @shared_url = request_url(shared_url)
  end

  def call
    return [] if shared_url.blank?

    doc = Nokogiri::HTML(RestClient.get(shared_url).body)
    script_tag = doc.search('script')
                    .find { |s| s.text.include?(SEARCH_TERM) }.text
    data = script_tag.match(DATA_REGEX)['json']
    JSON(data[0..-2])['rawTables'].map do |id, table|
      OpenStruct.new(
        id: id,
        name: table['name'],
        base: table['applicationId']
      )
    end
  end

  private

  def request_url(url)
    return url if url.include?('https://airtable.com')

    "https://airtable.com/#{url}"
  end

  attr_reader :shared_url
end
