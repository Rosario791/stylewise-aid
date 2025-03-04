
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, ChevronRight, Star, Scissors, Phone } from 'lucide-react';

interface Barbershop {
  id: string;
  name: string;
  location: string;
  rating: number;
  image: string;
  distance: string;
}

interface TimeSlot {
  id: string;
  time: string;
  available: boolean;
}

const Appointments = () => {
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedBarbershop, setSelectedBarbershop] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  
  // Mock data for barbershops
  const barbershops: Barbershop[] = [
    {
      id: '1',
      name: "L'Oréal Men's Studio",
      location: "San Isidro, Lima",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
      distance: "1.2 km"
    },
    {
      id: '2',
      name: "Executive Barbers",
      location: "Miraflores, Lima",
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
      distance: "2.8 km"
    },
    {
      id: '3',
      name: "Modern Man Barbershop",
      location: "Barranco, Lima",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
      distance: "3.5 km"
    },
  ];
  
  // Generate dates for the next 7 days
  const generateDates = () => {
    const dates = [];
    const today = new Date();
    
    for (let i = 0; i < 7; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      
      dates.push({
        dateString: date.toISOString().split('T')[0],
        day: date.toLocaleDateString('en-US', { weekday: 'short' }),
        date: date.getDate(),
      });
    }
    
    return dates;
  };
  
  const dates = generateDates();
  
  // Generate time slots
  const generateTimeSlots = (): TimeSlot[] => {
    const slots = [];
    const startHour = 9; // 9 AM
    const endHour = 19; // 7 PM
    
    for (let hour = startHour; hour <= endHour; hour++) {
      // Add only specific times to avoid too many options
      if (hour % 2 === 1 && hour !== endHour) continue;
      
      // Randomly mark some slots as unavailable
      const random = Math.random();
      slots.push({
        id: `${hour}:00`,
        time: `${hour}:00`,
        available: random > 0.3
      });
      
      if (hour !== endHour) {
        slots.push({
          id: `${hour}:30`,
          time: `${hour}:30`,
          available: random > 0.7
        });
      }
    }
    
    return slots;
  };
  
  const timeSlots = generateTimeSlots();
  
  const handleDateSelect = (date: string) => {
    setSelectedDate(date);
    // Reset other selections
    setSelectedBarbershop(null);
    setSelectedTime(null);
    setBookingConfirmed(false);
  };
  
  const handleBarbershopSelect = (id: string) => {
    setSelectedBarbershop(id);
    setSelectedTime(null);
    setBookingConfirmed(false);
  };
  
  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    setBookingConfirmed(false);
  };
  
  const handleBookAppointment = () => {
    // In a real app, this would send the booking to a backend
    setBookingConfirmed(true);
  };

  return (
    <div className="pt-6">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mb-6"
      >
        <h1 className="text-2xl font-bold mb-2 text-smartgray-800">Barbershop Appointment</h1>
        <p className="text-smartgray-500">
          Book an appointment with L'Oréal-affiliated barbershops in your area
        </p>
      </motion.div>

      <div className="grid grid-cols-1 gap-8">
        {/* Date Selection */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="card-base p-6"
        >
          <div className="flex items-center mb-4">
            <Calendar className="w-5 h-5 text-smartblue-600 mr-2" />
            <h2 className="text-xl font-semibold text-smartgray-800">Select Date</h2>
          </div>
          
          <div className="grid grid-cols-7 gap-2">
            {dates.map((date) => (
              <button
                key={date.dateString}
                onClick={() => handleDateSelect(date.dateString)}
                className={`flex flex-col items-center p-3 rounded-xl transition-colors ${
                  selectedDate === date.dateString
                    ? 'bg-smartblue-600 text-white'
                    : 'bg-smartgray-100 hover:bg-smartgray-200 text-smartgray-800'
                }`}
              >
                <span className="text-xs font-medium">{date.day}</span>
                <span className="text-lg font-bold">{date.date}</span>
              </button>
            ))}
          </div>
        </motion.div>
        
        {/* Barbershop Selection */}
        {selectedDate && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="card-base p-6"
          >
            <div className="flex items-center mb-4">
              <Scissors className="w-5 h-5 text-smartblue-600 mr-2" />
              <h2 className="text-xl font-semibold text-smartgray-800">Select Barbershop</h2>
            </div>
            
            <div className="space-y-4">
              {barbershops.map((shop) => (
                <button
                  key={shop.id}
                  onClick={() => handleBarbershopSelect(shop.id)}
                  className={`w-full p-4 rounded-xl transition-all flex items-center border ${
                    selectedBarbershop === shop.id
                      ? 'border-smartblue-600 bg-smartblue-50'
                      : 'border-smartgray-200 hover:border-smartblue-300'
                  }`}
                >
                  <img 
                    src={shop.image} 
                    alt={shop.name}
                    className="w-20 h-20 object-cover rounded-lg mr-4"
                  />
                  <div className="flex-1 text-left">
                    <h3 className="font-medium text-smartgray-800">{shop.name}</h3>
                    <div className="flex items-center text-smartgray-500 text-sm mt-1">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span>{shop.location}</span>
                      <span className="mx-2">•</span>
                      <span>{shop.distance}</span>
                    </div>
                    <div className="flex items-center mt-1">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(shop.rating) 
                                ? 'text-amber-400 fill-amber-400' 
                                : 'text-smartgray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm ml-2 text-smartgray-600">{shop.rating}</span>
                    </div>
                  </div>
                  <ChevronRight className={`w-5 h-5 ${
                    selectedBarbershop === shop.id ? 'text-smartblue-600' : 'text-smartgray-400'
                  }`} />
                </button>
              ))}
            </div>
          </motion.div>
        )}
        
        {/* Time Selection */}
        {selectedBarbershop && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="card-base p-6"
          >
            <div className="flex items-center mb-4">
              <Clock className="w-5 h-5 text-smartblue-600 mr-2" />
              <h2 className="text-xl font-semibold text-smartgray-800">Select Time</h2>
            </div>
            
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
              {timeSlots.map((slot) => (
                <button
                  key={slot.id}
                  onClick={() => slot.available && handleTimeSelect(slot.time)}
                  disabled={!slot.available}
                  className={`py-3 px-2 rounded-xl transition-colors text-center ${
                    selectedTime === slot.time
                      ? 'bg-smartblue-600 text-white'
                      : slot.available
                        ? 'bg-smartgray-100 hover:bg-smartgray-200 text-smartgray-800'
                        : 'bg-smartgray-100 text-smartgray-400 cursor-not-allowed opacity-50'
                  }`}
                >
                  {slot.time}
                </button>
              ))}
            </div>
            
            <p className="text-sm text-smartgray-500 mt-4">
              All times are in local timezone.
            </p>
          </motion.div>
        )}
        
        {/* Booking Confirmation */}
        {selectedTime && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="card-base p-6"
          >
            <h2 className="text-xl font-semibold text-smartgray-800 mb-4">Booking Summary</h2>
            
            {bookingConfirmed ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-6 bg-green-50 border border-green-200 rounded-xl text-center"
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Scissors className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-green-800 mb-2">Appointment Confirmed!</h3>
                <p className="text-green-700 mb-4">
                  Your appointment has been booked successfully.
                </p>
                <div className="bg-white rounded-lg p-4 mb-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-smartgray-500">Date</p>
                      <p className="font-medium text-smartgray-800">
                        {new Date(selectedDate).toLocaleDateString('en-US', { 
                          weekday: 'long', 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-smartgray-500">Time</p>
                      <p className="font-medium text-smartgray-800">{selectedTime}</p>
                    </div>
                    <div>
                      <p className="text-sm text-smartgray-500">Barbershop</p>
                      <p className="font-medium text-smartgray-800">
                        {barbershops.find(shop => shop.id === selectedBarbershop)?.name}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-smartgray-500">Location</p>
                      <p className="font-medium text-smartgray-800">
                        {barbershops.find(shop => shop.id === selectedBarbershop)?.location}
                      </p>
                    </div>
                  </div>
                </div>
                <button className="btn-primary w-full flex items-center justify-center">
                  <Phone className="w-4 h-4 mr-2" />
                  <span>Contact Barbershop</span>
                </button>
              </motion.div>
            ) : (
              <div>
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-smartgray-500">Barbershop:</span>
                    <span className="font-medium text-smartgray-800">
                      {barbershops.find(shop => shop.id === selectedBarbershop)?.name}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-smartgray-500">Location:</span>
                    <span className="font-medium text-smartgray-800">
                      {barbershops.find(shop => shop.id === selectedBarbershop)?.location}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-smartgray-500">Date:</span>
                    <span className="font-medium text-smartgray-800">
                      {new Date(selectedDate).toLocaleDateString('en-US', { 
                        weekday: 'long', 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-smartgray-500">Time:</span>
                    <span className="font-medium text-smartgray-800">{selectedTime}</span>
                  </div>
                </div>
                
                <button 
                  onClick={handleBookAppointment}
                  className="btn-primary w-full"
                >
                  Confirm Booking
                </button>
              </div>
            )}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Appointments;
