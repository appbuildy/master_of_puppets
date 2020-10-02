# frozen_string_literal: true

module Api
  class ProjectsController < BaseController
    before_action :authenticate_user!
    MOCK = 'https://previews.123rf.com/images/fotojagodka/fotojagodka2006/fotojagodka200600028/150450124-happy-cat-breed-scottish-fold-over-a-white-banner.jpg'

    def index
      render json: current_user.projects.map do |pr|
        pr.attributes.merge(photo: MOCK)
      end
    end

    def create
      project = current_user.projects.create(project_params)
      render json: project
    end

    private

    def project_params
      params
        .require(:project)
        .permit(:name, :airtable_credentials)
    end
  end
end
