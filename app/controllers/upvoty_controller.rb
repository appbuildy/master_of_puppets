class UpvotyController < ApplicationController
  layout nil

  def show
    response.headers.delete "X-Frame-Options"
    payload = { name: params[:email_id], email: params[:email_id], id: params[:email_id] }
    @jwt = JWT.encode(payload, '5413037c5a37c08a06bd5dc6e5002928', 'HS256')
  end
end
