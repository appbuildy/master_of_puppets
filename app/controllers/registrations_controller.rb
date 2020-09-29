class RegistrationsController < Devise::RegistrationsController
  respond_to :json

  def create
    build_resource(sign_up_params)

    resource.save
    sign_in resource

    cookies[:jwt] = request.env['warden-jwt_auth.token']
    render_resource(resource)
  end
end
