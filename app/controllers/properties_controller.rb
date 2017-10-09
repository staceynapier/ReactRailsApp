class PropertiesController < ApplicationController

  def show_params
    params.require(:show).permit([:location, :bedrooms, :publicRooms, :bathrooms, :price, :description, :furnished, :images])
  end

  def index
    properties = Property.all
    render :json => properties.as_json({ include: :images })
  end


end
