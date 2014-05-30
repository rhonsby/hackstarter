json.cache! ['comment', comment.updated_at] do
  json.(comment, :id, :body)
  json.photo_url comment.user.avatar(:small)
  json.author_username comment.user.username
  json.author_name comment.user.name
  json.author_id comment.user.id
  json.created_at comment.created_at
end