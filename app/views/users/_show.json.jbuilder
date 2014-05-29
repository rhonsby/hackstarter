json.extract! user, :id, :username, :name, :biography, :location, :website

json.companies user.companies.sort_by(&:name), partial: 'companies/company', as: :company
json.backedCompanies user.backed_companies.uniq, partial: 'companies/company', as: :company
json.backedCompaniesCount user.backed_companies.uniq.length
json.small_photo_url user.avatar(:small)
json.medium_photo_url user.avatar(:medium)
json.large_photo_url user.avatar(:large)