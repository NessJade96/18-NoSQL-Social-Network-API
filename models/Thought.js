const { Schema, model } = require('mongoose');

// Schema to create a thought model
const thoughtSchema = new Schema(
	{
		thoughtText: {
			type: String,
			required: true,
			minlength: 1,
			maxlength: 280,
		},
		// Use a getter method to format the timestamp on query
		createdAt: {
			type: Date,
			default: Date.now(),
		},
		username: {
			type: String,
			required: true,
		},
		reactions: [
			{
				type: Schema.Types.ObjectId,
				ref: 'Reactions',
			},
		],
	},
	{
		// AS ABOVE: Use a getter method to format the timestamp on query
		timestamps: true,
		toJSON: {
			getters: true,
			virtuals: true,
		},
	}
);

const Thought = model('thought', thoughtSchema);

module.exports = Thought;
