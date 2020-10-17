class UpvotyController < ApplicationController
  layout 'upvoty'

  def show
    response.headers.delete "X-Frame-Options"
  end
end
