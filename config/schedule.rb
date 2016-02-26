# Use this file to easily define all of your cron jobs.
#
# It's helpful, but not entirely necessary to understand cron before proceeding.
# http://en.wikipedia.org/wiki/Cron

# Example:
# EDITOR=subl crontab -e to open crontab
set :output, "./log.log"

every :day do
  rake 'update', :environment=> 'default'
  puts "This is a cron test"

end
#
# every 4.days do
#   runner "AnotherModel.prune_old_records"
# end

# Learn more: http://github.com/javan/whenever
