# frozen_string_literal: true

require 'rails_helper'

describe RegistrationsController do
  describe 'POST #create' do
    subject do
      post :create,
           params: { user: { email: 'test@gmail.com', password: 'test21321312312' } }
    end

    before do
      @request.env["devise.mapping"] = Devise.mappings[:user]
    end

    it 'creates user' do

      expect { subject }.to change { User.count }.by(1)
    end

    it 'saves cookie' do
      subject

      expect(cookies['jwt']).
        to be_present
    end
  end
end
