const fs = require('fs');
const path = require('path');

class Parser {
    constructor(filePath) {
        this.filePath = path.resolve(filePath);
        this.fileContent = null;
    }

    async loadFile() {
        try {
            this.fileContent = await fs.promises.readFile(this.filePath, 'utf-8');
            return this.fileContent;
        } catch (error) {
            throw new Error(`Failed to load file: ${error.message}`);
        }
    }

    parseJSON() {
        if (!this.fileContent) {
            throw new Error('No file content loaded. Call loadFile() first.');
        }

        try {
            return JSON.parse(this.fileContent);
        } catch (error) {
            throw new Error('Invalid JSON format.');
        }
    }

    parseCSV(delimiter = ',') {
        if (!this.fileContent) {
            throw new Error('No file content loaded. Call loadFile() first.');
        }

        const lines = this.fileContent.split('\n');
        const headers = lines[0].split(delimiter);
        const data = lines.slice(1).map(line => {
            const values = line.split(delimiter);
            return headers.reduce((obj, header, index) => {
                obj[header] = values[index];
                return obj;
            }, {});
        });

        return data;
    }
}

module.exports = Parser;