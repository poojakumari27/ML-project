import numpy as np
from flask import Flask, request, render_template
import pickle

# Create flask app
app = Flask(__name__)

# Load the model
try:
    model = pickle.load(open("model.pkl", "rb"))  # Ensure correct filename
except Exception as e:
    print(f"Error loading model: {str(e)}")

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/predict", methods=["POST"])
def predict():
    try:
        # Collect data from form inputs
        float_features = [float(x) for x in request.form.values()]  # Convert inputs to float
        features = np.array([float_features]).reshape(1, -1)  # Ensure proper reshaping

        # Make a prediction using the loaded model
        prediction = model.predict(features)

        # Convert prediction to a string (model likely returns an array)
        predicted_crop = str(prediction[0])

        # Render prediction result on the HTML page
        return render_template("index.html", prediction_text=f"The Predicted Crop is {predicted_crop}")

    except Exception as e:
        # Handle any errors gracefully
        return render_template("index.html", prediction_text=f"An error occurred: {str(e)}")

if __name__ == "__main__":
    app.run(debug=True)