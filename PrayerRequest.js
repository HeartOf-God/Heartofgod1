const mongoose = require('mongoose');

const prayerRequestSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    prayer: { type: String, required: true },
});

module.exports = mongoose.model('PrayerRequest', prayerRequestSchema);