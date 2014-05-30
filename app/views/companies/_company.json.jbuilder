json.cache! ['company', company.updated_at, company.amount_raised, company.days_left, company.sector_name, company.unique_investors.count, company.updates.length, company.comments.length] do
  json.extract! company, :name, :location, :blurb, :duration, :investment_goal,
                          :equity, :growth_stage, :id, :pitch, :market, :website

  json.small_photo company.photo(:small)
  json.medium_photo company.photo(:medium)
  json.large_photo company.photo(:large)

  json.amount_raised company.amount_raised
  json.percentage_raised company.percentage_raised
  json.days_left company.days_left
  json.end_date company.end_date
  json.sector company.sector_name
  json.founder company.owner, :id, :username, :name

  json.investors company.unique_investors, partial: 'users/investor', as: :investor
  json.updates company.updates.sort_by(&:created_at), partial: 'companies/update', as: :update
  json.comments company.comments.sort_by(&:created_at).reverse,
    partial: 'comments/comment', as: :comment
end