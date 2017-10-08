class ImagesController < ApplicationController

  def index
    images = Image.where( { property: params[:property_id] } )
    render :json => images
  end

end
