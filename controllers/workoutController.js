const { Workout} = require('./../models/index');

module.exports = {
    createWorkout: async (req, res) => {
        try {
            const exercise = await  Workout.create  ({
                type:"workout"

            });
            return res.status(200).json(exercise);
        } catch (error) {
            console.log("Error creating workout.", error)
            
        }
    },

    getWorkout: async (req,res) => {
        try {

            const workouts = await Workout.find();
            if (!workouts) {
                return res.status(404).json({ error: "No workout found" });
            }
            return res.status(200).json(workouts)
            
        } catch (error) {
            return res.status(403).json({ e });
            
        }
    }
}