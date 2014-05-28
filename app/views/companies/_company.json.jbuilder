json.extract! company, :name, :location, :blurb, :duration, :investment_goal,
                        :equity, :growth_stage, :id, :pitch, :market, :website

json.small_photo_url company.photo(:small)
json.photo_url company.photo(:card)
json.main_photo_url company.photo(:show)
json.large_photo_url company.photo(:card_large)
json.amount_raised company.amount_raised
json.percentage_raised company.percentage_raised
json.days_left company.days_left
json.end_date company.end_date.to_s
json.sector company.sector_name
json.founder company.owner, :id, :username, :name

json.investors company.unique_investors, partial: 'users/investor', as: :investor
json.updates company.updates.sort_by(&:created_at), partial: 'companies/update', as: :update
json.comments company.comments.sort_by(&:created_at).reverse, partial: 'companies/comment', as: :comment