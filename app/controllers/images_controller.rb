class ImagesController < ApplicationController
  def new
  	@image = Image.new
  end

  def create
    semaphore = Mutex.new
  	@property = Property.find(params[:property_id])
    
    @image = params[:image][:image].each do |img|
      Thread.new do
        semaphore.synchronize do
          @property.images.create(:image => img)
        end
      end
    end
    
    if @image
  		redirect_to property_path(@property), :notice => "Your Image(s) are added Successfully. "
  	else
  		redirect_to property_path(@property), :notice => "Some Problem Occured. "  		
  	end
  end

  def image_params
  	params.require(:image).permit(:image)
  end	
end
