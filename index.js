const content = document.getElementById('contentgoeshere');
const submitBtn = document.getElementById('submitBtn');

/* template:
    {   //no =  index = 
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

const sonnetinfo = [
    {   //no =  1 index = 0
        imperativeToProcreate: true, //boolean
        imageryDependent: true, //boolean
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
        imperativeToProcreate: true, //boolean
        imageryDependent: true, //boolean
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
        imperativeToProcreate: true, //boolean
        imageryDependent: true, //boolean
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
        imperativeToProcreate: true, //boolean
        imageryDependent: false, //boolean
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
        imperativeToProcreate: true, //boolean
        imageryDependent: true, //boolean
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
        imperativeToProcreate: true, //boolean
        imageryDependent: true, //boolean
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
        imperativeToProcreate: true, //boolean
        imageryDependent: true, //boolean
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
        imperativeToProcreate: true, //boolean
        imageryDependent: true, //boolean
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
        imperativeToProcreate: true, //boolean
        imageryDependent: true, //boolean
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
        imperativeToProcreate: true, //boolean
        imageryDependent: false, //boolean
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



const performSearch = (event) => {
    event.preventDefault();
    const procreateOption = document.querySelectorAll('input[name="procreate"]');
    let procreationVar;
    for (const radioButton of procreateOption) {
        if (radioButton.checked) {
            procreationVar = radioButton.value;
            break;
        }
    }

    const imageryOption = document.querySelectorAll('input[name="useOfImagery"]');
    let imageryVar;
    for (const radioButton of imageryOption) {
        if (radioButton.checked) {
            imageryVar = radioButton.value;
            break;
        }
    }

    let searchParams = {
        urgeToProcreate: procreationVar,
        useOfImagery: imageryVar
    }

    console.log(searchParams)
}

const sonnetSearch = (params) => {

}

// const printSonnet = () => {
//     return sonnet
// }
document.querySelector('#formData').addEventListener('submit', performSearch)
// content.textContent = printSonnet();

