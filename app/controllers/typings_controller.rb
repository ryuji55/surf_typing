class TypingsController < ApplicationController
  def index
    @count = params[:count]
    @missCount = params[:missCount]
  end

  def new; end
end
