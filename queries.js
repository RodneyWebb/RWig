const Model = require("./schema.js")

async function createPost(req, res) {
    const post = new Model({
        userid: req.body.userid,
        username: req.body.username,
        image: req.body.image,
        caption: req.body.caption,
        likes: req.body.likes,
        comments: req.body.comments,
        timestamp: Date.now()
    })

    const savePost = await post.save()
    res.status(200).json(savePost)
}

async function postComment(req, res) {
    const comment = new Model({
        username: req.body.username,
        content: req.body.content,
        timestamp: Date.now()
    })

    const saveComment = await comment.save()
    res.status(200).json(saveComment)
}

async function getPosts(req, res) {
    const userid = req.body.userid

    const post = await Model.findById(userid)
    res.status(200).json(post)
}

module.exports = {
    createPost,
    postComment,
    getPosts
}