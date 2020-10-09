# frozen_string_literal: true

require 'rails_helper'

describe Api::ProjectsController do
  let(:user) { create :user }

  before do
    sign_in user
  end

  describe 'PATCH #update' do
    let(:project) { create :project, user: user }

    subject do
      patch :update, params: {
        id: project.id,
        project: {
          name: 'Test',
          canvas: {
            screens: [
              elements: {
                name: '3222'
              }
            ]
          },
          airtable_credentials: {
            api_key: 'key23',
            base: 'base'
          }
        }
      }
    end

    it 'updates project' do
      subject
      expect(project.reload.canvas['screens']).not_to be_blank
    end
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

    it 'fills airtable_credentials' do
      subject
      expect(user.projects.last.airtable_credentials['api_key']).to eq('key23')
    end
  end
end
