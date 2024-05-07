import { expect } from "chai"
import "dotenv/config.js"
import dao from "../../src/dao/factory.js"
import { Types } from "mongoose"
const { Pet } = dao