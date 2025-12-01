import Blog from "../models/Blog.js";


export function getAll() {
    return Blog.find();
}

export function getOne(blogId) {
    return Blog.findById(blogId).populate(['owner','followers']);
}

export function getLatest() {
    return Blog.find()
    .sort({_id: -1})
    .limit(3);

}


export function create(blogData, userId) {
    return Blog.create({
        ...blogData,
        owner: userId,
    });
}

export function follow(blogId, userId) {
//     const blog = await Blog.findById(blogId);

//     blog.followers.push(userId);
//     return blog.save();
    return Blog.findByIdAndUpdate(blogId, { $push: { followers: userId }})

}

export function remove(blogId, userId) {
    return Blog.findByIdAndDelete(blogId);
}

