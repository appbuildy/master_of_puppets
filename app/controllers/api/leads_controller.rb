# frozen_string_literal: true

module Api
  class LeadsController < BaseController
    def create
      Lead.create(user_params.slice(:role, :need, :email).to_h)
    end

    private

    def user_params
      params.permit!
    end
  end
end
