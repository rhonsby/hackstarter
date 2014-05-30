json.extract! user, :id, :username, :name, :biography, :location, :website

json.companies user.companies.sort_by(&:name), partial: 'companies/company', as: :company
json.backed_companies user.backed_companies.uniq, partial: 'companies/company', as: :company
json.small_photo user.avatar(:small)
json.medium_photo user.avatar(:medium)
json.large_photo user.avatar(:large)