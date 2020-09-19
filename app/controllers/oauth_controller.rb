class OauthController < Devise::RegistrationsController
  respond_to :json

  def facebook
    #@request.env["devise.mapping"] = Devise.mappings[:user]
    sign_in User.last

    render json: User.last
  end
end
