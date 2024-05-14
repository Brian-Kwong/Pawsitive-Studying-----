import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		trim: true,
	},
	pronouns: {
		type: String,
		required: false,
		trim: true,
	},
	username: {
		type: String,
		required: true,
		trim: true,
	},
	email: {
		type: String,
		required: true,
		trim: true,
	},
	password: {
		type: String,
		required: true,
		trim: true,
	},
	memberSince: {
		type: Date,
		required: true,
		default: Date.now, // 使用 Date.now 作为默认值生成函数
	},
	profileImage: {
		data: Buffer,
		required: false
	},
	tasks: [{
		name: {
			type: String,
			required: true,
			trim: true,
		},
		course: {
			type: String,
			required: false,
			trim: true,
			default: "None"
		},
		description: { // 在此加入冒号
			type: String,
			required: false,
			trim: true,
			default: "None"
		},
		time: {
			type: Number,
			required: true,
			default: 0
		},
		points: {
			type: Number,
			required: true,
			default: 0
		}
	}],
	characters: [{
		type: Schema.Types.ObjectId, // 修正数据类型，添加逗号
		ref: "Characters"
	}]
}, { collection: "Users" }); // 确保包含结束的大括号和小括号

const charactersSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		trim: true,
	},
	description: {
		type: String,
		required: false,
		trim: true,
		default: "None"
	},
	pointsRequired: {
		type: Number,
		required: true,
		default: 0
	},
	image: {
		data: Buffer,
		required: false
	}
}, { collection: "Characters" })

const User = mongoose.model("User", userSchema);
const Character = mongoose.model("Characters", charactersSchema);

export default { User, Character };