class PropertiesController < ApplicationController
  def index
  	@properties = Property.order(:id => :DESC).where(isPublished: 1)
  	@properties = Kaminari.paginate_array(@properties).page(params[:page]).per(5)
  	@count = 0
  end

  def mark_favorite
    @favorite  = Favorite.new(:property_id => params[:id])
    @favorite.user_id = current_user.id
    if @favorite.save
      redirect_to property_path(@favorite.property_id), :notice => "You have marked this property as Favorite. "
    else
      redirect_to property_path(@favorite.property_id), :notice => "Your Property is not Marked as Favorite. "
    end 
  end

  def new
  	if user_signed_in?
  		@property = Property.new
  	else
  		redirect_to page_path('index'), :notice => "You must be Logged in to Submit Property "
  	end		
  end

  def create
  	@user = current_user
  	@property =  @user.properties.build(property_params)
  	if @property.save
  		redirect_to property_path(@property), :notice => "Your Property has been Saved. "
  	else
  		render 'new'	
  	end 
  end	

  def edit
  	@property = Property.find(params[:id])
  	authorize! :update, @property 
  end

  def update
  	@property = Property.find(params[:id])
  	authorize! :update, @property

    if @property.update_attributes(property_params)
  	  redirect_to property_path, :notice => "Your Property has been Updated. "
    else 
  	  render "edit"
  	end
  end	

  def show
  	@property = Property.find(params[:id])
  end

  def destroy
  	@property = Property.find(params[:id])
  	authorize! :destroy, @property
  	@property.destroy
  	redirect_to properties_path, :notice => "Your Property has been Deleted. "
  end	

  def property_params
	params.require(:property).permit!
  end
end
