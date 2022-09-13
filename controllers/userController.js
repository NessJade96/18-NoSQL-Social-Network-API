const { ObjectId } = require('mongoose').Types;
const { User, Thought } = require('../models');

// Aggregate function to get the number of users friends
const friendCount = async () =>
	User.aggregate()
		.count('friendCount')
		.then((numberOfFriends) => numberOfFriends);

// ** Need to come back to this function below and finish it! (getSingleUser)
// Aggregate function for getting populated thought and friend data
const getThoughtsAndFriends = async (userId) =>
	User.aggregate([
		// only include the given user by using $match
		{ $match: { _id: ObjectId(userId) } },
		{
			$unwind: '$thoughts',
		},
		{
			$group: {
				_id: ObjectId(null),
				overallGrade: { $avg: '$thoughts.score' },
			},
		},
	]);

module.exports = {
	// GET all users
	getUsers(req, res) {
		User.find()
			.then(async (users) => {
				const userObj = {
					users,
					friendCount: await friendCount(), // retrieves the length of the users friends array.
				};
				return res.json(userObj);
			})
			.catch((err) => {
				console.log(err);
				return res.status(500).json(err);
			});
	},
	// GET a single user
	// **Need to come back to the populated thoughts and frineds data part of this API call function.
	getSingleUser(req, res) {
		Student.findOne({ _id: req.params.userId })
			.select('-__v')
			.then(async (user) =>
				!user
					? res.status(404).json({ message: 'No user with that ID' })
					: res.json({
							user,
							// grade: await grade(req.params.userId),
					  })
			)
			.catch((err) => {
				console.log(err);
				return res.status(500).json(err);
			});
	},

	// POST create a new user
	createUser(req, res) {
		User.create(req.body)
			.then((user) => res.json(user))
			.catch((err) => res.status(500).json(err), console.log(err));
	},

	// PUT update a user by its _id
	updateUser(req, res) {
		User.findOneAndUpdate(
			{ _id: req.params.userId },
			{ $set: req.body },
			{ runValidators: true, new: true }
		)
			.then((user) =>
				!user
					? res.status(404).json({ message: 'No user with this id!' })
					: res.json(user)
			)
			.catch((err) => res.status(500).json(err), console.log(err));
	},

	// Delete a user and remove the associated thoughts
	deleteUser(req, res) {
		User.findOneAndRemove({ _id: req.params.userId })
			.then((user) =>
				!user
					? res.status(404).json({ message: 'No such user exists' })
					: Thought.findOneAndUpdate(
							{ users: req.params.userId },
							{ $pull: { users: req.params.userId } },
							{ new: true }
					  )
			)
			.then((user) =>
				!user
					? res.status(404).json({
							message: 'User deleted, but no thoughts found',
					  })
					: res.json({ message: 'User successfully deleted' })
			)
			.catch((err) => {
				console.log(err);
				res.status(500).json(err);
			});
	},
};
