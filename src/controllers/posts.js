class PostsController {
    constructor (Post) {
      this.Post = Post
    }
  
    async findAll (req, res) {
      try {
        const list = await this.Post.find({});
        res.send(list);
      } catch (error) {
        res.status(400).send(error);
      }
    }
  
    async getById (req, res) {
    }
  
    async create (req, res) {
    }
  
    async update (req, res) {
    }
  
    async delete (req, res) {
    }
}
  
export default PostsController
  