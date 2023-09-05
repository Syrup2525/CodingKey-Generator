const convertToJSON = () => {
    const swiftStruct = document.getElementById('swiftStruct').value.trim()

    const keys = []

    let body = swiftStruct
    body = body.substring(body.indexOf("{") + 1, body.length)
    body = body.substring(0, body.length - 1)

    for (const line of body.split("\n")) {
        const trimmedLine = line.trim()

        if (trimmedLine.startsWith('var') || trimmedLine.startsWith('let')) {
            const parts = trimmedLine.split(':')

            const variableName = parts[0].replace(/(var|let)/, '').trim();
            keys.push(variableName)
        }
    }

    let codingKey

    codingKey = "    enum CodingKeys: String, CodingKey {\n"

    for (const key of keys) {
        codingKey += `        case ${key}\n`
    }

    codingKey += "    }\n"

    let result = swiftStruct.substring(0, swiftStruct.length - 1)
    result += "\n"
    result += codingKey
    result += "}"

    document.getElementById('resultStruct').value = result
}