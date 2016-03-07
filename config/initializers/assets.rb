# Be sure to restart your server when you modify this file.

# Version of your assets, change this if you want to expire all your assets.
Rails.application.config.assets.version = '1.0'
Rails.application.config.assets.precompile += %w( locations/nearbyresultsscript.js )
Rails.application.config.assets.precompile += %w( about/slider.js )
Rails.application.config.assets.precompile += %w( about/pageinteractions.js )
Rails.application.config.assets.precompile += %w( nearbylocations/mapinteractivity.js )
Rails.application.config.assets.precompile += %w( artists/artistsearchscript.js )
Rails.application.config.assets.precompile += %w( locations/mapinteractivity.js )
Rails.application.config.assets.precompile += %w( locations/searchresultmapinteractivity.js )

# Add additional assets to the asset load path
# Rails.application.config.assets.paths << Emoji.images_path

# Precompile additional assets.
# application.js, application.css, and all non-JS/CSS in app/assets folder are already added.
# Rails.application.config.assets.precompile += %w( search.js )
