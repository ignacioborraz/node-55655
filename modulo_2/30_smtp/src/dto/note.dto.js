import crypto from "crypto";

class NoteDTO {
  constructor(data) {
    process.env.PERSISTENTE !== "MONGO" && (this._id = crypto.randomBytes(12).toString("hex"));
    this.text = data.text;
    this.category = data.category || "to do";
    this.user_id = data.user_id;
    process.env.PERSISTENTE !== "MONGO" && (this.createdAt = new Date());
    process.env.PERSISTENTE !== "MONGO" && (this.updatedAt = new Date());
  }
}

export default NoteDTO;
