json.extract! @company, :name, :location, :blurb, :duration, :investment_goal,
                        :equity, :growth_stage, :id, :pitch, :market

json.photo_url @company.photo(:card)