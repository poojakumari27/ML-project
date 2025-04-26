function predictCrop() {
    const crops = ["papaya", "coffee", "muskmelon", "wheat", "rice"];
    const randomCrop = crops[Math.floor(Math.random() * crops.length)];
    displayResult(randomCrop);
}

function displayResult(crop) {
    const predictionText = document.getElementById("predictionText");
    const cropImage = document.getElementById("cropImage");
    const cropDetails = document.getElementById("cropDetails");

    predictionText.innerText = "Best Crop: " + crop;

    const cropImages = {
        "papaya": "https://plantsguru.com/cdn/shop/files/plantsguru-fruitplants-papaya_24d50e47-00e6-4bda-a014-eccabd8881b7.jpg?v=1735618370",
        "coffee": "https://weaverscoffee.com/cdn/shop/articles/Coffee_beans_and_red_ripe_coffee_cherries_on_coffee_tree_1000x.jpg?v=1695928346",
        "muskmelon": "https://media.istockphoto.com/id/1206450705/photo/fresh-musk-melon-on-tree.jpg?s=612x612&w=0&k=20&c=-4aQ6fKDb-Q9zCVPfYpayVjWD0miznZLtz-1FbDXL_g=",
        "wheat": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp-ksDCUtTQ-Rf3npO3x9-jbzYrSmYfQMnLg&s",
        "rice": "https://static.vecteezy.com/system/resources/thumbnails/037/349/469/small_2x/ai-generated-a-handful-of-long-grain-white-rice-spills-out-on-the-wooden-table-food-light-natural-colors-high-quality-ai-generative-photo.jpg"
    };

    const cropInfo = {
        "papaya": {
            "fertilizer": "Organic compost, NPK 10-10-10",
            "water": "Regular watering, avoid waterlogging",
            "soil": "Well-drained sandy loam",
            "climate": "Warm tropical climate, 25-30°C",
            "pests": "Aphids, mealybugs; use neem oil"
        },
        "coffee": {
            "fertilizer": "Nitrogen-rich fertilizers, compost",

            "water": "Moderate watering, avoid excess moisture",

            "soil": "Rich, well-drained volcanic soil",
            
            "pests": "Coffee borer beetle; use biological control"
        },
        "muskmelon": {
            "fertilizer": "Nitrogen-based fertilizer, organic manure",

            "water": "High water demand, especially in dry periods",

            "soil": "Well-drained sandy soil",
           
            
            "pests": "Powdery mildew, aphids; use fungicide"
        },
        "wheat": {
            "fertilizer": "Nitrogen, phosphorus-rich fertilizers",

            "water": "Moderate water need, avoid waterlogging",

            "soil": "Loamy soil with good drainage",
            
            
            "pests": "Rust disease, wheat aphids; use insecticides"
        },
        "rice": {
            "fertilizer": "Urea, potash-based fertilizers",

            "water": "Requires flooded fields",

            "soil": "Clayey soil, highly water-retentive",
            
            
            "pests": "Rice weevils, blast disease; use biopesticides"
        }
    };

    if (cropImage && cropImages[crop.toLowerCase()]) {
        cropImage.src = cropImages[crop.toLowerCase()];
        cropImage.style.display = "block";
        cropImage.alt = crop;
    } else {
        cropImage.style.display = "none";
    }

    if (cropDetails) {
        const details = cropInfo[crop.toLowerCase()];
        if (details) {
            cropDetails.innerHTML = `
                <strong>Fertilizer:</strong> ${details.fertilizer}<br>
                <strong>Water Requirement:</strong> ${details.water}<br>
                <strong>Soil Type:</strong> ${details.soil}<br>
                <strong>Pests & Diseases:</strong> ${details.pests}
            `;
            cropDetails.style.display = "block";
        } else {
            cropDetails.style.display = "none";
        }
    }
}