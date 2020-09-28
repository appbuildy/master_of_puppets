module Api
  class AirtableTablesController < BaseController
    def index
      render json: AirtableTables.new.call.map(&:to_h)
    end
  end
end
