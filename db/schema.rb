# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20140526172357) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "companies", force: true do |t|
    t.string   "name",               null: false
    t.string   "location",           null: false
    t.text     "blurb",              null: false
    t.integer  "duration",           null: false
    t.integer  "investment_goal",    null: false
    t.integer  "equity",             null: false
    t.integer  "owner_id",           null: false
    t.string   "growth_stage",       null: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "photo_file_name"
    t.string   "photo_content_type"
    t.integer  "photo_file_size"
    t.datetime "photo_updated_at"
    t.text     "pitch"
    t.text     "market"
    t.string   "website"
    t.integer  "sector_id",          null: false
  end

  add_index "companies", ["name"], name: "index_companies_on_name", using: :btree

  create_table "investments", force: true do |t|
    t.integer  "investor_id", null: false
    t.integer  "company_id",  null: false
    t.integer  "amount",      null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "investments", ["investor_id", "company_id"], name: "index_investments_on_investor_id_and_company_id", using: :btree

  create_table "sectors", force: true do |t|
    t.string   "name",       null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "sectors", ["name"], name: "index_sectors_on_name", using: :btree

  create_table "updates", force: true do |t|
    t.string   "title",      null: false
    t.integer  "company_id", null: false
    t.text     "body",       null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "users", force: true do |t|
    t.string   "username",            null: false
    t.string   "password_digest",     null: false
    t.string   "session_token",       null: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "name"
    t.text     "biography"
    t.string   "location"
    t.string   "website"
    t.string   "avatar_file_name"
    t.string   "avatar_content_type"
    t.integer  "avatar_file_size"
    t.datetime "avatar_updated_at"
  end

  add_index "users", ["session_token"], name: "index_users_on_session_token", using: :btree
  add_index "users", ["username"], name: "index_users_on_username", unique: true, using: :btree

end
