# frozen_string_literal: true

module Api
  class ProjectsController < BaseController
    before_action :authenticate_user!, except: %i[show]
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
      project = @project
        .attributes
        .merge(
          public_url: project_url(id: @project.id, preview_mode: 'enabled', project_id: @project.slug),
          tables: AirtableTables.new(@project.airtable_credentials.to_h['base']).call.map(&:to_h),
          airtable_credentials: AirtableCredentials.new(@project.airtable_credentials).to_hash
        )
      render json: project
    end

    def create
      project = current_user.projects
        .create(project_params.merge(slug: Haikunator.haikunate))

      render json: project
    end

    private

    def set_project
      @project =
        if current_user
          current_user.projects.find_by(id: params[:id]) || Project.find_by(slug: params[:id])
        else
          Project.find_by(slug: params[:id])
        end
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
