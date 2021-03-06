class SpeakersController < ApplicationController
  def show
    @speaker = Speaker.find(params[:id])
    
    render json: @speaker.as_json(except: [:picture, :email])
  end
end
