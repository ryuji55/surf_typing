Rails.application.routes.draw do
  root 'static_pages#top'
  resources :typings, only: %i[index new]
end
