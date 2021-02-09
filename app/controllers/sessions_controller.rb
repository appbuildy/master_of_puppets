class SessionsController < Devise::SessionsController
  respond_to :json

  def create
    self.resource = AuthenticationService.new(params).call
    if resource
      sign_in resource
      cookies[:jwt] = request.env['warden-jwt_auth.token']

      respond_with resource, location: after_sign_in_path_for(resource)
    else
      render json: { error: 'invalid login or password' }, status: 422
    end
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
