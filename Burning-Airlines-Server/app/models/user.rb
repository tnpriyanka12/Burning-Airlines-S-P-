class User < ApplicationRecord
  has_many :reservations
  has_many :flight, through: :reservations
end
