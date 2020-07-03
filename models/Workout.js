const {Schema, model} = require("mongoose");

const workoutSchema = new Schema( {
    day: {
        type: Date,
        default: () => new Date()
      },

    exercise: [
        {
            type: {
                type: String,
                trim: true,
                required: [true, "You must enter the exercise type."]
            },
            name: {
                type: String,
                trime: true,
                required: [true, "You must enter the name of the exercise."]
            },
            duration: {
                type: Number,
                required: [true, "You must enter the duration of the exercise, in minutes."]
            },
            weight: {
                type: Number
            },
            reps: {
                type: Number
            },
            sets: {
                type: Number
            },
            distance: {
                type: Number
            }
        }
    ]
},
{
     // include any virtual properties when data is requested
    toJSON: { virtuals: true }
}

)
// adds a dynamically-created property to schema
workoutSchema.virtual("totalDuration").get(function(){
    // "reduce" array of exercises down to just the sum of their durations
    return this.exercises.reduce((sum, exercise) => {
        return sum + exercise.duration;
    }, 0);
})

module.exports = model("Workout", workoutSchema);