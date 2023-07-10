# Rails.application.routes.draw do
#   namespace :api do
#     namespace :v1 do
#       get 'todos/index'
#       post 'todos/create'
#       get '/show/:id', to: 'todos/show'
#       # get 'todos/destroy'
#       delete '/destroy/:id', to: 'todos#destroy'
#     end
#   end
#   root 'homepage#index'
#   # get '/*path' => 'homepage#index'
#   # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

#   # Defines the root path route ("/")
#   # root "articles#index"
# end


Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'todos/index'
      post 'todos/create'
      get '/show/:id', to: 'todos#show'
      delete '/destroy/:id', to: 'todos#destroy'
    end
  end
  root 'homepage#index'
  get '/*path' => 'homepage#index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
