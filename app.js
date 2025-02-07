const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const PrayerRequest = require('./models/PrayerRequest');

app.post('/prayer-request', async (req, res) => {
    const { name, email, prayer } = req.body;
    const newRequest = new PrayerRequest({ name, email, prayer });

    try {
        await newRequest.save();
        res.send('Thank you for your prayer request!');
    } catch (err) {
        res.status(500).send('Error submitting your request.');
    }
});
const BlogPost = require('./models/BlogPost');

// Display all blog posts
app.get('/blog', async (req, res) => {
    const posts = await BlogPost.find().sort({ date: -1 });
    res.render('blog', { posts });
});

// Create a new blog post
app.post('/blog', async (req, res) => {
    const { title, content } = req.body;
    const newPost = new BlogPost({ title, content });

    try {
        await newPost.save();
        res.redirect('/blog');
    } catch (err) {
        res.status(500).send('Error creating blog post.');
    }
});
// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

// Database connection
mongoose.connect('mongodb://localhost:27017/heartofgod', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Routes
app.get('/', (req, res) => {
    res.render('index');
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});