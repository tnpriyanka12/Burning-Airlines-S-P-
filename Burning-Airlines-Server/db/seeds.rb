
Airplane.destroy_all

A1 = Airplane.create name: "747", rows: 4, column: '5'
A2 = Airplane.create name: "A-380", rows: 4, column: '5'
A3 = Airplane.create name: "747", rows: 4, column: '5'
A4 = Airplane.create name: "A-380", rows: 4, column: '5'
A5 = Airplane.create name: "747", rows: 4, column: '5'
puts "There are #{Airplane.all.length} Airplanes"


Flight.destroy_all

F1 = Flight.create flight_No: "23", date: "1-1-2018", origin: 'Sydney', destination: 'Melbourne', plane:'747'
F2 = Flight.create flight_No: "65", date: "1-2-2018", origin: 'Sydney', destination: 'Darwin', plane:'748'
F3 = Flight.create flight_No: "84", date: "1-3-2018", origin: 'Sydney', destination: 'Melbourne', plane:'747'
F4 = Flight.create flight_No: "12", date: "1-4-2018", origin: 'Canberra', destination: 'Melbourne', plane:'749'
F5 = Flight.create flight_No: "75", date: "1-5-2018", origin: 'Canberra', destination: 'Melbourne', plane:'749'
puts "There are #{Flight.all.length} Flights"


Reservation.destroy_all

R1 = Reservation.create date: "1-1-2018", reservation_No:'235'
R2 = Reservation.create date: "1-1-2018", reservation_No:'232'
R3 = Reservation.create date: "1-2-2018", reservation_No:'234'
R4 = Reservation.create date: "1-3-2018", reservation_No:'236'
R5 = Reservation.create date: "1-5-2018", reservation_No:'237'
R6 = Reservation.create date: "1-6-2018", reservation_No:'238'
puts "There are #{Reservation.all.length} Reservations"


User.destroy_all

U1 = User.create name: "Sam", email: "Samuel.westen01@gmail.com"
U2 = User.create name: "Barry", email: "Barry.Easten02@gmail.com"
U3 = User.create name: "User3", email: "user3@gmail.com"
U4 = User.create name: "User4", email: "user4@gmail.com"
U5 = User.create name: "User5", email: "user5@gmail.com"
puts "There are #{User.all.length} User"


# Airplanes have many flights
A1.flights << F1 << F3
A2.flights << F4

# User has many reservations
U1.reservations << R1 << R2
U3.reservations << R4

# Flight has many reservations
F1.reservations << R1 << R3
F2.reservations << R2



# User has many flights & Flights have many users 'through' reservations
U1.flights << F1 << F2
U2.flights << F3 << F5

F1.users << U1 << U3
