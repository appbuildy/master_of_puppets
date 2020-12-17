require 'rails_helper'

describe Api::LeadsController do
  describe 'POST #create' do
    subject do
      post :create,
        params: { email: 'test@gg.com', role: 'gf', need: 'ss'}
    end

    it 'creates lead' do
      expect { subject }.to change(Lead, :count)
    end
  end
end
