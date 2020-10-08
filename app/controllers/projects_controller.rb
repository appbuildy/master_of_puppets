class ProjectsController < ApplicationController
  layout 'project'

  def show
    response.headers.delete "X-Frame-Options"
  end
end
