# Load the Rails application.
require_relative 'application'

# Initialize the Rails application.
Rails.application.initialize!

# turn the keys you send up in your backend in camelCased format
Jbuilder.key_format camelize: :lower
