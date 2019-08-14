const shell = require("shelljs")
const path = require("path")

const command = process.argv[2]

const getPackageJSON = (directoryPath) => {
  return require(path.resolve(directoryPath, "package.json"))
}

const pathExists = (relativePath) => {
  return shell.test("-e", relativePath)
}

const removeDirectory = (relativePath) => {
  const exists = pathExists(relativePath)
  exists && shell.rm("-rf", relativePath)
  exists && console.log(`[ leonardo ] REMOVED ${relativePath}`)
}

const createDirectory = (relativePath) => {
  const exists = pathExists(relativePath)
  !exists && shell.mkdir(relativePath)
  !exists && console.log(`[ leonardo ] CREATED ${relativePath}`)
}

const copyFile = (filePath, destinationPath) => {
  shell.cp(filePath, destinationPath)
}

const execute = (command) => {
  shell.exec(command)
}

if (command === "build") {
  removeDirectory("./build")
  createDirectory("./build")
  execute("./node_modules/.bin/babel source --out-dir build")
  copyFile("./README.md", "./build")
  copyFile("./package.json", "./build")
}

if (command === "push") {
  const commitMessage = process.argv[3]

  execute("git add .")
  execute(`git commit -m "${commitMessage}"`)
  execute("git push")
}
