const { Workout } = require('./../models/index');

module.exports = {
    createWorkout: async (req, res) => {
        try {
            const exercise = await Workout.create({
                type: "workout"

            });
            return res.status(200).json(exercise);
        } catch (error) {
            return res.status(403).json({ error });

        }
    },

    getWorkout: async (req, res) => {
        try {

            const workouts = await Workout.find();
            if (!workouts) {
                return res.status(404).json({ error: "No workouts found" });
            }
            return res.status(200).json(workouts)

        } catch (error) {
            return res.status(403).json({ error });

        }
    },

    getWorkoutsInRange: async (req, res) => {
        try {

            const workoutsInRange = await Workout.find().limit(7);
            if (!workoutsInRange) {
                return res.status(404).json({ error: "No workouts found" });
            }
            return res.status(200).json(workoutsInRange)
        } catch (error) {
            return res.status(403).json({ error });

        }
    },

    addExercise: ({body, params}, res) => {
        const workoutId = params.id;
        let savedExercises = [];
        Workout.find({ _id: workoutId })
            .then(data => {
                savedExercises = data[0].exercises;
                res.json(data[0].exercises);
                let allExercises = [...savedExercises, body];
                updateWorkout(allExercises);
            })
            .catch(err => {
                res.json(err);
            });

            function updateWorkout(exercises){
                Workout.findByIdAndUpdate(workoutId, { exercises }, err => {
                if (err) throw err
                })
            }
    }
}