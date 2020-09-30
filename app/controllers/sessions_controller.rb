class SessionsController < Devise::SessionsController
  respond_to :json

  def create
    self.resource = AuthenticationService.new(params).call
    sign_in(resource_name, resource)
    cookies[:jwt] = request.env['warden-jwt_auth.token']

    respond_with resource, location: after_sign_in_path_for(resource)
  end

  private

  def respond_with(resource, _opts = {})
    render json: resource.attributes.merge(
      jwt: request.env['warden-jwt_auth.token']
    )
  end

  def respond_to_on_destroy
    head :no_content
  end
end
