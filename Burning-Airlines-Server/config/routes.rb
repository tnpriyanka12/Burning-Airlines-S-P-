Rails.application.routes.draw do
  resources :users
  resources :reservations
  resources :flights
  post  '/search' => 'flights#search'
  resources :airplanes
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
