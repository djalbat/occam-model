"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Directory;
    }
});
const _types = require("./types");
class Directory {
    constructor(path){
        this.path = path;
    }
    getPath() {
        return this.path;
    }
    isFile() {
        const file = false;
        return file;
    }
    isDirectory() {
        const directory = true;
        return directory;
    }
    toJSON() {
        const { type } = Directory, path = this.path, json = {
            type,
            path
        };
        return json;
    }
    static type = _types.DIRECTORY_TYPE;
    static fromPath(path) {
        const directory = new Directory(path);
        return directory;
    }
    static fromJSON(json) {
        let directory = null;
        if (json !== null) {
            const { type } = json;
            if (type === _types.DIRECTORY_TYPE) {
                const { path } = json;
                directory = new Directory(path);
            }
        }
        return directory;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kaXJlY3RvcnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IERJUkVDVE9SWV9UWVBFIH0gZnJvbSBcIi4vdHlwZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlyZWN0b3J5IHtcbiAgY29uc3RydWN0b3IocGF0aCkge1xuICAgIHRoaXMucGF0aCA9IHBhdGg7XG4gIH1cblxuICBnZXRQYXRoKCkge1xuICAgIHJldHVybiB0aGlzLnBhdGg7XG4gIH1cblxuICBpc0ZpbGUoKSB7XG4gICAgY29uc3QgZmlsZSA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIGZpbGU7XG4gIH1cblxuICBpc0RpcmVjdG9yeSgpIHtcbiAgICBjb25zdCBkaXJlY3RvcnkgPSB0cnVlO1xuXG4gICAgcmV0dXJuIGRpcmVjdG9yeTtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCB7IHR5cGUgfSA9IERpcmVjdG9yeSxcbiAgICAgICAgICBwYXRoID0gdGhpcy5wYXRoLFxuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICB0eXBlLFxuICAgICAgICAgICAgcGF0aFxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyB0eXBlID0gRElSRUNUT1JZX1RZUEU7XG5cbiAgc3RhdGljIGZyb21QYXRoKHBhdGgpIHtcbiAgICBjb25zdCBkaXJlY3RvcnkgPSBuZXcgRGlyZWN0b3J5KHBhdGgpO1xuXG4gICAgcmV0dXJuIGRpcmVjdG9yeTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uKSB7XG4gICAgbGV0IGRpcmVjdG9yeSA9IG51bGw7XG5cbiAgICBpZiAoanNvbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgeyB0eXBlIH0gPSBqc29uO1xuXG4gICAgICBpZiAodHlwZSA9PT0gRElSRUNUT1JZX1RZUEUpIHtcbiAgICAgICAgY29uc3QgeyBwYXRoIH0gPSBqc29uO1xuXG4gICAgICAgIGRpcmVjdG9yeSA9IG5ldyBEaXJlY3RvcnkocGF0aCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGRpcmVjdG9yeTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkRpcmVjdG9yeSIsInBhdGgiLCJnZXRQYXRoIiwiaXNGaWxlIiwiZmlsZSIsImlzRGlyZWN0b3J5IiwiZGlyZWN0b3J5IiwidG9KU09OIiwidHlwZSIsImpzb24iLCJESVJFQ1RPUllfVFlQRSIsImZyb21QYXRoIiwiZnJvbUpTT04iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQUlBOzs7ZUFBcUJBOzs7dUJBRlU7QUFFaEIsTUFBTUE7SUFDbkIsWUFBWUMsSUFBSSxDQUFFO1FBQ2hCLElBQUksQ0FBQ0EsSUFBSSxHQUFHQTtJQUNkO0lBRUFDLFVBQVU7UUFDUixPQUFPLElBQUksQ0FBQ0QsSUFBSTtJQUNsQjtJQUVBRSxTQUFTO1FBQ1AsTUFBTUMsT0FBTztRQUViLE9BQU9BO0lBQ1Q7SUFFQUMsY0FBYztRQUNaLE1BQU1DLFlBQVk7UUFFbEIsT0FBT0E7SUFDVDtJQUVBQyxTQUFTO1FBQ1AsTUFBTSxFQUFFQyxJQUFJLEVBQUUsR0FBR1IsV0FDWEMsT0FBTyxJQUFJLENBQUNBLElBQUksRUFDaEJRLE9BQU87WUFDTEQ7WUFDQVA7UUFDRjtRQUVOLE9BQU9RO0lBQ1Q7SUFFQSxPQUFPRCxPQUFPRSxxQkFBYyxDQUFDO0lBRTdCLE9BQU9DLFNBQVNWLElBQUksRUFBRTtRQUNwQixNQUFNSyxZQUFZLElBQUlOLFVBQVVDO1FBRWhDLE9BQU9LO0lBQ1Q7SUFFQSxPQUFPTSxTQUFTSCxJQUFJLEVBQUU7UUFDcEIsSUFBSUgsWUFBWTtRQUVoQixJQUFJRyxTQUFTLE1BQU07WUFDakIsTUFBTSxFQUFFRCxJQUFJLEVBQUUsR0FBR0M7WUFFakIsSUFBSUQsU0FBU0UscUJBQWMsRUFBRTtnQkFDM0IsTUFBTSxFQUFFVCxJQUFJLEVBQUUsR0FBR1E7Z0JBRWpCSCxZQUFZLElBQUlOLFVBQVVDO1lBQzVCO1FBQ0Y7UUFFQSxPQUFPSztJQUNUO0FBQ0YifQ==