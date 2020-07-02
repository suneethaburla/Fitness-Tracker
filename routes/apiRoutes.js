const router = require('express').Router();

const { getWorkout, createWorkout} = require("./../controllers/workoutController")


router.route("/workouts")
        .get(getWorkout)
        .post(createWorkout)

module.exports = router;