"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
const _entries = /*#__PURE__*/ _interop_require_default(require("./entries"));
const _entries1 = /*#__PURE__*/ _interop_require_default(require("./mixins/entries"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class Project {
    constructor(name, entries){
        this.name = name;
        this.entries = entries;
    }
    getName() {
        return this.name;
    }
    getEntries() {
        return this.entries;
    }
    toJSON() {
        const entriesJSON = this.entries.toJSON(), name = this.name, entries = entriesJSON, json = {
            name,
            entries
        };
        return json;
    }
    static fromJSON(json) {
        let { entries } = json;
        const { name } = json, entriesJSON = entries; ///
        json = entriesJSON; ///
        entries = _entries.default.fromJSON(json); ///
        const project = new Project(name, entries);
        return project;
    }
    static fromName(name) {
        const entries = _entries.default.fromNothing(), project = new Project(name, entries);
        return project;
    }
    static fromNameAndEntries(name, entries) {
        const project = new Project(name, entries);
        return project;
    }
}
Object.assign(Project.prototype, _entries1.default);
const _default = Project;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wcm9qZWN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRW50cmllcyBmcm9tIFwiLi9lbnRyaWVzXCI7XG5pbXBvcnQgZW50cmllc01peGlucyBmcm9tIFwiLi9taXhpbnMvZW50cmllc1wiO1xuXG5jbGFzcyBQcm9qZWN0IHtcbiAgY29uc3RydWN0b3IobmFtZSwgZW50cmllcykge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5lbnRyaWVzID0gZW50cmllcztcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldEVudHJpZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZW50cmllcztcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBlbnRyaWVzSlNPTiA9IHRoaXMuZW50cmllcy50b0pTT04oKSxcbiAgICAgICAgICBuYW1lID0gdGhpcy5uYW1lLFxuICAgICAgICAgIGVudHJpZXMgPSBlbnRyaWVzSlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgZW50cmllc1xuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uKSB7XG4gICAgbGV0IHsgZW50cmllcyB9ID0ganNvbjtcblxuICAgIGNvbnN0IHsgbmFtZSB9ID0ganNvbixcbiAgICAgICAgICBlbnRyaWVzSlNPTiA9IGVudHJpZXM7ICAvLy9cblxuICAgIGpzb24gPSBlbnRyaWVzSlNPTjsgLy8vXG5cbiAgICBlbnRyaWVzID0gRW50cmllcy5mcm9tSlNPTihqc29uKTsgLy8vXG5cbiAgICBjb25zdCBwcm9qZWN0ID0gbmV3IFByb2plY3QobmFtZSwgZW50cmllcyk7XG5cbiAgICByZXR1cm4gcHJvamVjdDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTmFtZShuYW1lKSB7XG4gICAgY29uc3QgZW50cmllcyA9IEVudHJpZXMuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBwcm9qZWN0ID0gbmV3IFByb2plY3QobmFtZSwgZW50cmllcyk7XG5cbiAgICByZXR1cm4gcHJvamVjdDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTmFtZUFuZEVudHJpZXMobmFtZSwgZW50cmllcykge1xuICAgIGNvbnN0IHByb2plY3QgPSBuZXcgUHJvamVjdChuYW1lLCBlbnRyaWVzKTtcblxuICAgIHJldHVybiBwcm9qZWN0O1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oUHJvamVjdC5wcm90b3R5cGUsIGVudHJpZXNNaXhpbnMpO1xuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0O1xuIl0sIm5hbWVzIjpbIlByb2plY3QiLCJuYW1lIiwiZW50cmllcyIsImdldE5hbWUiLCJnZXRFbnRyaWVzIiwidG9KU09OIiwiZW50cmllc0pTT04iLCJqc29uIiwiZnJvbUpTT04iLCJFbnRyaWVzIiwicHJvamVjdCIsImZyb21OYW1lIiwiZnJvbU5vdGhpbmciLCJmcm9tTmFtZUFuZEVudHJpZXMiLCJPYmplY3QiLCJhc3NpZ24iLCJwcm90b3R5cGUiLCJlbnRyaWVzTWl4aW5zIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkE4REE7OztlQUFBOzs7Z0VBNURvQjtpRUFDTTs7Ozs7O0FBRTFCLE1BQU1BO0lBQ0osWUFBWUMsSUFBSSxFQUFFQyxPQUFPLENBQUU7UUFDekIsSUFBSSxDQUFDRCxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxPQUFPLEdBQUdBO0lBQ2pCO0lBRUFDLFVBQVU7UUFDUixPQUFPLElBQUksQ0FBQ0YsSUFBSTtJQUNsQjtJQUVBRyxhQUFhO1FBQ1gsT0FBTyxJQUFJLENBQUNGLE9BQU87SUFDckI7SUFFQUcsU0FBUztRQUNQLE1BQU1DLGNBQWMsSUFBSSxDQUFDSixPQUFPLENBQUNHLE1BQU0sSUFDakNKLE9BQU8sSUFBSSxDQUFDQSxJQUFJLEVBQ2hCQyxVQUFVSSxhQUNWQyxPQUFPO1lBQ0xOO1lBQ0FDO1FBQ0Y7UUFFTixPQUFPSztJQUNUO0lBRUEsT0FBT0MsU0FBU0QsSUFBSSxFQUFFO1FBQ3BCLElBQUksRUFBRUwsT0FBTyxFQUFFLEdBQUdLO1FBRWxCLE1BQU0sRUFBRU4sSUFBSSxFQUFFLEdBQUdNLE1BQ1hELGNBQWNKLFNBQVUsR0FBRztRQUVqQ0ssT0FBT0QsYUFBYSxHQUFHO1FBRXZCSixVQUFVTyxnQkFBTyxDQUFDRCxRQUFRLENBQUNELE9BQU8sR0FBRztRQUVyQyxNQUFNRyxVQUFVLElBQUlWLFFBQVFDLE1BQU1DO1FBRWxDLE9BQU9RO0lBQ1Q7SUFFQSxPQUFPQyxTQUFTVixJQUFJLEVBQUU7UUFDcEIsTUFBTUMsVUFBVU8sZ0JBQU8sQ0FBQ0csV0FBVyxJQUM3QkYsVUFBVSxJQUFJVixRQUFRQyxNQUFNQztRQUVsQyxPQUFPUTtJQUNUO0lBRUEsT0FBT0csbUJBQW1CWixJQUFJLEVBQUVDLE9BQU8sRUFBRTtRQUN2QyxNQUFNUSxVQUFVLElBQUlWLFFBQVFDLE1BQU1DO1FBRWxDLE9BQU9RO0lBQ1Q7QUFDRjtBQUVBSSxPQUFPQyxNQUFNLENBQUNmLFFBQVFnQixTQUFTLEVBQUVDLGlCQUFhO01BRTlDLFdBQWVqQiJ9