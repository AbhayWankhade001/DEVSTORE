const express = require('express');
const router = express.Router();
const User = require('../model/UserSchema');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser'); // <-- Keep this line
const { createContact, saveSubscription } = require('../Controller/controller');
const admin = require('firebase-admin');
const Subscription = require('../model/Subscription');
const axios = require('axios');
const { FieldValue } = require('firebase-admin').firestore;
const functions = require('firebase-functions');
const BlogP = require('../model/Blog')
const FirebaseTokenGenerator = require("firebase-token-generator");
const webpush = require('web-push');
const SubsUser = require('../model/Subs')
router.use(cookieParser()); // <-- Keep this line

const crypto = require('crypto');
const bcrypt = require('bcrypt');
const Review = require('../model/Review');
const Key = 'e3954f137e7fead3d77c5ef0b1b692e01e05ae43e4b6e8497a8d0fd0b9d9a2bb';
const cors = require('cors');
const PageView = require('../model/PageViewSchema');
// ... rest of your code



// router.use(cookieParser());

// Enable CORS
router.use(cors());

//register api
router.post('/register', async (req, res) => {
  try {
    const { username, password, designation, name } = req.body;

    // Check required fields
    if (!username || !password || !name || !designation) {
      console.log("Required fields missing");
      return res.status(400).send("Username, password, name, or designation are required fields");
    }

    // Check if user already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      console.log("Username already exists");
      return res.status(409).send("Username already exists");
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user with hashed password
    const newUser = new User({
      username,
      password: hashedPassword,
      designation,
      name
    });

    // Save the user to the database
    await newUser.save();



    // Generate JWT token using the user-specific key
    const token = jwt.sign({ userId: newUser._id, username: newUser.username }, `${Key}`, {
      expiresIn: '1h', // You can adjust the expiration time as needed
    });

    // Set the token as a cookie
    res.cookie('token', token, {
      maxAge: 86400000, // 24 hours
      httpOnly: true,
      secure: true,
      sameSite: 'strict'
    });

    res.status(201).json({ message: 'User registered successfully', token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});




//login api 
//login api
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    // Check if username and password are provided
    if (!username || !password) {
      return res.status(400).json({ message: 'Username and password are required' });
    }

    // Find the user by username
    const user = await User.findOne({ username });

    // If user not found, return error
    if (!user) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    // Compare passwords
    const passwordMatch = await bcrypt.compare(password, user.password);

    // If passwords don't match, return error
    if (!passwordMatch) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    // Generate JWT token with userId included in the payload
    const token = jwt.sign({ userId: user._id, username: user.username }, `${Key}`, {
      expiresIn: '1h' // You can adjust the expiration time as needed
    });

    // Set token as a cookie
    res.cookie('token', token, {
      maxAge: 86400000, // 24 hours
      httpOnly: true,
      secure: true,
      sameSite: 'strict'
    });

    // Return success message and token
    res.status(200).json({ message: 'Login successful', token, userId: user._id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});


// API endpoint to verify token
router.get('/verifyToken', async (req, res) => {
  try {
    // Retrieve the token from the cookies
    const token = req.cookies.token;

    // Check if the token is present
    if (!token) {
      return res.status(401).json({ error: 'Token not provided' });
    }

    // Verify the token
    jwt.verify(token, `${Key}`, (err, decoded) => {
      if (err) {
        return res.status(401).json({ error: 'Invalid token' });
      }
      console.log(`${Key}`)
      // Token is valid, return decoded information
      res.status(200).json(decoded, "hhhh");
    });
  } catch (error) {
    console.error('Error verifying token:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Middleware for token verification
const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(403).json({ error: 'No token provided' });
  }

  jwt.verify(token, Key, (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: 'Failed to authenticate token' });
    }

    req.decoded = decoded;
    next();
  });
};

function getTokenFromCookies(req) {
  let token = req.headers['authorization'] || req.cookies['token'];
  if (!token) {
    console.log("No token found in cookies");
    return null;
  }

  try {
    // Remove "Bearer " prefix if present
    if (token.startsWith("Bearer ")) {
      token = token.slice(7, token.length);
    }
    const decodedToken = jwt.verify(token, Key);
    console.log("Decoded token:", decodedToken);

    // Check if decoded token contains required fields (e.g. user ID)
    if (!decodedToken.userId || !decodedToken.username) {
      console.log("Invalid token. Missing required fields");
      return null;
    }

    return decodedToken.userId; // Return decoded token object
  } catch (err) {
    console.log("Error decoding token:", err.message);
    return null;
  }
}

const authorize = (req, res, next) => {
  const authToken = getTokenFromCookies(req); // Use authToken to decode

  if (!authToken) {
    console.log("No authorization token provided");
    return res.status(401).send("Access denied. No token provided");
  }

  try {
    req.user = {
      id: authToken.userId,
      username: authToken.username,
    };
    next();
  } catch (err) {
    console.log("Invalid authorization token provided");
    res.status(400).send("Invalid token provided");
  }
};


router.post('/reviews', authorize, async (req, res) => {
  try {
    const { feedback, rating, user } = req.body;
    console.log('Received feedback:', feedback);
    console.log('Received rating:', rating);
    console.log('User from token:', req.user);
    console.log('Request headers:', req.headers);

    const review = new Review({
      user,
      feedback,
      rating
    });

    await review.save();
    console.log('Review saved successfully');
    res.status(201).json({ message: 'Review saved successfully' });
  } catch (err) {
    console.error('Error saving review:', err.message);
    res.status(500).json({ error: err.message });
  }
});



router.get('/ratings', async (req, res) => {
  try {
    // Retrieve the user ID from the decoded token
    const decodedToken = jwt.decode(req.cookies.token);

    // Check if the decoded token contains the user ID
    if (!decodedToken || !decodedToken.userId) {
      return res.status(400).json({ error: 'User ID not present in token' });
    }

    const userId = decodedToken.userId;

    // Find all reviews for the user
    const ratings = await Review.find({ user: userId });

    res.json({ ratings });
  } catch (error) {
    console.error('Error fetching ratings:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// GET all RateSys documents
router.get('/ratesys', async (req, res) => {
  try {
    const rates = await rates.find();
    res.json(rates);
  } catch (error) {
    console.error('Error fetching rates:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// GET a RateSys document by ID
router.get('/ratesys/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const rate = await RateSys.findById(id);
    if (!rate) {
      return res.status(404).json({ error: 'RateSys not found' });
    }
    res.json(rate);
  } catch (error) {
    console.error('Error fetching rate by ID:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// POST a new RateSys document
router.post('/ratesys', async (req, res) => {
  const { rating, name, review } = req.body;
  try {
    const newRateSys = new RateSys({ rating, name, review });
    await newRateSys.save(); // Save the new RateSys document to the database
    res.status(201).json(newRateSys);
  } catch (error) {
    console.error('Error creating new rate:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});



// PUT update a RateSys document by ID
router.put('/ratesys/:id', async (req, res) => {
  const { id } = req.params;
  const { rating, name, review } = req.body;
  try {
    const updatedRateSys = await RateSys.findByIdAndUpdate(id, { rating, name, review }, { new: true });
    if (!updatedRateSys) {
      return res.status(404).json({ error: 'RateSys not found' });
    }
    res.json(updatedRateSys);
  } catch (error) {
    console.error('Error updating rate by ID:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


// Import necessary libraries
const geoip = require('geoip-lite');
const Blog = require('../model/Blog');

router.use(async (req, res, next) => {
  const { path, ip } = req;
  try {
    const geo = geoip.lookup(ip);
    let pageView = await PageView.findOne({ path });
    if (pageView) {
      pageView.count++;
    } else {
      pageView = new PageView({ path });
    }
    // Add additional tracking data
    pageView.location = geo ? geo.city + ', ' + geo.region + ', ' + geo.country : 'Unknown';
    pageView.timestamp = new Date();
    pageView.ip = ip; // Record the IP address
    // Save the page view
    await pageView.save();
    next();
  } catch (error) {
    next(error); // Pass error to the error handling middleware
  }
})
// API endpoint to get page views
router.get('/page-views', async (req, res, next) => {
  try {
    const pageViews = await PageView.find();
    res.json(pageViews);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});






// Define routes
router.post('/contact', createContact);


// router.post('/subscribe', (req, res) => {
//   const subscription = req.body;
//   res.status(201).json({});
//   const payload = JSON.stringify({ title: "Hello World", body: "This is your first push notification" });

//   // Debugging: Log headers
//   console.log('Headers:', req.headers);

//   webpush.sendNotification(subscription, payload).catch(console.log);

//     webpush.sendNotification(subscription, payload).catch(console.log)
// });

const userNotifications = new Map(); // Map to store user notifications
router.post('/subscribe', async (req, res) => {
  const subscription = req.body;
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  const userId = `${ip}_${subscription.endpoint}`;

  try {
    // Check if user already exists in the database
    const existingUser = await SubsUser.findOne({ userId });

    if (!existingUser) {
      // Store user data in the database
      await SubsUser.create({
        userId,
        subscription,
      });
      console.log('User data stored in the database.');

      // Check if the user has already been notified to avoid duplication
      if (!userNotifications.has(userId)) {
        res.status(201).json({});
        const payload = JSON.stringify({ title: "Hello World", body: "This is your first push notification" });

        // Debugging: Log headers
        console.log('Headers:', req.headers);

        try {
          // Send notification
          await webpush.sendNotification(subscription, payload);
          console.log('Notification sent successfully.');

          // Store user data to avoid future duplications
          userNotifications.set(userId, true);
        } catch (notificationError) {
          console.error('Error sending notification:', notificationError);
          res.status(500).json({ error: 'Failed to send notification' });
        }
      } else {
        console.log('User has already been notified. Skipping duplicate notification.');
        res.status(200).json({});
      }
    } else {
      console.log('User already exists in the database. Skipping duplicate user record.');
      res.status(200).json({});
    }
  } catch (error) {
    console.error('Error handling subscription:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});




router.post('/send-all-notifications', async (req, res) => {
  const payload = JSON.stringify({ title: "Hello Everyone", body: "This is a broadcast notification" });

  try {
    // Get all users from the database
    const allUsers = await SubsUser.find({});

    // Iterate through each user and send a notification
    for (const user of allUsers) {
      const { subscription } = user;

      try {
        // Send notification to the user
        await webpush.sendNotification(subscription, payload);
        console.log(`Notification sent to ${user.userId}`);
      } catch (error) {
        // Handle WebPushError with status code 410 (Gone)
        if (error.statusCode === 410) {
          console.warn(`Subscription for ${user.userId} is no longer valid. Removing from the database.`);
          // Remove the invalid subscription from the database
          await SubsUser.deleteOne({ userId: user.userId });
        } else {
          console.error(`Error sending notification to ${user.userId}:`, error);
        }
      }
    }

    console.log('Notifications sent to all users.');
    res.status(200).json({ message: 'Notifications sent to all users.' });
  } catch (error) {
    console.error('Error fetching users or sending notifications:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});



//blogpost api

router.post('/blogpost', async (req, res) => {
  try {
    const {
      thumnail,
      title,
      description,
      authImage,
      authName,
      content
    } = req.body;

    const newBlogp = new BlogP({
      thumnail,
      title,
      description,
      authImage,
      authName,
      content
    })
    const savedPost = await newBlogp.save()
    res.json(savedPost);


  } catch (error) {
    console.log('an error ', error)
    res.status(500).json(error, "internal error ")
  }
})



router.get('/post/:id', async (req, res) => {
  const postId = req.params.id;
  try {
    const blogpost = await BlogP.findById(postId);
    if (!blogpost) {
      return res.status(404).json({ error: "blog post not found" })
    }
    res.json(blogpost)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})



router.get('/posts', async (req, res) => {
  try {
    const BlogPosts = await BlogP.find()
    res.json(BlogPosts)
  } catch (error) {
    res.status(500).json({ error: error.maxAge })
  }
})



router.put('/posts/:id', async (req, res) => {
  try {
    const postId = req.params.id;
        const { thumnail, title, description, authImage, authName, content } = req.body;

    const existingPost = await BlogP.findById(postId);

    if (!existingPost) {
      return res.status(404).json({ error: "Blogs not found" });
    }

    existingPost.thumnail = thumnail;
    existingPost.title = title;
    existingPost.description = description;
    existingPost.authName = authName;
    existingPost.authImage = authImage;
    existingPost.content = content;

    const updatePost = await existingPost.save();
    res.json(updatePost);
  } catch (error) {
    console.error('an error encountred', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});



module.exports = router;



