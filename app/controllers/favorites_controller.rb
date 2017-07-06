class FavoritesController < ApplicationController
  def index
  	@user = current_user
  	@properties = @user.favorites.pluck(:property_id)
  	@properties = Kaminari.paginate_array(@properties).page(params[:page]).per(5)
  end
end
