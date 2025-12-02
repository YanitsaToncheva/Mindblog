import { Router } from 'express';
import { isAuth } from '../middlewares/authMiddleware.js';
import { blogService } from '../services/index.js';
import { getErrorMessage } from '../utils/errorUtils.js';


const blogController = Router();

blogController.get('/', async (req, res) => {
    const blogs = await blogService.getAll();
    res.render('blogs', { blogs });
})



blogController.get('/create', isAuth, (req, res) => {
    res.render('blogs/create');
});

blogController.post('/create', isAuth, async (req, res) => {
    const blogData = req.body;
    const userId = req.user.id;

  
    try {
        await blogService.create(blogData, userId);
    
        res.redirect('/blogs');
    } catch (err) {
        res.render('blogs/create', { 
            error: getErrorMessage(err),
            blog: blogData,
         })
    }
});

blogController.get('/:blogId/details', async (req, res) => {
    const blogId = req.params.blogId;
    const userId = req.user?.id;
    const blog = await blogService.getOne(blogId);
    const isOwner = blog.owner.equals(userId);

    const followers = blog.followers.map(follower => follower.email).join(', ');

    const isFollowing = blog.followers.some(follower => follower.equals(userId));

    res.render('blogs/details', { blog, isOwner, followers, isFollowing });
});

blogController.get('/:blogId/follow', isAuth, async (req, res) => {
    const blogId = req.params.blogId;
    const userId = req.user.id;

    await blogService.follow(blogId, userId);
    res.redirect(`/blogs/${blogId}/details`);
});

blogController.get('/:blogId/delete', isAuth, async (req, res) => {
    const blogId = req.params.blogId;
    const userId = req.user.id;

    await blogService.remove(blogId,userId);
    res.redirect('/blogs');
});

blogController.get('/:blogId/edit', isAuth, async (req, res) => {
    const blogId = req.params.blogId;
    const blog = await blogService.getOne(blogId);

    if (!blog.owner.equals(req.user.id)) {
        throw {
            statusCode: 401,
            message: 'Cannot edit blog that you are not owner!'
        }
    }

    res.render('blogs/edit', { blog });
});

blogController.post('/:blogId/edit', isAuth, async (req, res) => {

    const blogId = req.params.blogId;
    const blogData = req.body;
    const userId = req.user.id;

    const blog = await blogService.getOne(blogId);

    if (!blog.owner.equals(userId)) {
        throw {
            statusCode: 401,
            message: 'Cannot edit blog that you are not owner!'
        }
    }

    try {
        await blogService.edit(blogId, blogData);
        res.redirect(`/blogs/${blogId}/details`);
    } catch (err) {
        res.render('blogs/edit', {
            blog: blogData,
            error: getErrorMessage(err),
        })
    }
});

export default blogController;