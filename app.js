const fs = require('fs')
const path = require('path')

const readLine = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
})

let UserInputComponentType
let UserInputComponentName
let StatusComponentType




readLine.question("Enter Your Component Name : ", Component_name => {

    UserInputComponentName = Component_name

    console.log(UserInputComponentName)

    readLine.question("Please choose Your Component Type (Component): ", async (Component_type) => {

        UserInputComponentType = Component_type

        if(UserInputComponentType === '' || UserInputComponentType === "Component" || UserInputComponentType === "component") {
            StatusComponentType = "Components"
        }
        else if ( UserInputComponentType === "Page" || UserInputComponentType === "page") {
            StatusComponentType = "Pages"
        }




        fs.mkdir(path.join(__dirname, "..", "..", "src", StatusComponentType , `${UserInputComponentName}`), (err) => {
            if (err) {
                console.log(err)
            } else {
                fs.writeFile(path.join(__dirname, "..", "..", "src", StatusComponentType , `${UserInputComponentName}` , `${UserInputComponentName}.js`) , `import React from 'react';\nimport "./${UserInputComponentName}.css";\n\n\t function ${UserInputComponentName}() {\n\t\treturn (\n\t\t\t\t<div>${UserInputComponentName}</div>\n\t\t\t)\n\t\t}\n\nexport default ${UserInputComponentName}`, (err) => {
                    if (err) {
                        console.log(err)
                    } else {
                        fs.writeFile(path.join(__dirname, "..", "..", "src", StatusComponentType , `${UserInputComponentName}` , `${UserInputComponentName}.css`) , "" , (err) => {
                            if(err) {
                                console.log(err)
                            } else {
                                console.log("Success :)")
                            }
                        }
                    )
                }

            }
        )
    }
}
    )

        readLine.close()
            }
        )

    }
)