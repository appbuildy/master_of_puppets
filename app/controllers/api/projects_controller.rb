module Api
  class ProjectsController < BaseController
    before_action :authenticate_user!

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
