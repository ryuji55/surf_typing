Rails.application.routes.draw do
  root 'static_pages#top'
  get 'index', to: 'static_pages#index'
end
