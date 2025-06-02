/** 
 * null = record button wont do anything
 * speak = record button takes spoken answer
 * photo = record button takes photo
*/
const side_data = [{
        "step": 0,
        "question": "",
        "instructions": "In this procedure, you will be able to get live results on your physical, social, and mental health while also getting live results on emotion and heart rate. Press Next Question to begin.",
        "type": "null"
    },
    {
        "step": 1,
        "question": "What is your Age?, What is your Sex?",
        "instructions": "Respond to the question by pressing the 'Record' button and it turns white when it is recording. Press Next Question when completed ",
        "type": "speak"
    },
    {
        "step": 2,
        "question": "Please mention your symptoms that you are suffering from?",
        "instructions": "Respond to the question by pressing the 'Record' button and it turns white when it is recording. Press Next Question when completed",
        "type": "speak"
    },
    {
        "step": 3,
        "question": "How long are you suffering with these symptoms?",
        "instructions": "Respond to the question by pressing the 'Record' button and it turns white when it is recording. Press Next Question when completed",
        "type": "speak"
    },
    {
        "step": 4,
        "question": "Do you feel stressed or are you able to foster positive mental health",
        "instructions": "Respond to the question by pressing the 'Record' button and it turns white when it is recording. Press Next Question when completed",
        "type": "speak"
    },
    {
        "step": 5,
        "question": "",
        "instructions": "Last Step! Smile towards the camera to take a photo of yourself for an analysis!",
        "type": "photo"
    },
    {
        "step": 6,
        "question": "",
        "instructions": "Great Job! Click Next Questions and scroll down to proceed and see your results!",
        "type": "null"
    }
]

var emotionSeconds = {
    "angry": 0,
    "disgusted": 0,
    "fearful": 0,
    "happy": 0,
    "neutral": 0,
    "sad": 0,
    "surprised": 0,
    "offcamera": 0
}
var emotionArray = [];
var heartrate = [];
var textResponses = [];
var screenshotImage = 0;

function clearData() {
    emotionSeconds = {
        "angry": 0,
        "disgusted": 0,
        "fearful": 0,
        "happy": 0,
        "neutral": 0,
        "sad": 0,
        "surprised": 0,
        "offcamera": 0
    }
    emotionArray = [];
    heartrate = [];
    textResponses = [];
    screenshotImage = 0;
    console.log("Successfully reset data!");
}

export {side_data, emotionSeconds, emotionArray, heartrate, textResponses, screenshotImage, clearData};