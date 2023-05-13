const content = document.getElementById('contentgoeshere');
const submitBtn = document.getElementById('submitBtn');
const sonnetDisplayArea = document.getElementById('sonnetDisplay')
// const sonnets = require('./db/sonnets')
import { sonnets } from "./db/sonnets.js";

/* template:
    {   //no =  index = 
        num: , //integer
        imperativeToProcreate: , //boolean
        imageryDependent: , //boolean
        imagery: [], //array of strings
        subjectGenderExplicit: , //boolean
        genderOfSubject: , //male, female, or null
        ravagesOfTime: ,//boolean
        seasons: ,//boolean
        death: ,//boolean
        speakerRefersToSelf: ,//boolean
        speakerRefersToSelfAsPoet: ,//boolean
        poetryToPreserveSubjectsBeauty: ,//boolean
        memberOfSubsequence: ,//boolean
        metaphors: [] //array of strings
    }
*/

const sonnetInfo = [
    {   //no =  1 index = 0
        num: 1, //integer
        imperativeToProcreate: true, //boolean
        useOfImagery: true, //boolean
        imagery: ['flowers', 'face', 'eyes', 'fire'], //array of strings
        subjectGenderExplicit: false, //boolean
        genderOfSubject: null, //male, female, or null
        ravagesOfTime: true,//boolean
        seasons: true,//boolean
        death: true,//
        speakerRefersToSelf: false,//boolean
        speakerRefersToSelfAsPoet: false,//boolean
        poetryToPreserveSubjectsBeauty: false,//boolean
        memberOfSubsequence: false,//boolean
        metaphors: ['fire', 'ripening']
    },
    {   //no = 2 index = 1
        num: 2,
        imperativeToProcreate: true, //boolean
        useOfImagery: true, //boolean
        imagery: ['face', 'brow', 'field', 'clothing', 'eyes'], //array of strings
        subjectGenderExplicit: false, //boolean
        genderOfSubject: null, //male, female, or null
        ravagesOfTime: true,//boolean
        seasons: true,//boolean
        death: false,//boolean
        speakerRefersToSelf: false,//boolean
        speakerRefersToSelfAsPoet: false,//boolean
        poetryToPreserveSubjectsBeauty: false,//boolean
        memberOfSubsequence: false,//boolean
        metaphors: ['warfare']
    },
{   //no = 3 index = 2
        num: 3,
        imperativeToProcreate: true, //boolean
        useOfImagery: true, //boolean
        imagery: ['mirror', 'face', 'field'], //array of strings
        subjectGenderExplicit: true, //boolean
        genderOfSubject: 'male', //male, female, or null
        ravagesOfTime: true,//boolean
        seasons: true,//boolean
        death: true,//boolean
        speakerRefersToSelf: false,//boolean
        speakerRefersToSelfAsPoet: false,//boolean
        poetryToPreserveSubjectsBeauty: false,//boolean
        memberOfSubsequence: false,//boolean
        metaphors: ['agriculture']
    },
    {   //no = 4 index = 3
        num: 4,
        imperativeToProcreate: true, //boolean
        useOfImagery: false, //boolean
        imagery: [], //array of strings
        subjectGenderExplicit: false, //boolean
        genderOfSubject: null, //male, female, or null
        ravagesOfTime: false,//boolean
        seasons: false,//boolean
        death: true,//boolean
        speakerRefersToSelf: false,//boolean
        speakerRefersToSelfAsPoet: false,//boolean
        poetryToPreserveSubjectsBeauty: false,//boolean
        memberOfSubsequence: false,//boolean
        metaphors: ['squandering', 'miserliness']
    },
    {   //no = 5 index = 4
        num: 5,
        imperativeToProcreate: true, //boolean
        useOfImagery: true, //boolean
        imagery: ['leaves', 'frost', 'trees', 'snow', 'bareness', 'perfume', 'flowers'], //array of strings
        subjectGenderExplicit: false, //boolean
        genderOfSubject: null, //male, female, or null
        ravagesOfTime: true,//boolean
        seasons: true,//boolean
        death: false,//boolean
        speakerRefersToSelf: false,//boolean
        speakerRefersToSelfAsPoet: false,//boolean
        poetryToPreserveSubjectsBeauty: false,//boolean
        memberOfSubsequence: true,//boolean
        metahpors: ['distillation']
    },
    {   //no = 6 index = 5
        num: 6,
        imperativeToProcreate: true, //boolean
        useOfImagery: true, //boolean
        imagery: ['perfume'], //array of strings
        subjectGenderExplicit: false, //boolean
        genderOfSubject: null, //male, female, or null
        ravagesOfTime: true,//boolean
        seasons: true,//boolean
        death: true,//boolean
        speakerRefersToSelf: false,//boolean
        speakerRefersToSelfAsPoet: false,//boolean
        poetryToPreserveSubjectsBeauty: false,//boolean
        memberOfSubsequence: true,//boolean
        metaphors: ['loan', 'perfume', ]
    },
    {   //no = 7 index = 6
        num: 7,
        imperativeToProcreate: true, //boolean
        useOfImagery: true, //boolean
        imagery: ['sun'], //array of strings
        subjectGenderExplicit: false, //boolean
        genderOfSubject: null, //male, female, or null
        ravagesOfTime: true,//boolean
        seasons: false,//boolean
        death: false,//boolean
        speakerRefersToSelf: false,//boolean
        speakerRefersToSelfAsPoet: false,//boolean
        poetryToPreserveSubjectsBeauty: false,//boolean
        memberOfSubsequence: false,//boolean
        metaphors: ['sunset']
    },
    {   //no = 8 index = 7
        num: 8,
        imperativeToProcreate: true, //boolean
        useOfImagery: true, //boolean
        imagery: ['musical instrument'], //array of strings
        subjectGenderExplicit: false, //boolean
        genderOfSubject: null, //male, female, or null
        ravagesOfTime: false,//boolean
        seasons: false,//boolean
        death: false,//boolean
        speakerRefersToSelf: false,//boolean
        speakerRefersToSelfAsPoet: false,//boolean
        poetryToPreserveSubjectsBeauty: false,//boolean
        memberOfSubsequence: false,//boolean
        metaphors: ['musical harmony'] //array of strings
    },
    {   //no = 9 index = 8
        num: 9,
        imperativeToProcreate: true, //boolean
        useOfImagery: true, //boolean
        imagery: ['tears', 'eyes'], //array of strings
        subjectGenderExplicit: true, //boolean
        genderOfSubject: 'male', //male, female, or null
        ravagesOfTime: true,//boolean
        seasons: false,//boolean
        death: true,//boolean
        speakerRefersToSelf: false,//boolean
        speakerRefersToSelfAsPoet: false,//boolean
        poetryToPreserveSubjectsBeauty: false,//boolean
        memberOfSubsequence: false,//boolean
        metaphors: ['widowhood', 'miserliness', 'self-destruction'] //array of strings
    },
        {   //no = 10 index = 9
        num: 10,
        imperativeToProcreate: true, //boolean
        useOfImagery: false, //boolean
        imagery: [], //array of strings
        subjectGenderExplicit: false, //boolean
        genderOfSubject: null, //male, female, or null
        ravagesOfTime: false,//boolean
        seasons: false,//boolean
        death: false,//boolean
        speakerRefersToSelf: true,//boolean
        speakerRefersToSelfAsPoet: false,//boolean 
        poetryToPreserveSubjectsBeauty: false,//boolean
        memberOfSubsequence: false,//boolean
        metaphors: ['home repair', 'self-destruction'] //array of strings
    }

]

const stringToBoolean = (input) => {
    if (input = 'true') return true
    else return false
}

const performSearch = (event) => {
    event.preventDefault();
    const procreateOption = document.querySelectorAll('input[name="procreate"]');
    let procreationVar;
    for (const radioButton of procreateOption) {
        if (radioButton.checked) {
            procreationVar = stringToBoolean(radioButton.value);
            break;
        }
    }

    const imageryOption = document.querySelectorAll('input[name="useOfImagery"]');
    let imageryVar;
    for (const radioButton of imageryOption) {
        if (radioButton.checked) {
            imageryVar = stringToBoolean(radioButton.value);
            break;
        }
    }

    let userQuery = {
        imperativeToProcreate: procreationVar,
        useOfImagery: imageryVar
    }
    let searchParams = {};

    for (const property in userQuery) {
        if (userQuery[property] === undefined) {
            continue
        } else {
            searchParams[property] = userQuery[property]
        }
    }

    // console.log(searchParams)
    sonnetSearch(searchParams)
}

const sonnetSearch = (params) => {
    // console.log('hey',params)
    let result = sonnetInfo.filter((item) => {
        // console.log(item)
        let status = true;
        for (const property in params) {
            // console.log(property)
            // console.log('item[property] = ',item[property])
            // console.log('params[property] = ', params[property])
            // console.log(item[property] !== params[property])
            if (item[property] !== params[property]) {
                status = false
            }
    }
    return status
})
    // console.log(result)
    displaySonnets(result)
}

const displaySonnets = (result) => {
    sonnetDisplayArea.innerHTML = ''
    result.forEach((item) => {
        console.log(item)
        let text = sonnets[item.num-1].lines.join('\n')
        let newSonnet = document.createElement('div')
        newSonnet.setAttribute("id", 'sonnetReturns')
        let titleLine = `Sonnet ${item.num}\n`
        text = titleLine.concat(text,'\n\n')
        newSonnet.innerHTML = text
        sonnetDisplayArea.appendChild(newSonnet)

    })
}

// sonnetSearch({imperativeToProcreate: 'true'})

// const printSonnet = () => {
//     return sonnet
// }
document.querySelector('#formData').addEventListener('submit', performSearch)
// content.textContent = printSonnet();

