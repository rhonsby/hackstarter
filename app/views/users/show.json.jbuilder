json.extract! @user, :id, :username

json.companies @user.companies, :id, :name