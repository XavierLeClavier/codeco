export default function exceptions(sentence) {
    const lexc = "éèàçùêâïëâÉÈÀÇÙÊÂÏËÂ";
    const lnew = "eeacueaieaEEACUEAIEA";
    let result = "";
    for (let i = 0; i < sentence.length; i++) {
        const index = lexc.indexOf(sentence[i]);
        if (index !== -1) {
            result += lnew[index];
        } else {
            result += sentence[i];
        }
    }
    return result;
}