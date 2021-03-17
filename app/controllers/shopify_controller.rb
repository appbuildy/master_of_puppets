class ShopifyController < ApplicationController
  layout nil

  def show
    response.headers.delete "X-Frame-Options"
  end
end
