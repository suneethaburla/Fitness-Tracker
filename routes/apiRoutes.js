const router = require("express").Router();
const { getWorkout,createWorkout,getWorkoutsInRange,addExercise } = require("../controllers/workoutController");

// has /api prepended to it
router.route("/workouts")
    .get(getWorkout)
    .post(createWorkout)

router.route("/workouts/range")
    .get(getWorkoutsInRange)

router.route("/workouts/:id")
    .put(addExercise)

module.exports = router;

