# frozen_string_literal: true

module Api
  class ProjectsController < BaseController
    before_action :authenticate_user!
    before_action :set_project, except: %i[index create]

    def index
      projects = current_user.projects.map do |pr|
        {
          name: pr.name,
          id: pr.id,
          photo: ActionController::Base.helpers.asset_url(Project.random_photo),
          gradient: Project.random_gradient,
          updated_at: pr.updated_at,
          created_at: pr.created_at
        }
      end
      render json: projects
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
