Rails.application.routes.draw do
  root 'static_pages#root'

  resources :users, only: [:new, :create]
  resources :sessions, only: [:create]
  get 'login' => 'users#new'
  get 'signup' => 'users#new'
  delete 'logout' => 'sessions#destroy'

  namespace :api, default: {format: 'json'} do
    resources :posts, only: [:index, :show, :create, :update, :destroy]
    resources :users, only: [:show, :index] do
      resources :friendships, only: [:index]
      delete 'friendships' => 'friendships#destroy'
    end

    resources :friend_requests, only: [:index]
    resources :friends, only: [:index]
    resources :comments, only: [:create, :destroy, :update]

    post   'friend_requests/:user_id/accept' => 'friend_requests#accept'
    post   'friend_requests/:user_id/send'   => 'friend_requests#create'
    delete 'friend_requests/:user_id/delete' => 'friend_requests#deny'
    delete 'friend_requests/:user_id/cancel' => 'friend_requests#cancel'

    post   'likes' => 'likes#like'
    delete 'likes' => 'likes#unlike'

    get 'search/users'         => 'serach#user_search'
    get 'search/users_preview' => 'search#user_search_preview'
  end

  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  # root 'welcome#index'

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
