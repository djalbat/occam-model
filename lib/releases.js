"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Releases;
    }
});
const _necessary = require("necessary");
const _release = /*#__PURE__*/ _interop_require_default(require("./release"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const { forEach } = _necessary.asynchronousUtilities;
class Releases {
    constructor(array){
        this.array = array;
    }
    getArray() {
        return this.array;
    }
    getLength() {
        return this.array.length;
    }
    addRelease(release) {
        this.array.push(release);
    }
    mapRelease(callback) {
        return this.array.map(callback);
    }
    reduceRelease(callback, initialValue) {
        return this.array.reduce(callback, initialValue);
    }
    forEachRelease(callback) {
        this.array.forEach(callback);
    }
    asynchronousForEachRelease(callback, done) {
        forEach(this.array, callback, done);
    }
    toJSON() {
        const json = this.array.map((release)=>{
            const releaseJSON = release.toJSON();
            return releaseJSON;
        });
        return json;
    }
    static fromJSON(json) {
        const array = json.map((json)=>{
            const release = _release.default.fromJSON(json);
            return release;
        }), releases = new Releases(array);
        return releases;
    }
    static fromNothing() {
        const array = [], releases = new Releases(array);
        return releases;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZWxlYXNlcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXN5bmNocm9ub3VzVXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgUmVsZWFzZSBmcm9tIFwiLi9yZWxlYXNlXCI7XG5cbmNvbnN0IHsgZm9yRWFjaCB9ID0gYXN5bmNocm9ub3VzVXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWxlYXNlcyB7XG4gIGNvbnN0cnVjdG9yKGFycmF5KSB7XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xuICB9XG5cbiAgZ2V0QXJyYXkoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXJyYXk7XG4gIH1cblxuICBnZXRMZW5ndGgoKSB7IHJldHVybiB0aGlzLmFycmF5Lmxlbmd0aDsgfVxuXG4gIGFkZFJlbGVhc2UocmVsZWFzZSkgeyB0aGlzLmFycmF5LnB1c2gocmVsZWFzZSk7IH1cblxuICBtYXBSZWxlYXNlKGNhbGxiYWNrKSB7IHJldHVybiB0aGlzLmFycmF5Lm1hcChjYWxsYmFjayk7IH1cblxuICByZWR1Y2VSZWxlYXNlKGNhbGxiYWNrLCBpbml0aWFsVmFsdWUpIHsgcmV0dXJuIHRoaXMuYXJyYXkucmVkdWNlKGNhbGxiYWNrLCBpbml0aWFsVmFsdWUpOyB9XG5cbiAgZm9yRWFjaFJlbGVhc2UoY2FsbGJhY2spIHsgdGhpcy5hcnJheS5mb3JFYWNoKGNhbGxiYWNrKTsgfVxuXG4gIGFzeW5jaHJvbm91c0ZvckVhY2hSZWxlYXNlKGNhbGxiYWNrLCBkb25lKSB7IGZvckVhY2godGhpcy5hcnJheSwgY2FsbGJhY2ssIGRvbmUpOyB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IGpzb24gPSB0aGlzLmFycmF5Lm1hcCgocmVsZWFzZSkgPT4ge1xuICAgICAgY29uc3QgcmVsZWFzZUpTT04gPSByZWxlYXNlLnRvSlNPTigpO1xuXG4gICAgICByZXR1cm4gcmVsZWFzZUpTT047XG4gICAgfSk7XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uKSB7XG4gICAgY29uc3QgYXJyYXkgPSBqc29uLm1hcCgoanNvbikgPT4geyAgLy8vXG4gICAgICAgICAgICBjb25zdCByZWxlYXNlID0gUmVsZWFzZS5mcm9tSlNPTihqc29uKTtcblxuICAgICAgICAgICAgcmV0dXJuIHJlbGVhc2U7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgcmVsZWFzZXMgPSBuZXcgUmVsZWFzZXMoYXJyYXkpO1xuXG4gICAgcmV0dXJuIHJlbGVhc2VzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IGFycmF5ID0gW10sXG4gICAgICAgICAgcmVsZWFzZXMgPSBuZXcgUmVsZWFzZXMoYXJyYXkpO1xuXG4gICAgcmV0dXJuIHJlbGVhc2VzO1xuICB9XG59XG5cbiJdLCJuYW1lcyI6WyJSZWxlYXNlcyIsImZvckVhY2giLCJhc3luY2hyb25vdXNVdGlsaXRpZXMiLCJhcnJheSIsImdldEFycmF5IiwiZ2V0TGVuZ3RoIiwibGVuZ3RoIiwiYWRkUmVsZWFzZSIsInJlbGVhc2UiLCJwdXNoIiwibWFwUmVsZWFzZSIsImNhbGxiYWNrIiwibWFwIiwicmVkdWNlUmVsZWFzZSIsImluaXRpYWxWYWx1ZSIsInJlZHVjZSIsImZvckVhY2hSZWxlYXNlIiwiYXN5bmNocm9ub3VzRm9yRWFjaFJlbGVhc2UiLCJkb25lIiwidG9KU09OIiwianNvbiIsInJlbGVhc2VKU09OIiwiZnJvbUpTT04iLCJSZWxlYXNlIiwicmVsZWFzZXMiLCJmcm9tTm90aGluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBUUE7OztlQUFxQkE7OzsyQkFOaUI7Z0VBRWxCOzs7Ozs7QUFFcEIsTUFBTSxFQUFFQyxPQUFPLEVBQUUsR0FBR0MsZ0NBQXFCO0FBRTFCLE1BQU1GO0lBQ25CLFlBQVlHLEtBQUssQ0FBRTtRQUNqQixJQUFJLENBQUNBLEtBQUssR0FBR0E7SUFDZjtJQUVBQyxXQUFXO1FBQ1QsT0FBTyxJQUFJLENBQUNELEtBQUs7SUFDbkI7SUFFQUUsWUFBWTtRQUFFLE9BQU8sSUFBSSxDQUFDRixLQUFLLENBQUNHLE1BQU07SUFBRTtJQUV4Q0MsV0FBV0MsT0FBTyxFQUFFO1FBQUUsSUFBSSxDQUFDTCxLQUFLLENBQUNNLElBQUksQ0FBQ0Q7SUFBVTtJQUVoREUsV0FBV0MsUUFBUSxFQUFFO1FBQUUsT0FBTyxJQUFJLENBQUNSLEtBQUssQ0FBQ1MsR0FBRyxDQUFDRDtJQUFXO0lBRXhERSxjQUFjRixRQUFRLEVBQUVHLFlBQVksRUFBRTtRQUFFLE9BQU8sSUFBSSxDQUFDWCxLQUFLLENBQUNZLE1BQU0sQ0FBQ0osVUFBVUc7SUFBZTtJQUUxRkUsZUFBZUwsUUFBUSxFQUFFO1FBQUUsSUFBSSxDQUFDUixLQUFLLENBQUNGLE9BQU8sQ0FBQ1U7SUFBVztJQUV6RE0sMkJBQTJCTixRQUFRLEVBQUVPLElBQUksRUFBRTtRQUFFakIsUUFBUSxJQUFJLENBQUNFLEtBQUssRUFBRVEsVUFBVU87SUFBTztJQUVsRkMsU0FBUztRQUNQLE1BQU1DLE9BQU8sSUFBSSxDQUFDakIsS0FBSyxDQUFDUyxHQUFHLENBQUMsQ0FBQ0o7WUFDM0IsTUFBTWEsY0FBY2IsUUFBUVcsTUFBTTtZQUVsQyxPQUFPRTtRQUNUO1FBRUEsT0FBT0Q7SUFDVDtJQUVBLE9BQU9FLFNBQVNGLElBQUksRUFBRTtRQUNwQixNQUFNakIsUUFBUWlCLEtBQUtSLEdBQUcsQ0FBQyxDQUFDUTtZQUNoQixNQUFNWixVQUFVZSxnQkFBTyxDQUFDRCxRQUFRLENBQUNGO1lBRWpDLE9BQU9aO1FBQ1QsSUFDQWdCLFdBQVcsSUFBSXhCLFNBQVNHO1FBRTlCLE9BQU9xQjtJQUNUO0lBRUEsT0FBT0MsY0FBYztRQUNuQixNQUFNdEIsUUFBUSxFQUFFLEVBQ1ZxQixXQUFXLElBQUl4QixTQUFTRztRQUU5QixPQUFPcUI7SUFDVDtBQUNGIn0=