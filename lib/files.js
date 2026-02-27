"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Files;
    }
});
const _file = /*#__PURE__*/ _interop_require_default(require("./file"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class Files {
    constructor(array){
        this.array = array;
    }
    getArray() {
        return this.array;
    }
    getFilePaths() {
        const filePaths = this.mapFile((file)=>{
            const filePath = file.getPath();
            return filePath;
        });
        return filePaths;
    }
    addFile(file) {
        this.array.push(file);
    }
    mapFile(callback) {
        return this.array.map(callback);
    }
    someFile(callback) {
        return this.array.some(callback);
    }
    reduceFile(callback, initialValue) {
        return this.array.reduce(callback, initialValue);
    }
    forEachFile(callback) {
        this.array.forEach(callback);
    }
    findFile(callback) {
        return this.array.find(callback) || null;
    }
    toJSON() {
        const filesJSON = this.array.map((file)=>{
            const fileJSON = file !== null ? file.toJSON() : null;
            return fileJSON;
        }), json = filesJSON; ///
        return json;
    }
    static fromJSON(json) {
        const filesJSON = json, array = [], files = new Files(array);
        filesJSON.forEach((fileJSON)=>{
            const json = fileJSON, file = _file.default.fromJSON(json);
            files.addFile(file);
        });
        return files;
    }
    static fromNothing() {
        const array = [], files = new Files(array);
        return files;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9maWxlcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEZpbGUgZnJvbSBcIi4vZmlsZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaWxlcyB7XG4gIGNvbnN0cnVjdG9yKGFycmF5KSB7XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xuICB9XG5cbiAgZ2V0QXJyYXkoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXJyYXk7XG4gIH1cblxuICBnZXRGaWxlUGF0aHMoKSB7XG4gICAgY29uc3QgZmlsZVBhdGhzID0gdGhpcy5tYXBGaWxlKChmaWxlKSA9PiB7XG4gICAgICBjb25zdCBmaWxlUGF0aCA9IGZpbGUuZ2V0UGF0aCgpO1xuXG4gICAgICByZXR1cm4gZmlsZVBhdGg7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZmlsZVBhdGhzO1xuICB9XG5cbiAgYWRkRmlsZShmaWxlKSB7IHRoaXMuYXJyYXkucHVzaChmaWxlKTsgfVxuXG4gIG1hcEZpbGUoY2FsbGJhY2spIHsgcmV0dXJuIHRoaXMuYXJyYXkubWFwKGNhbGxiYWNrKTsgfVxuXG4gIHNvbWVGaWxlKGNhbGxiYWNrKSB7IHJldHVybiB0aGlzLmFycmF5LnNvbWUoY2FsbGJhY2spOyB9XG5cbiAgcmVkdWNlRmlsZShjYWxsYmFjaywgaW5pdGlhbFZhbHVlKSB7IHJldHVybiB0aGlzLmFycmF5LnJlZHVjZShjYWxsYmFjaywgaW5pdGlhbFZhbHVlKTsgfVxuXG4gIGZvckVhY2hGaWxlKGNhbGxiYWNrKSB7IHRoaXMuYXJyYXkuZm9yRWFjaChjYWxsYmFjayk7IH1cblxuICBmaW5kRmlsZShjYWxsYmFjaykgeyByZXR1cm4gdGhpcy5hcnJheS5maW5kKGNhbGxiYWNrKSB8fCBudWxsOyB9ICAvLy9cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgZmlsZXNKU09OID0gdGhpcy5hcnJheS5tYXAoKGZpbGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGZpbGVKU09OID0gKGZpbGUgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsZS50b0pTT04oKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbDtcbiAgXG4gICAgICAgICAgICByZXR1cm4gZmlsZUpTT047XG4gICAgICAgICAgfSksXG4gICAgICAgICAganNvbiA9IGZpbGVzSlNPTjsgLy8vXG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uKSB7XG4gICAgY29uc3QgZmlsZXNKU09OID0ganNvbiwgLy8vXG4gICAgICAgICAgYXJyYXkgPSBbXSxcbiAgICAgICAgICBmaWxlcyA9IG5ldyBGaWxlcyhhcnJheSk7XG4gICAgXG4gICAgZmlsZXNKU09OLmZvckVhY2goKGZpbGVKU09OKSA9PiB7XG4gICAgICBjb25zdCBqc29uID0gZmlsZUpTT04sICAvLy9cbiAgICAgICAgICAgIGZpbGUgPSBGaWxlLmZyb21KU09OKGpzb24pO1xuXG4gICAgICBmaWxlcy5hZGRGaWxlKGZpbGUpO1xuICAgIH0pO1xuICAgIFxuICAgIHJldHVybiBmaWxlcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBhcnJheSA9IFtdLFxuICAgICAgICAgIGZpbGVzID0gbmV3IEZpbGVzKGFycmF5KTtcblxuICAgIHJldHVybiBmaWxlcztcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkZpbGVzIiwiYXJyYXkiLCJnZXRBcnJheSIsImdldEZpbGVQYXRocyIsImZpbGVQYXRocyIsIm1hcEZpbGUiLCJmaWxlIiwiZmlsZVBhdGgiLCJnZXRQYXRoIiwiYWRkRmlsZSIsInB1c2giLCJjYWxsYmFjayIsIm1hcCIsInNvbWVGaWxlIiwic29tZSIsInJlZHVjZUZpbGUiLCJpbml0aWFsVmFsdWUiLCJyZWR1Y2UiLCJmb3JFYWNoRmlsZSIsImZvckVhY2giLCJmaW5kRmlsZSIsImZpbmQiLCJ0b0pTT04iLCJmaWxlc0pTT04iLCJmaWxlSlNPTiIsImpzb24iLCJmcm9tSlNPTiIsImZpbGVzIiwiRmlsZSIsImZyb21Ob3RoaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFJQTs7O2VBQXFCQTs7OzZEQUZKOzs7Ozs7QUFFRixNQUFNQTtJQUNuQixZQUFZQyxLQUFLLENBQUU7UUFDakIsSUFBSSxDQUFDQSxLQUFLLEdBQUdBO0lBQ2Y7SUFFQUMsV0FBVztRQUNULE9BQU8sSUFBSSxDQUFDRCxLQUFLO0lBQ25CO0lBRUFFLGVBQWU7UUFDYixNQUFNQyxZQUFZLElBQUksQ0FBQ0MsT0FBTyxDQUFDLENBQUNDO1lBQzlCLE1BQU1DLFdBQVdELEtBQUtFLE9BQU87WUFFN0IsT0FBT0Q7UUFDVDtRQUVBLE9BQU9IO0lBQ1Q7SUFFQUssUUFBUUgsSUFBSSxFQUFFO1FBQUUsSUFBSSxDQUFDTCxLQUFLLENBQUNTLElBQUksQ0FBQ0o7SUFBTztJQUV2Q0QsUUFBUU0sUUFBUSxFQUFFO1FBQUUsT0FBTyxJQUFJLENBQUNWLEtBQUssQ0FBQ1csR0FBRyxDQUFDRDtJQUFXO0lBRXJERSxTQUFTRixRQUFRLEVBQUU7UUFBRSxPQUFPLElBQUksQ0FBQ1YsS0FBSyxDQUFDYSxJQUFJLENBQUNIO0lBQVc7SUFFdkRJLFdBQVdKLFFBQVEsRUFBRUssWUFBWSxFQUFFO1FBQUUsT0FBTyxJQUFJLENBQUNmLEtBQUssQ0FBQ2dCLE1BQU0sQ0FBQ04sVUFBVUs7SUFBZTtJQUV2RkUsWUFBWVAsUUFBUSxFQUFFO1FBQUUsSUFBSSxDQUFDVixLQUFLLENBQUNrQixPQUFPLENBQUNSO0lBQVc7SUFFdERTLFNBQVNULFFBQVEsRUFBRTtRQUFFLE9BQU8sSUFBSSxDQUFDVixLQUFLLENBQUNvQixJQUFJLENBQUNWLGFBQWE7SUFBTTtJQUUvRFcsU0FBUztRQUNQLE1BQU1DLFlBQVksSUFBSSxDQUFDdEIsS0FBSyxDQUFDVyxHQUFHLENBQUMsQ0FBQ047WUFDMUIsTUFBTWtCLFdBQVcsQUFBQ2xCLFNBQVMsT0FDUEEsS0FBS2dCLE1BQU0sS0FDVDtZQUV0QixPQUFPRTtRQUNULElBQ0FDLE9BQU9GLFdBQVcsR0FBRztRQUUzQixPQUFPRTtJQUNUO0lBRUEsT0FBT0MsU0FBU0QsSUFBSSxFQUFFO1FBQ3BCLE1BQU1GLFlBQVlFLE1BQ1p4QixRQUFRLEVBQUUsRUFDVjBCLFFBQVEsSUFBSTNCLE1BQU1DO1FBRXhCc0IsVUFBVUosT0FBTyxDQUFDLENBQUNLO1lBQ2pCLE1BQU1DLE9BQU9ELFVBQ1BsQixPQUFPc0IsYUFBSSxDQUFDRixRQUFRLENBQUNEO1lBRTNCRSxNQUFNbEIsT0FBTyxDQUFDSDtRQUNoQjtRQUVBLE9BQU9xQjtJQUNUO0lBRUEsT0FBT0UsY0FBYztRQUNuQixNQUFNNUIsUUFBUSxFQUFFLEVBQ1YwQixRQUFRLElBQUkzQixNQUFNQztRQUV4QixPQUFPMEI7SUFDVDtBQUNGIn0=