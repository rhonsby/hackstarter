json.extract! company, :name, :location, :blurb, :investment_goal,
                       :id

json.photo_url company.photo(:card)
json.large_photo_url company.photo(:card_large)
json.amount_raised company.amount_raised.to_s
json.percentage_raised company.percentage_raised.to_s
json.days_left company.days_left.to_s
json.investor_count company.unique_investors.length