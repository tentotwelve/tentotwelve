const padLines = ({linePadding, fontSize, textAlign}) => {
    let singleSpace = ' ';
    let spaceMultiplier = linePadding;
    if (spaceMultiplier && spaceMultiplier != 0) {
        singleSpace = '';
        /* Adds spaces to start and end of already populated lines for visual padding  */
        for (let i = 0; i < spaceMultiplier; i++) {
            singleSpace += ' ';
        }
    } else if (spaceMultiplier === 0) {
        singleSpace = '';
    }
    /* Because textAlign="right" removes 
    * right-hand side spaces adding a rightBorder is necessary to handle for this */
    rightBorderWidth = 0;
    if (textAlign === 'right') {
        rightBorderWidth = Math.ceil(fontSize * 0.25);
        if (spaceMultiplier && spaceMultiplier !== 0) {
            rightBorderWidth *= spaceMultiplier;
        } else if (spaceMultiplier === 0) {
            rightBorderWidth = 0;
        }
    }
    return singleSpace;
}

const loopLines = (array, props) => {
    const { children, splitOn } = props;
    let lineStart = 0;
    let singleSpace = padLines(props);
    let textString = children;
    const numOfLines = Math.ceil(textString.length / splitOn);
    // Adds space to end of string, preventing cutoff of last word.
    textString = textString.concat(' ');
    let lineEnd = textString.slice(0, splitOn).lastIndexOf(' ');
    /* multiplying x2 to handle for awkward splits before very long words
    that can push content beyond the above calculated numOfLines */
    for (i = 0; i < numOfLines * 2; i++) {
        let line = textString.slice(lineStart, lineEnd);
        /* only pushes to Array if length of line is > 0 */
        if (line.length > 0) {
            line = singleSpace + line + singleSpace;
            array.push(line);
        }
        lineStart = lineEnd + 1;
        let fakeLineEnd = lineStart + splitOn;
        lineEnd = textString.slice(0, fakeLineEnd).lastIndexOf(' ');
    }
}

export default { loopLines };
