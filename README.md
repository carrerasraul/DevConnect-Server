# DevConnector - Back End
Server side of React DevConnector Client. Contains functions to enable CRUD operations for client side application.

Visit the live site here: https://dev-connect-client.now.sh/

---

## Technologies Used
- Node
- Express Framework
- Passport Authentification
- Jwt Security
- Helmet

---

## Functionality

### Users

Allows users to create accounts 

```    
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    avatar: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
```

### Profile

Allows user to create a profile including their job experience, education, github account and social media platforms

```
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    company: {
        type: String
    },
    website: {
        type: String
    },
    location: {
        type: String
    },
    status: {
        type: String,
        required: true
    },
    skills: {
        type: [String],
        required: true
    },
    bio: {
        type: String
    },
    githubusername: {
        type: String
    },
    experience: [{
        title: {
            type: String,
            required: true
        },
        company: {
            type: String,
            required: true
        },
        location: {
            type: String
        },
        from: {
            type: Date,
            required: true
        },
        to: {
            type: Date
        },
        current: {
            type: Boolean,
            default: false
        },
        description: {
            type: String
        }
    }],
    education: [{
        school: {
            type: String,
            required: true
        },
        degree: {
            type: String,
            required: true
        },
        fieldOfStudy: {
            type: String,
            required: true
        },
        from: {
            type: Date,
            required: true
        },
        to: {
            type: Date,
            required: true
        },
        current: {
            type: Boolean,
            default: false
        },
        description: {
            type: String
        }
    }],
    social: {
        youtube: {
            type: String
        },
        twitter: {
            type: String
        },
        facebook: {
            type: String
        },
        linkedin: {
            type: String
        },
        instagram: {
            type: String
        },
    },
    date: {
        type: Date,
        default: Date.now
    }
```

### Posts

Allows user to make posts as well as comment and like them

```
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    text: {
        type: String,
        required: true
    },
    name: {
        type: String,
    },
    avatar: {
        type: String
    },
    likes: [{
        user: {
            type: Schema.Types.ObjectId,
            ref: 'users'
        }
    }],
    comments: [{
        user: {
            type: Schema.Types.ObjectId,
            ref: 'users'
        },
        text: {
            type: String,
            required: true
        },
        name: {
            type: String,
        },
        avatar: {
            type: String
        },
        date: {
            type: Date,
            default: Date.now
        }
    }],
    date: {
        type: Date,
        default: Date.now
    }

```
---

## API Overview

## Auth

GET
```
api/auth
```
POST
```
api/auth

        const {
            email,
            password
        } = req.body;
```

## Posts

POST
```
@route   POST api/posts
@desc    Create a post
@access  Private

newPost = new Post({
            text: req.body.text,
            name: user.name,
            avatar: user.avatar,
            user: req.user.id
        })
```
GET
```
@route   GET api/posts
@desc    Get all posts
@access  Private

posts = await Post.find().sort({
            date: -1
        });
```
GET
```
@route   GET api/posts/:id
@desc    Get post by id
@access  Private

post = await Post.findById(req.params.id)
```
DELETE
```
@route   DELETE api/posts/;id
@desc    Delete a post
@access  Private

post = await Post.findById(req.params.id)
        await post.remove();

```
PUT
```
@route   PUT api/posts/like/:id
@desc    Like a post
@access  Private

        post.likes.unshift({
            user: req.user.id
        });

        await post.save()
```
PUT
```
@route   PUT api/posts/unlike/:id
@desc    Unlike a post
@access  Private

        post.likes.splice(removeIndex, 1)

        await post.save()
```
POST
```
@route   POST api/posts/comment/:id
@desc    Comment on a post
@access  Private

        const newComment = {
            text: req.body.text,
            name: user.name,
            avatar: user.avatar,
            user: req.user.id
        };
```
DELETE
```
@route   DELETE api/posts/comment/:id/:comment_id
@desc    Delete comment
@access  Private

        post.comments.splice(removeIndex, 1)

        await post.save()
```

---
## Screenshots

### Landing
![Landing Page](screenshots/Landing.png)

### Developers
![Developers Page](screenshots/Developers.png)

### Dashboard Page
![Dashboard Page](screenshots/Dashboard.png)

### Posts Page
![Posts Page](screenshots/Posts.png)

### Profile Page
![Profile Page](screenshots/Profile.png)

