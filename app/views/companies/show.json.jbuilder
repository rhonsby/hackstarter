json.extract! @company, :name, :location, :blurb, :duration, :investment_goal,
                        :equity, :growth_stage, :id

json.photo_url @company.photo(:card)