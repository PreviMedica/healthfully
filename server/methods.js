Meteor.methods({

    // simplify code into an updateform pattern, pass it an array
    // question object {question: question, answer: answer}
    // Client onboard methods
    updateBasicForm: function(currentUser, age, height, weight) {
        console.log(currentUser)
        var docId = Docs.findOne({
            userId: currentUser
        })._id
        Docs.update(docId, {
                $set: {
                    basicInfo: [
                        ["age", age],
                        ["height", height],
                        ["weight", weight]
                    ]
                }
        });
    },
    updateWeightDigestionForm: function(currentUser, weightComfort, weightGoal, conditions, digestiveIssues, bowelMovements) {
        var docId = Docs.findOne({
            userId: currentUser
        })._id;

        Docs.update(docId, {
            $set: {
                weight: [
                    ["Do you feel comfortable at your current weight?", weightComfort],
                    ["What is your weight goal?", weightGoal],
                    ["What medical conditions have you been diagnosed if any", conditions]
                    ["Digestive Issues; check all that apply: ",digestiveIssues],
                    ["How often do you have bowel movements?",bowelMovements]
                ]
            }
        });
    },

    updateMedsForm: function(currentUser, medications, supplements) {
        var docId = Docs.findOne({
            userId: currentUser
        })._id;

        Docs.update(docId, {
            $set: {
                medications: [
                    ["Current Medications", medications],
                    ["Current Suppliments", supplements]
                ]
            }
        });
    },

    updateAllergiesForm: function(currentUser, allergies, mdDiets) {
        var docId = Docs.findOne({
            userId: currentUser
        })._id;

        Docs.update(docId, {
            $set: {
                allergies: [
                    ["Do you have any food allergies?", allergies],
                    ["Has your physician recomended a special diet?",mdDiets]
                ]
            }
        });
    },

    updateHonorcode: function(currentUser, policy) {
        var docId = Docs.findOne({
            userId: currentUser
        });

        Docs.update(docId, {
            $set: {
                honorcode: policy
            }
        });
    },

    updateOrientationTimes: function(currentUser, orientTime) {
        var docId = Docs.findOne({
            userId: currentUser
        })._id;

        Docs.update(docId, {
            $set: {
                orientationTime: orientTime
            }
        });
    },

    updateLabInfo: function(currentUser, cholestrol, triglycerides, ldl, hdl, fastingGlucose, hba1c, crp, bpsystolic, bpdiastolic ) {
        var docId = Docs.findOne({userId: currentUser})._id;

        Docs.update(docId, {
            $set : { 
                labinfo: [
                ["cholestrol", cholestrol], 
                ["triglycerides",triglycerides], 
                ["LDL", ldl], 
                ["HDL", hdl], 
                ["fasting_glucose", fastingGlucose], 
                ["HbA1C", hba1c], 
                ["CRP", crp], 
                ["BPsystolic", bpsystolic], 
                ["BPdiastolic", bpdiastolic]  
        ]
        }
    })
    },

    // Admin methods
    pair: function(client, providerId, providerTitle, role) {
    Pairings.upsert({userId: client},{ $push: { pairings: { providerId: providerId, providerTitle: providerTitle, role: role }}});
    },
    unpair: function(userId, providerId) {
        
    }
});
