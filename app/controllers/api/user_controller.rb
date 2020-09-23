# frozen_string_literal: true

module Api
  class UserController < BaseController
    before_action :authenticate_user!

    def update
      current_user.update(user_params)
      render json: current_user
    end

    private

    def user_params
      params
        .require(:user)
        .permit(:airtable_api_key)
    end
  end
end
