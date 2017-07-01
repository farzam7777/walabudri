class PropertiesController < ApplicationController
  def index
  	@properties = Property.order(:id => :DESC).all
  	@properties = Kaminari.paginate_array(@properties).page(params[:page]).per(5)
  	@count = 0
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
  		render new	
  	end 
  end	

  def edit
  	@property = Property.find(params[:id])
  end

  def update
  	@property = Property.find(params[:id])

    if @property.update_attributes(property_params)
  	  redirect_to property_path, :notice => "Your Property has been Updated. "
    else 
  	  render "edit"
  	end
  end	

  def show
  	@property = Property.find(params[:id])
  end

  def property_params
	params.require(:property).permit!
  end
end
