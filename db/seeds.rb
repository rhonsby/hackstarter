# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

ActiveRecord::Base.transaction do
  art = Sector.create!(name: 'Art & Design')
  education = Sector.create!(name: 'Education')
  env = Sector.create!(name: 'Environmental & Ethical')
  film = Sector.create!(name: 'Film, TV, & Theatre')
  food = Sector.create!(name: 'Food')
  games = Sector.create!(name: 'Games')
  health = Sector.create!(name: 'Health & Fitness')
  media = Sector.create!(name: 'Media & Creative Services')
  pro = Sector.create!(name: 'Professional & Business Services')
  retail = Sector.create!(name: 'Retail')
  sport = Sector.create!(name: 'Sport & Leisure')
  tech = Sector.create!(name: 'Technology')

  robert = User.create!(username: 'robert', password: 'foobar')
  andrew = User.create!(username: 'andrew', password: 'foobar')

  cycletree = andrew.companies.create!(
    name: 'Cycletree', location: 'San Francisco, CA',
    blurb: 'Classifieds for bikes', duration: 30, investment_goal: 20_000,
    equity: 5, growth_stage: 'Start-Up', sector_id: sport.id
  )

  hackstarter = robert.companies.create!(
    name: 'Hackstarter', location: 'San Francisco, CA',
    blurb: 'Kickstarter for Start-Ups', duration: 21, investment_goal: 10_000,
    equity: 4, growth_stage: 'Growth', sector_id: pro.id
  )

  airdnd = robert.companies.create!(
    name: 'AirDnD', location: 'San Francisco, CA',
    blurb: 'Make some friends... yay', duration: 23, investment_goal: 2_000_00,
    equity: 100, growth_stage: 'Start-Up', sector_id: games.id
  )

  appacademy = robert.companies.create!(
    name: 'App Academy', location: 'San Francisco, CA',
    blurb: 'A 12-week intensive boot camp where you learn a lot', duration: 90, investment_goal: 300,
    equity: 10, growth_stage: 'Early Stage', sector_id: tech.id
  )

  hotdelio = robert.companies.create!(
    name: 'Hotdelio', location: 'San Francisco, CA',
    blurb: 'Hella hot deals, yo', duration: 40, investment_goal: 20,
    equity: 40, growth_stage: 'Start-Up', sector_id: pro.id
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