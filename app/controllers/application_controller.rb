class ApplicationController < ActionController::Base
  skip_before_action :verify_authenticity_token
  before_filter :add_www_subdomain

  def add_www_subdomain
    unless /^www/.match(request.host)
      redirect_to("#{request.protocol}x.com#{request.request_uri}",
                  :status => 301)
    end
  end

  def render_resource(resource)
    if resource.errors.empty?
      render json: resource
    else
      validation_error(resource)
    end
  end

  def validation_error(resource)
    render json: {
      errors: [
        {
          status: '400',
          title: 'Bad Request',
          detail: resource.errors,
          code: '100'
        }
      ]
    }, status: :bad_request
  end
end
