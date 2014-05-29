json.cache! update do
  json.extract! update, :id, :title, :body
  json.date update.datestring
end