
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookingSchema = new Schema({
   startAt: { type: Date, required: 'Starting data is required'},
   endAt: { type: Date, required: 'Ending data is required'},
   totalPrice: Number,
   days: Number,
   guests: Number,
   createdAt: { type: Date, default: Date.now },
   //Booking can relate to only one User and one Rental
   user: { type: Schema.Types.ObjectId, ref: 'User'},
   rental: { type: Schema.Types.ObjectId, ref: 'Rental'},
   review: { type: Schema.Types.ObjectId, ref: 'Review'}
});

//Sending the model to database
module.exports = mongoose.model('Booking', bookingSchema);


// bookingSchema.pre('remove', function(next) {
//    this.model('User').update({'_id': this.user}, {$pull: {bookings: this._id}}, () => {
//       next();
//    })
// })

