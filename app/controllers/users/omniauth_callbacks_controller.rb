module Users
  class OmniauthCallbacksController < Devise::OmniauthCallbacksController
    def facebook
      @user = User.from_omniauth(request.env["omniauth.auth"])

      if @user.persisted?
        sign_in(resource_name, resource)

        jwt = request.env['warden-jwt_auth.token']
        redirect_to "build.appbuildy.com/oauth?jwt=#{jwt}"
      else
        session["devise.facebook_data"] = request.env["omniauth.auth"].except(:extra) # Removing extra as it can overflow some session stores
        redirect_to new_user_registration_url
      end
    end

    def failure
      redirect_to root_path
    end
  end
end