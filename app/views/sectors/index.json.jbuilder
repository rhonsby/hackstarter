json.cache! do
  json.partial! 'sectors/sector', collection: @sectors, as: :sector
end