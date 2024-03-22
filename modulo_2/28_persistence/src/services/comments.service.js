import repository from "../repositories/comments.rep.js";
import CommentDTO from "../dto/comment.dto.js";

class CommentsService {
  constructor() {
    this.repository = repository;
  }
  create = async (data) => {
    data = new CommentDTO(data);
    const response = await this.repository.create(data);
    return response;
  };
  read = async ({ filter, options }) =>
    await this.repository.read({ filter, options });
  readOne = async (id) => await this.repository.readOne(id);
  update = async (id, data) => await this.repository.update(id, data);
  destroy = async (id) => await this.repository.destroy(id);
}

const service = new CommentsService();
export default service;
