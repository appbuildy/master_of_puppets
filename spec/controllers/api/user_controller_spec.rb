require 'rails_helper'

describe Api::UserController do
  describe 'PATCH #update' do
    let(:user) { create :user }

    before do
      sign_in user
    end

    it 'updates user attributes' do
      patch :update

      expect(response.status).to eq(200)
    end
  end
end
