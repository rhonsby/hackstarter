json.extract! @user, :id, :username

json.companies @user.companies.sort_by(&:name), :id, :name