# frozen_string_literal: true

module Api
  class ProjectsController < BaseController
    before_action :authenticate_user!
    before_action :set_project, except: %i[index create]
    MOCK = 'https://previews.123rf.com/images/fotojagodka/fotojagodka2006/fotojagodka200600028/150450124-happy-cat-breed-scottish-fold-over-a-white-banner.jpg'

    def index
      render json: current_user.projects.map do |pr|
        {
          id: pr.id,
          photo: ActionController::Base.helpers.asset_path(Project.random_photo),
          gradient: Project.random_gradient,
          updated_at: pr.updated_at,
          created_at: pr.created_at
        }
      end
    end

    def update
      @project.update(project_params)
      render json: { status: 'success' }
    end

    def show
      render json: @project
    end

    def create
      project = current_user.projects.create(project_params)
      render json: project
    end

    private

    def set_project
      @project = current_user.projects.find(params[:id])
    end

    def project_params
      canvas_params =
        params.require(:project)
              .permit![:canvas]
              .try(:permit!).try(:keys)

      params
        .require(:project)
        .permit(
          :name,
          airtable_credentials: %i[api_key base],
          canvas: {}
        )
    end
  end
end
