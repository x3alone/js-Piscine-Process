function neuron(array) {
    let result = {};

    array.forEach(element => {
        let [namePart, questionPart, responsePart] = element.split(/[:?!-]/);
        
        let question = formatQuestion(questionPart);
        let response = responsePart.trim();

        let name = namePart.trim().toLowerCase();
        initializePerson(result, name);

        addResponse(result, name, question, namePart.trim(), response);
    });

    return result;
}

function formatQuestion(questionPart) {
    let question = questionPart.trim().toLowerCase().replace(/ /g, "_");
    return question.endsWith("_") ? question.slice(0, -1) : question; 
}

function initializePerson(result, name) {
    if (!result[name]) {
        result[name] = {};
    }
}

function addResponse(result, name, question, personName, response) {
    const formattedQuestion = question;

    if (!result[name][formattedQuestion]) {
        result[name][formattedQuestion] = {
            order: formattedQuestion.replace(/_/g, " "),
            responses: []
        };
    }

    result[name][formattedQuestion].responses.push(response);
}



// const data = [
//     "John: What is your name? - John: My name is John",
//     "Jane: Where do you live? - Jane: I live in New York",
//     "John: What is your favorite color? - John: My favorite color is blue",
//     "Jane: What is your favorite hobby? - Jane: I love painting"
// ];

// console.log(neuron(data));
