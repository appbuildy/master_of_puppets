class AirtableTables
  CSS = '.flex.items-center.max-width-2.no-user-select.pr2.pl2'

  def initialize(shared_url = 'https://airtable.com/shrRZPMRGEuB2PJgR/')
    @shared_url = shared_url
  end

  def call
    options = Selenium::WebDriver::Chrome::Options.new(args: ['headless', 'no-sandbox', 'disable-dev-shm-usage'])
    driver = Selenium::WebDriver.for(:chrome, options: options)
    driver.get(shared_url)
    elements = driver.find_elements(css: CSS)

    elements.map do |el|
      next if el.text.blank?
      OpenStruct.new(
        name: el.text,
        url: el.attribute('href')
      )
    end.compact
    driver.quit
  end

  attr_reader :shared_url
end
