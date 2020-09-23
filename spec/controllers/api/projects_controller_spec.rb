# frozen_string_literal: true

require 'rails_helper'

describe Api::ProjectsController do
  let(:user) { create :user }

  before do
    sign_in user
  end

  describe 'POST #create' do
    subject do
      post :create, params: {
        project: {
          name: 'Test',
          airtable_credentials: {
            api_key: 'key23',
            base: 'base'
          }
        }
      }
    end

    it 'creates project with given params' do
      expect { subject }
        .to(change { user.projects.count })
    end
  end
end
