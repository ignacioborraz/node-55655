import CommentDTO from "../dto/comment.dto.js";
import dao from "../data/index.factory.js";

const { comments } = dao;

class CommentsRep {
  constructor() {
    this.model = comments;
  }
  create = async (data) => {
    data = new CommentDTO(data);
    const response = await this.model.create(data);
    return response;
  };
  read = async ({ filter, options }) =>
    await this.model.read({ filter, options });
  readOne = async (id) => await this.model.readOne(id);
  update = async (id, data) => await this.model.update(id, data);
  destroy = async (id) => await this.model.destroy(id);
}

const repository = new CommentsRep();
export default repository;
