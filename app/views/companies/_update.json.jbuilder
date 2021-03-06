json.cache! ['update', update.updated_at, update.comments.length, update.datestring] do
  json.extract! update, :id, :title, :body
  json.date update.datestring
  json.comments update.comments.sort_by(&:created_at).reverse,
    partial: 'comments/comment', as: :comment
end