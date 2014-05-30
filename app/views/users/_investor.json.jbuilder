json.cache! ['investor', investor.updated_at, investor.backed_companies.uniq.length, investor.avatar(:small)] do
  json.(investor, :id, :name, :username, :location)

  json.small_photo investor.avatar(:small)
  json.backed_count investor.backed_companies.uniq.length
end