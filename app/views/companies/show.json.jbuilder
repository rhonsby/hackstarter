json.extract! @company, :name, :location, :blurb, :duration, :investment_goal,
                        :equity, :growth_stage, :id, :pitch, :market

json.photo_url @company.photo(:card)
json.main_photo_url @company.photo(:show)
json.amount_raised @company.amount_raised.to_s
json.percentage_raised @company.percentage_raised.to_s
json.days_left @company.days_left.to_s

json.investors @company.investors, partial: 'users/investor', as: :investor