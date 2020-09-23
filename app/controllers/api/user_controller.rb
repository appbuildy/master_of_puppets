# frozen_string_literal: true

module Api
  class UserController < BaseController
    before_action :authenticate_user!

    def update
      render json: current_user
    end
  end
end
