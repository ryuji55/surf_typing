Rails.application.routes.draw do
  root 'static_pages#top'
  resources :typings, only: %i[index new]
  get 'terms', to: 'static_pages#terms'
  get 'privacy', to: 'static_pages#privacy'
end
