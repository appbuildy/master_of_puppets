require 'rails_helper'

describe Api::UserController do
  describe 'PATCH #update' do
    let(:user) { create :user }

    before do
      sign_in user
    end

    subject do
      patch :update, params: {
        user: {
          airtable_api_key: '322'
        }
      }
    end

    it 'updates user attributes' do
      expect { subject }.to(change { user.reload.airtable_api_key })
      expect(response.status).to eq(200)
    end
  end
end
