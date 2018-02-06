
Airplane.destroy_all

A1 = Airplane.create name: "747", rows: 1, column: 'B'
A2 = Airplane.create name: "A-380", rows: 5, column: 'A'
A3 = Airplane.create name: "747", rows: 8, column: 'D'
A4 = Airplane.create name: "A-380", rows: 11, column: 'K'
A5 = Airplane.create name: "747", rows: 2, column: 'E'
puts "There are #{Airplane.all.length} Airplanes"


Flight.destroy_all

F1 = Flight.create flight_No: "23", date: "1-1-2018", origin: 'Sydney', destination: 'Perth', plane:'747'
F2 = Flight.create flight_No: "65", date: "1-2-2018", origin: 'Melbourne', destination: 'Darwin', plane:'747'
F3 = Flight.create flight_No: "84", date: "1-3-2018", origin: 'Perth', destination: 'Canberra', plane:'747'
F4 = Flight.create flight_No: "12", date: "1-4-2018", origin: 'Canberra', destination: 'Adelaide', plane:'747'
F5 = Flight.create flight_No: "75", date: "1-5-2018", origin: 'Adelaide', destination: 'Sydney', plane:'747'
puts "There are #{Flight.all.length} Flights"


Reservation.destroy_all

R1 = Reservation.create date: "1-1-2018", reservation_No:'235'
R2 = Reservation.create date: "1-1-2018", reservation_No:'232'
R3 = Reservation.create date: "1-2-2018", reservation_No:'234'
puts "There are #{Reservation.all.length} Reservations"


User.destroy_all

U1 = User.create name: "Sam", email: "Samuel.westen01@gmail.com"
U2 = User.create name: "Barry", email: "Barry.Easten02@gmail.com"
puts "There are #{User.all.length} User"


A1.flights << F1 << F3
A2.flights << F4

U1.reservations << R1 << R2

F1.reservations << R1 << R3
F2.reservations << R2


U1.reservations << R1 << R2
F1.reservations << R1 << R3
