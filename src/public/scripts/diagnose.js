async function evidence(text, age, sex) {
    return new Promise((resolve, reject) => {
        let body = {
            text: text,
            age: { value: age },
            sex: sex
        }

        fetch("https://api.infermedica.com/v3/parse", {
            body: JSON.stringify(body),
            headers: {
                "App-Id": "",
                "App-Key": "",
                "Content-Type": "application/json"
            },
            method: "POST"
        })
            .then(res => res.json())
            .then(json => {
                let evidence = [];
                let mentions = json.mentions;
                mentions.forEach(mention => evidence.push({ id: mention.id, choice_id: mention.choice_id }))
                return resolve(evidence);
            })
            .catch(err => {
                return reject(err);
            });
    })
}

async function diagnose(evidence, age, sex) {
    return new Promise((resolve, reject) => {
        let body = {
            evidence: evidence,
            age: { value: age },
            sex: sex
        }

        fetch("https://api.infermedica.com/v3/diagnosis", {
            body: JSON.stringify(body),
            headers: {
                "App-Id": "",
                "App-Key": "",
                "Content-Type": "application/json"
            },
            method: "POST"
        })
            .then(res => res.json())
            .then(json => {
                return resolve(json.conditions);
            })
            .catch(err => {
                return reject(err);
            })
    })
}

async function specialists(evidence, age, sex) {
    return new Promise((resolve, reject) => {
        let body = {
            evidence: evidence,
            age: { value: age },
            sex: sex
        }

        fetch("https://api.infermedica.com/v3/recommend_specialist", {
            body: JSON.stringify(body),
            headers: {
                "App-Id": "",
                "App-Key": "",
                "Content-Type": "application/json"
            },
            method: "POST"
        })
            .then(res => res.json())
            .then(json => {
            return resolve(json.recommended_specialists);
            })
            .catch(err => {
            return reject(err);
            })
    })
}

async function getDiagnosis(text, age, sex) {
    var result = {};
    var sympLst = [];

    let data = await evidence(text, age, sex)
    result.symptoms = data;

    let specialist = await specialists(data, age, sex);
    result.specialists = specialist;

    let diagnosis = await diagnose(data, 34, 'male')
    result.conditions = diagnosis;
    

    console.log('Symptoms data: ',result.conditions[0]['name']);
    for (var i = 0; i < result.conditions.length; i++) { 
        sympLst.push(result.conditions[i]['name']);
    }

    // return result;
    return sympLst; //result.conditions[0]['name']
    
}

export{
    getDiagnosis
  }