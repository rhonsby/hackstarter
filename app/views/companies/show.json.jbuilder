json.extract! @company, :name, :location, :blurb, :duration, :investment_goal,
                        :equity, :growth_stage

json.photo_url @company.photo(:card)