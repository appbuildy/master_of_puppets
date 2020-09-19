# frozen_string_literal: true
#
class AuthenticationService
  attr_reader :params

  def initialize(params = {})
    @params = params
  end

  def call
    if params[:facebook][:access_token]
      FacebookAuthentication.new(params[:facebook][:access_token]).call
    end
  end

  class FacebookAuthentication
    attr_reader :access_token

    def initialize(access_token)
      @access_token = access_token
    end

    def call
      is_valid =
        Koala::Facebook::API
        .new(access_token)
        .debug_token(app_access_token['access_token']).dig('data', 'is_valid')

      return unless is_valid
      user_data =
        Koala::Facebook::API
        .new(access_token)
        .get_object('me', fields: 'name,first_name,last_name,email')

      auth_user(user_data)
    end

    def auth_user(user_data)
      User.where(
        fb_id: user_data['id'],
        email: user_data['email']
      ).first_or_create do |user|
        user.assign_attributes(
          password: SecureRandom.hex,
          first_name: user_data['first_name'],
          last_name: user_data['last_name']
        )
      end
    end

    private

    def app_access_token
      @app_access_token ||= Koala::Facebook::OAuth.new.get_app_access_token_info
    end
  end
end
