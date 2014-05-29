class Api::CommentsController < ApplicationController
  def create
    @comment = Comment.new(comment_params)
    @comment.user_id = current_user.id

    if @comment.save
      render partial: 'comments/comment', locals: { comment: @comment }
    else
      render json: { errors: @comment.errors.messages.keys }, status: 422
    end
  end

  def destroy
    @comment = Comment.find(params[:id])
    @comment.destroy

    render json: {}
  end

  private

  def comment_params
    params.require(:comment).permit(:commentable_id, :commentable_type, :body)
  end
end
