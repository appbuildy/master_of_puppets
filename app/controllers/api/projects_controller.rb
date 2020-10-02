# frozen_string_literal: true

module Api
  class ProjectsController < BaseController
    before_action :authenticate_user!
    MOCK = 'https://previews.123rf.com/images/fotojagodka/fotojagodka2006/fotojagodka200600028/150450124-happy-cat-breed-scottish-fold-over-a-white-banner.jpg'

    def index
      render json: current_user.projects.map do |pr|
        {
          id: pr.id,
          photo: MOCK,
          updated_at: pr.updated_at,
          created_at: pr.created_at
        }
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
