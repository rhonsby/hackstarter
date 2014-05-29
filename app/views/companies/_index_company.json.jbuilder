json.extract! company, :name, :location, :blurb, :investment_goal,
                       :id, :equity

json.photo_url company.photo(:card)
json.large_photo_url company.photo(:card_large)
json.main_photo_url company.photo(:show)
json.large_photo_url company.photo(:card_large)
json.amount_raised company.amount_raised
json.percentage_raised company.percentage_raised
json.days_left company.days_left
json.investor_count company.unique_investors.length
json.sector company.sector_name
json.updateCount company.updates.length