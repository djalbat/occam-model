"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Dependency;
    }
});
class Dependency {
    constructor(name, shortenedVersion){
        this.name = name;
        this.shortenedVersion = shortenedVersion;
    }
    getName() {
        return this.name;
    }
    getShortedVersion() {
        return this.shortenedVersion;
    }
    asString() {
        let string;
        if (this.shortenedVersion !== null) {
            const shortenedVersionString = this.shortenedVersion.toString();
            string = `${this.name}@${shortenedVersionString}`;
        } else {
            string = this.name; ///
        }
        return string;
    }
    static fromName(name) {
        const shortenedVersion = null, dependency = new Dependency(name, shortenedVersion);
        return dependency;
    }
    static fromNameAndShortenedVersion(name, shortenedVersion) {
        const dependency = new Dependency(name, shortenedVersion);
        return dependency;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kZXBlbmRlbmN5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZXBlbmRlbmN5IHtcbiAgY29uc3RydWN0b3IobmFtZSwgc2hvcnRlbmVkVmVyc2lvbikge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5zaG9ydGVuZWRWZXJzaW9uID0gc2hvcnRlbmVkVmVyc2lvbjtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldFNob3J0ZWRWZXJzaW9uKCkge1xuICAgIHJldHVybiB0aGlzLnNob3J0ZW5lZFZlcnNpb247XG4gIH1cblxuICBhc1N0cmluZygpIHtcbiAgICBsZXQgc3RyaW5nO1xuXG4gICAgaWYgKHRoaXMuc2hvcnRlbmVkVmVyc2lvbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc2hvcnRlbmVkVmVyc2lvblN0cmluZyA9IHRoaXMuc2hvcnRlbmVkVmVyc2lvbi50b1N0cmluZygpO1xuXG4gICAgICBzdHJpbmcgPSBgJHt0aGlzLm5hbWV9QCR7c2hvcnRlbmVkVmVyc2lvblN0cmluZ31gO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHJpbmcgPSB0aGlzLm5hbWU7IC8vL1xuICAgIH1cblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5hbWUobmFtZSkge1xuICAgIGNvbnN0IHNob3J0ZW5lZFZlcnNpb24gPSBudWxsLFxuICAgICAgICAgIGRlcGVuZGVuY3kgPSBuZXcgRGVwZW5kZW5jeShuYW1lLCBzaG9ydGVuZWRWZXJzaW9uKTtcblxuICAgIHJldHVybiBkZXBlbmRlbmN5O1xuICB9XG5cbiAgc3RhdGljIGZyb21OYW1lQW5kU2hvcnRlbmVkVmVyc2lvbihuYW1lLCBzaG9ydGVuZWRWZXJzaW9uKSB7XG4gICAgY29uc3QgZGVwZW5kZW5jeSA9IG5ldyBEZXBlbmRlbmN5KG5hbWUsIHNob3J0ZW5lZFZlcnNpb24pO1xuXG4gICAgcmV0dXJuIGRlcGVuZGVuY3k7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJEZXBlbmRlbmN5IiwibmFtZSIsInNob3J0ZW5lZFZlcnNpb24iLCJnZXROYW1lIiwiZ2V0U2hvcnRlZFZlcnNpb24iLCJhc1N0cmluZyIsInN0cmluZyIsInNob3J0ZW5lZFZlcnNpb25TdHJpbmciLCJ0b1N0cmluZyIsImZyb21OYW1lIiwiZGVwZW5kZW5jeSIsImZyb21OYW1lQW5kU2hvcnRlbmVkVmVyc2lvbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBRUE7OztlQUFxQkE7OztBQUFOLE1BQU1BO0lBQ25CLFlBQVlDLElBQUksRUFBRUMsZ0JBQWdCLENBQUU7UUFDbEMsSUFBSSxDQUFDRCxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxnQkFBZ0IsR0FBR0E7SUFDMUI7SUFFQUMsVUFBVTtRQUNSLE9BQU8sSUFBSSxDQUFDRixJQUFJO0lBQ2xCO0lBRUFHLG9CQUFvQjtRQUNsQixPQUFPLElBQUksQ0FBQ0YsZ0JBQWdCO0lBQzlCO0lBRUFHLFdBQVc7UUFDVCxJQUFJQztRQUVKLElBQUksSUFBSSxDQUFDSixnQkFBZ0IsS0FBSyxNQUFNO1lBQ2xDLE1BQU1LLHlCQUF5QixJQUFJLENBQUNMLGdCQUFnQixDQUFDTSxRQUFRO1lBRTdERixTQUFTLEdBQUcsSUFBSSxDQUFDTCxJQUFJLENBQUMsQ0FBQyxFQUFFTSx3QkFBd0I7UUFDbkQsT0FBTztZQUNMRCxTQUFTLElBQUksQ0FBQ0wsSUFBSSxFQUFFLEdBQUc7UUFDekI7UUFFQSxPQUFPSztJQUNUO0lBRUEsT0FBT0csU0FBU1IsSUFBSSxFQUFFO1FBQ3BCLE1BQU1DLG1CQUFtQixNQUNuQlEsYUFBYSxJQUFJVixXQUFXQyxNQUFNQztRQUV4QyxPQUFPUTtJQUNUO0lBRUEsT0FBT0MsNEJBQTRCVixJQUFJLEVBQUVDLGdCQUFnQixFQUFFO1FBQ3pELE1BQU1RLGFBQWEsSUFBSVYsV0FBV0MsTUFBTUM7UUFFeEMsT0FBT1E7SUFDVDtBQUNGIn0=