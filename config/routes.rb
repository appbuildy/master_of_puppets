Rails.application.routes.draw do
  root to: 'root#show'
  devise_scope :user do
    post '/facebook_user_token', to: 'oauth#facebook'
  end

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
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
