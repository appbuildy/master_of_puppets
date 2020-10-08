class MeController < ApplicationController
  before_action :authenticate_user!

  def show
    render json: current_user.attributes.merge(
      tables: AirtableTables.new.call.map(&:to_h),
      name: "#{current_user.first_name} #{current_user.last_name}"
    )
  end
end
