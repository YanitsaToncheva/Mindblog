import { Router } from 'express';
import { blogService } from '../services/index.js';
import { isAuth } from '../middlewares/authMiddleware.js';

const homeController = Router();


homeController.get('/', async (req, res) => {

    const latestBlogs = await blogService.getLatest();
  
    res.render('home', { blogs: latestBlogs});
});

homeController.get('/profile', isAuth, async (req, res) => {
    const userId = req.user.id;
    
    const createdBlogs = await blogService.getAllByOwner(userId);
    
    res.render('profile', { createdBlogs, });
});


export default homeController;