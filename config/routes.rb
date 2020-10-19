# frozen_string_literal: true

Rails.application.routes.draw do
  devise_for :users,
             path: '',
             path_names: {
               sign_in: 'login',
               sign_out: 'logout',
               registration: 'signup'
             },
             controllers: {
               sessions: 'sessions',
               registrations: 'registrations'
             }
  root to: 'root#show'
  resource :upvoty, only: %i[show], controller: 'upvoty'

  get '/me', to: 'me#show'
  resources :projects, only: %i[show] do
    resource :tokens, controller: 'projects/token'
  end

  namespace :api, defaults: { format: :json } do
    resource :user, only: %i[update], controller: 'user'
    resources :projects
    resources :airtable_tables, only: %i[index]
  end
end
