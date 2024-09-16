import fs from "fs"
import path from "path"

const usersFilePath = path.join(__dirname, '../data/users.json');

const readUsersFile = () => {
    const data = fs.readFileSync(usersFilePath, 'utf8');
    return JSON.parse(data);
}

const writeUsersFile = (data) => {
    fs.writeFileSync(usersFilePath, JSON.stringify(data), 'utf8')
}

export {readUsersFile, writeUsersFile};