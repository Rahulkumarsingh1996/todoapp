class Api::V1::TodosController < ApplicationController
  
  before_action :set_todo, only: %i[show destroy]

  def index
    todo = Todo.all.order(created_at: :desc)
    render json: todo
  end

  def create
    todo = Todo.create!(todo_params)
    if todo
      render json: todo
    else
      render json: todo.errors
    end
  end

  def show
    render json: @todo
  end

  def destroy
    @todo&.destroy
    render json: { message: 'Todo deleted!' }
  end

  private

  def todo_params
    params.permit(:title, :description)
  end

  def set_todo
    @todo = Todo.find(params[:id])
  end
end
