const { Thought, User } = require('../models');

// Aggregate function to get the number of reactions on Thought
const reactionCount = async () =>
	Thought.aggregate()
		.count('reactionCount')
		.then((numberOfReactions) => numberOfReactions);

module.exports = {
	// GET all thoughts
	getThoughts(req, res) {
		Thought.find()
			.then(async (thoughts) => {
				const thoughtsObj = {
					thoughts,
					reactionCount: await reactionCount(),
				};
				res.json(thoughts);
			})
			.catch((err) => res.status(500).json(err), console.log(err));
	},

	// GET a single thought by _id
	getSingleThought(req, res) {
		Thought.findOne({ _id: req.params.thoughtId })
			.select('-__v')
			.then((thought) =>
				!thought
					? res
							.status(404)
							.json({ message: 'No thought with that ID' })
					: res.json(thought)
			)
			.catch((err) => res.status(500).json(err), console.log(err));
	},

	// COME BACK TO THIS FUNCTION BELOW AND ADD IN BRACKETS
	// POST Create a thought -- (push the created thought's _id to the associated user's thoughts array field)
	createThought(req, res) {
		Thought.create(req.body)
			.then((thought) => res.json(thought))
			.catch((err) => {
				console.log(err);
				return res.status(500).json(err);
			});
	},

	// PUT update a thought by _id
	updateThought(req, res) {
		Thought.findOneAndUpdate(
			{ _id: req.params.thoughtId },
			{ $set: req.body },
			{ runValidators: true, new: true }
		)
			.then((thought) =>
				!thought
					? res
							.status(404)
							.json({ message: 'No thought with this id!' })
					: res.json(thought)
			)
			.catch((err) => res.status(500).json(err), console.log(err));
	},

	// DELETE a thought by _id
	deleteThought(req, res) {
		Thought.findOneAndDelete({ _id: req.params.thoughtId })
			.then((thought) =>
				!thought
					? res
							.status(404)
							.json({ message: 'No thought with that ID' })
					: User.deleteMany({ _id: { $in: thought.users } })
			)
			.then(() => res.json({ message: 'Thought and users deleted!' }))
			.catch((err) => res.status(500).json(err), console.log(err));
	},
};
