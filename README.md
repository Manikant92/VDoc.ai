# VDoc.ai – Virtual Doctor for Preliminary Diagnosis

**VDoc.ai** is a web-based virtual doctor application designed to provide preliminary health assessments based on user symptoms, facial metrics, and emotional state — all through webcam and voice interaction.

---

## 🩺 Problem Statement
- Patients often ignore early-stage symptoms.
- High consultation fees discourage visits for minor symptoms.
- Rural/semi-urban areas lack adequate medical support.

---

## 💡 Idea
VDoc.ai helps users:
- Analyze physical and mental health remotely.
- Understand probable diseases through symptoms.
- Identify specialists to consult for further care.

---

## 🚀 Features
- 💓 Heart rate detection via **rPPG** (webcam-based, no contact).
- 😊 Real-time **emotion recognition** using Face API.
- 🗣️ **Voice-based symptom screening** using Web Speech API.
- 🧠 Preliminary **disease diagnosis** via Infermedica API.
- 🧑‍⚕️ Suggests appropriate specialists.
- 🔬 Autism detection (90%+ accuracy via AutoML).
- 🧴 Skin tone and acne analysis via custom image classifier.

---

## 🧱 Tech Stack
- **Frontend:** HTML, CSS, Bootstrap
- **Backend:** Node.js, Express, Jade
- **APIs & Libraries:** Infermedica, Face-API.js, TensorFlow.js, OpenCV, Web Speech API, AutoML, Clarifai
- **Heart Rate Algorithm:** [heartbeat-js](https://github.com/prouast/heartbeat-js)

---

## 📈 Benefits
- Enables early disease detection.
- Accessible in underserved regions.
- Educates users about their conditions and treatments.
- Reduces unnecessary doctor visits.

---

## 🔮 Future Enhancements
- Integrate MediaWiki for diagnostic explanation.
- Emotional state history tracking.
- Integration with nearby hospitals and doctors.
- Appointment booking and e-consultation system.

---

## 📜 Credits
- [heartbeat-js](https://github.com/prouast/heartbeat-js)
- [Face-API.js](https://github.com/justadudewhohacks/face-api.js)
- [OpenCV Haar Cascade](https://github.com/avelino/python-opencv-detect/blob/master/haarcascade_frontalface_alt.xml)

---

## 👩‍⚕️ Try it out!
Clone the repo, run the app, and experience a futuristic way to self-screen and learn about your health!
