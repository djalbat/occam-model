"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Projects;
    }
});
const _necessary = require("necessary");
const _project = /*#__PURE__*/ _interop_require_default(require("./project"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const { forEach } = _necessary.asynchronousUtilities;
class Projects {
    constructor(array){
        this.array = array;
    }
    getArray() {
        return this.array;
    }
    getLength() {
        return this.array.length;
    }
    addProject(project) {
        this.array.push(project);
    }
    mapProject(callback) {
        return this.array.map(callback);
    }
    reduceProject(callback, initialValue) {
        return this.array.reduce(callback, initialValue);
    }
    forEachProject(callback) {
        this.array.forEach(callback);
    }
    asynchronousForEachProject(callback, done) {
        forEach(this.array, callback, done);
    }
    toJSON() {
        const json = this.array.map((project)=>{
            const projectJSON = project.toJSON();
            return projectJSON;
        });
        return json;
    }
    static fromJSON(json) {
        const array = json.map((json)=>{
            const project = _project.default.fromJSON(json);
            return project;
        }), projects = new Projects(array);
        return projects;
    }
    static fromNothing() {
        const array = [], projects = new Projects(array);
        return projects;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wcm9qZWN0cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXN5bmNocm9ub3VzVXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9wcm9qZWN0XCI7XG5cbmNvbnN0IHsgZm9yRWFjaCB9ID0gYXN5bmNocm9ub3VzVXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0cyB7XG4gIGNvbnN0cnVjdG9yKGFycmF5KSB7XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xuICB9XG5cbiAgZ2V0QXJyYXkoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXJyYXk7XG4gIH1cblxuICBnZXRMZW5ndGgoKSB7IHJldHVybiB0aGlzLmFycmF5Lmxlbmd0aDsgfVxuXG4gIGFkZFByb2plY3QocHJvamVjdCkgeyB0aGlzLmFycmF5LnB1c2gocHJvamVjdCk7IH1cblxuICBtYXBQcm9qZWN0KGNhbGxiYWNrKSB7IHJldHVybiB0aGlzLmFycmF5Lm1hcChjYWxsYmFjayk7IH1cblxuICByZWR1Y2VQcm9qZWN0KGNhbGxiYWNrLCBpbml0aWFsVmFsdWUpIHsgcmV0dXJuIHRoaXMuYXJyYXkucmVkdWNlKGNhbGxiYWNrLCBpbml0aWFsVmFsdWUpOyB9XG5cbiAgZm9yRWFjaFByb2plY3QoY2FsbGJhY2spIHsgdGhpcy5hcnJheS5mb3JFYWNoKGNhbGxiYWNrKTsgfVxuXG4gIGFzeW5jaHJvbm91c0ZvckVhY2hQcm9qZWN0KGNhbGxiYWNrLCBkb25lKSB7IGZvckVhY2godGhpcy5hcnJheSwgY2FsbGJhY2ssIGRvbmUpOyB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IGpzb24gPSB0aGlzLmFycmF5Lm1hcCgocHJvamVjdCkgPT4ge1xuICAgICAgY29uc3QgcHJvamVjdEpTT04gPSBwcm9qZWN0LnRvSlNPTigpO1xuXG4gICAgICByZXR1cm4gcHJvamVjdEpTT047XG4gICAgfSk7XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uKSB7XG4gICAgY29uc3QgYXJyYXkgPSBqc29uLm1hcCgoanNvbikgPT4geyAgLy8vXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0ID0gUHJvamVjdC5mcm9tSlNPTihqc29uKTtcblxuICAgICAgICAgICAgcmV0dXJuIHByb2plY3Q7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgcHJvamVjdHMgPSBuZXcgUHJvamVjdHMoYXJyYXkpO1xuXG4gICAgcmV0dXJuIHByb2plY3RzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IGFycmF5ID0gW10sXG4gICAgICAgICAgcHJvamVjdHMgPSBuZXcgUHJvamVjdHMoYXJyYXkpO1xuXG4gICAgcmV0dXJuIHByb2plY3RzO1xuICB9XG59XG5cbiJdLCJuYW1lcyI6WyJQcm9qZWN0cyIsImZvckVhY2giLCJhc3luY2hyb25vdXNVdGlsaXRpZXMiLCJhcnJheSIsImdldEFycmF5IiwiZ2V0TGVuZ3RoIiwibGVuZ3RoIiwiYWRkUHJvamVjdCIsInByb2plY3QiLCJwdXNoIiwibWFwUHJvamVjdCIsImNhbGxiYWNrIiwibWFwIiwicmVkdWNlUHJvamVjdCIsImluaXRpYWxWYWx1ZSIsInJlZHVjZSIsImZvckVhY2hQcm9qZWN0IiwiYXN5bmNocm9ub3VzRm9yRWFjaFByb2plY3QiLCJkb25lIiwidG9KU09OIiwianNvbiIsInByb2plY3RKU09OIiwiZnJvbUpTT04iLCJQcm9qZWN0IiwicHJvamVjdHMiLCJmcm9tTm90aGluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBUUE7OztlQUFxQkE7OzsyQkFOaUI7Z0VBRWxCOzs7Ozs7QUFFcEIsTUFBTSxFQUFFQyxPQUFPLEVBQUUsR0FBR0MsZ0NBQXFCO0FBRTFCLE1BQU1GO0lBQ25CLFlBQVlHLEtBQUssQ0FBRTtRQUNqQixJQUFJLENBQUNBLEtBQUssR0FBR0E7SUFDZjtJQUVBQyxXQUFXO1FBQ1QsT0FBTyxJQUFJLENBQUNELEtBQUs7SUFDbkI7SUFFQUUsWUFBWTtRQUFFLE9BQU8sSUFBSSxDQUFDRixLQUFLLENBQUNHLE1BQU07SUFBRTtJQUV4Q0MsV0FBV0MsT0FBTyxFQUFFO1FBQUUsSUFBSSxDQUFDTCxLQUFLLENBQUNNLElBQUksQ0FBQ0Q7SUFBVTtJQUVoREUsV0FBV0MsUUFBUSxFQUFFO1FBQUUsT0FBTyxJQUFJLENBQUNSLEtBQUssQ0FBQ1MsR0FBRyxDQUFDRDtJQUFXO0lBRXhERSxjQUFjRixRQUFRLEVBQUVHLFlBQVksRUFBRTtRQUFFLE9BQU8sSUFBSSxDQUFDWCxLQUFLLENBQUNZLE1BQU0sQ0FBQ0osVUFBVUc7SUFBZTtJQUUxRkUsZUFBZUwsUUFBUSxFQUFFO1FBQUUsSUFBSSxDQUFDUixLQUFLLENBQUNGLE9BQU8sQ0FBQ1U7SUFBVztJQUV6RE0sMkJBQTJCTixRQUFRLEVBQUVPLElBQUksRUFBRTtRQUFFakIsUUFBUSxJQUFJLENBQUNFLEtBQUssRUFBRVEsVUFBVU87SUFBTztJQUVsRkMsU0FBUztRQUNQLE1BQU1DLE9BQU8sSUFBSSxDQUFDakIsS0FBSyxDQUFDUyxHQUFHLENBQUMsQ0FBQ0o7WUFDM0IsTUFBTWEsY0FBY2IsUUFBUVcsTUFBTTtZQUVsQyxPQUFPRTtRQUNUO1FBRUEsT0FBT0Q7SUFDVDtJQUVBLE9BQU9FLFNBQVNGLElBQUksRUFBRTtRQUNwQixNQUFNakIsUUFBUWlCLEtBQUtSLEdBQUcsQ0FBQyxDQUFDUTtZQUNoQixNQUFNWixVQUFVZSxnQkFBTyxDQUFDRCxRQUFRLENBQUNGO1lBRWpDLE9BQU9aO1FBQ1QsSUFDQWdCLFdBQVcsSUFBSXhCLFNBQVNHO1FBRTlCLE9BQU9xQjtJQUNUO0lBRUEsT0FBT0MsY0FBYztRQUNuQixNQUFNdEIsUUFBUSxFQUFFLEVBQ1ZxQixXQUFXLElBQUl4QixTQUFTRztRQUU5QixPQUFPcUI7SUFDVDtBQUNGIn0=