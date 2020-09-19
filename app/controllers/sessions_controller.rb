class SessionsController < Devise::SessionsController
  respond_to :json

  def create
    super
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
