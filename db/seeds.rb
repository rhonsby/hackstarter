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

  robert = User.create!(username: 'rhonsby', password: 'foobar')
  awong = User.create!(username: 'arwong09', password: 'password')
  david = User.create!(username: 'dawu', password: 'password')
  zhyliana = User.create!(username: 'zhyliana', password: 'password')
  ken = User.create!(username: 'senseiurata', password: 'password')
  achen = User.create!(username: 'hanji', password: 'password')

  cycletree = awong.companies.create!(
    name: 'Cycletree', location: 'San Francisco, CA',
    blurb: 'Classifieds for bikes', duration: 30, investment_goal: 20_000,
    equity: 5, growth_stage: 'Start-Up', sector_id: health.id
  )

  hackstarter = robert.companies.create!(
    name: 'Hackstarter', location: 'San Francisco, CA',
    blurb: 'Kickstarter for Start-Ups', duration: 21, investment_goal: 10_000,
    equity: 4, growth_stage: 'Growth', sector_id: pro.id
  )

  hotdelio = ken.companies.create!(
    name: 'Hotdelio', location: 'San Francisco, CA',
    blurb: 'Hella hot deals, yo', duration: 40, investment_goal: 20,
    equity: 40, growth_stage: 'Start-Up', sector_id: retail.id
  )

  preddit = david.companies.create!(
    name: 'Preddit', location: 'San Francisco, CA',
    blurb: 'Scroll Reddit all day', duration: 24, investment_goal: 30_000,
    equity: 8, growth_stage: 'Early Stage', sector_id: media.id
  )

  sketchmate = zhyliana.companies.create!(
    name: 'SketchMate', location: 'San Francisco, CA',
    blurb: '', duration: 30, investment_goal: 2_000,
    equity: 4, growth_stage: 'Start-Up', sector_id: games.id
  )

  forgeteam = achen.companies.create!(
    name: 'ForgeTeam', location: 'San Francisco, CA',
    blurb: 'DRAGOOOOOOON-UH BOATTTTTT-UH', duration: 60, investment_goal: 12_000,
    equity: 12, growth_stage: 'Start-Up', sector_id: sport.id
  )
end