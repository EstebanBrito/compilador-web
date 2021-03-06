const linesRegex = {
    functions: /[\(\)]{1,1}/,
    operations: /[=]{1,1}/,
    endFunctions: /[}]{1,1}/
}

/*
const linesRegex = {
    functions: /^([a-zA-Z0-9\$\-_]{1,})\s+([a-zA-Z0-9\$\-_]{1,})\s*(\(*)([a-zA-Z0-9\$\-_,\s])*([a-zA-Z0-9\$\-_\)]{0,})\s*([\{a-zA-Z0-9\(\),}\s])*$/g,
    operations: /^([a-zA-Z0-9\$\-_]+)\s+([\+|\-|\/|=|\*|%])*\s*([a-zA-Z0-9\$\-_\s\+\-\/=\*%.]+)$/g,
    endFunctions: /^[\{a-zA-Z0-9\(\),}]$/g
}
*/

const tokensMatch = {
    ID : /^[a-zA-Z$_]{1,1}[a-zA-Z0-9\_]{0,}$/,
    TDF : /^(int|float|boolean|double|char|void)$/,
    TDV:/^(int|float|boolean|double|char)$/,
    CNE : /^[0-9]{1,}$/,
    SPACE : /^ $/,
    ENTER : /^\n$/,
    CNPF : /^[0-9]{1,}\.[0-9]{1,}$/,
    DEL : /[\(|\)|{|}]/,
    AS : /^=$/,
    SEP : /,/,
    OA : /^[+|\-|*|/|%]$/,
    DELO: /^{$/,
    DELE: /^}$/
}

export {
    linesRegex,
    tokensMatch
}