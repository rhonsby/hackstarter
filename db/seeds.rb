# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

ActiveRecord::Base.transaction do
  robert = User.create!(username: 'robert', password: 'foobar')
  andrew = User.create!(username: 'andrew', password: 'foobar')

  cycletree = andrew.companies.create!(
    name: 'Cycletree', location: 'San Francisco, CA',
    blurb: 'Classifieds for bikes', duration: 30, investment_goal: 20_000,
    equity: 5, growth_stage: 'Start-Up'
  )

  hackstarter = robert.companies.create!(
    name: 'Hackstarter', location: 'San Francisco, CA',
    blurb: 'Kickstarter for Start-Ups', duration: 30, investment_goal: 10_000,
    equity: 4, growth_stage: 'Growth'
  )

  Investment.create!(
    investor_id: robert.id, company_id: cycletree.id, amount: 300
  )

  Investment.create!(
    investor_id: robert.id, company_id: cycletree.id, amount: 250
  )

  Investment.create!(
    investor_id: andrew.id, company_id: hackstarter.id, amount: 400
  )
end