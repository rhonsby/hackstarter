json.(investor, :id, :name, :username, :location)

json.photo_url investor.avatar(:small)
json.backedCount investor.backed_companies.uniq.length