# frozen_string_literal: true

module Api
  class ProjectsController < BaseController
    before_action :authenticate_user!

    def index
      render json: mock_projects
    end

    def create
      project = current_user.projects.create(project_params)
      render json: project
    end

    private

    def mock_projects
      [
        { name: 'Name 1', updated_at: 10.hours.ago, photo: 'https://previews.123rf.com/images/fotojagodka/fotojagodka2006/fotojagodka200600028/150450124-happy-cat-breed-scottish-fold-over-a-white-banner.jpg' },
        { name: 'Name 2', updated_at: 10.hours.ago, photo: 'https://previews.123rf.com/images/fotojagodka/fotojagodka2006/fotojagodka200600028/150450124-happy-cat-breed-scottish-fold-over-a-white-banner.jpg' },
        { name: 'Name 3', updated_at: 10.hours.ago, photo: 'https://previews.123rf.com/images/fotojagodka/fotojagodka2006/fotojagodka200600028/150450124-happy-cat-breed-scottish-fold-over-a-white-banner.jpg' }
      ]
    end

    def project_params
      params
        .require(:project)
        .permit(:name, :airtable_credentials)
    end
  end
end
