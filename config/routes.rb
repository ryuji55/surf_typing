Rails.application.routes.draw do
  root 'static_pages#top'
  resources :typings, only: %i[index]
  get 'terms', to: 'static_pages#terms'
  get 'privacy', to: 'static_pages#privacy'
  get 'contact', to: 'static_pages#contact'
end
