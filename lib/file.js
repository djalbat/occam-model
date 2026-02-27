"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return File;
    }
});
const _types = require("./types");
const _content = require("./utilities/content");
class File {
    constructor(path, content, released){
        this.path = path;
        this.content = content;
        this.released = released;
    }
    getPath() {
        return this.path;
    }
    getContent() {
        return this.content;
    }
    isReleased() {
        return this.released;
    }
    isFile() {
        const file = true;
        return file;
    }
    isDirectory() {
        const directory = false;
        return directory;
    }
    setPath(path) {
        this.path = path;
    }
    setContent(content) {
        this.content = content;
    }
    setReleased(released) {
        this.released = released;
    }
    matchFilePath(filePath) {
        const filePathMatches = this.path === filePath;
        return filePathMatches;
    }
    toJSON() {
        const { type } = File, path = this.path, content = this.content, released = this.released, json = {
            type,
            path,
            content,
            released
        };
        return json;
    }
    static type = _types.FILE_TYPE;
    static fromJSON(json) {
        let file = null;
        if (json !== null) {
            const { type } = json;
            if (type === _types.FILE_TYPE) {
                let { content } = json;
                const { path, released } = json;
                content = (0, _content.convertContentTabsToWhitespace)(content); ///
                file = new File(path, content, released);
            }
        }
        return file;
    }
    static fromDocument(document) {
        const filePath = document.getFilePath(), released = document.isReleased(), path = filePath; ///
        let content = document.getContent();
        content = (0, _content.convertContentTabsToWhitespace)(content); ///
        const file = new File(path, content, released);
        return file;
    }
    static fromPathContentAndReleased(path, content, released) {
        content = (0, _content.convertContentTabsToWhitespace)(content); ///
        const file = new File(path, content, released);
        return file;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9maWxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBGSUxFX1RZUEUgfSBmcm9tIFwiLi90eXBlc1wiO1xuaW1wb3J0IHsgY29udmVydENvbnRlbnRUYWJzVG9XaGl0ZXNwYWNlIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2NvbnRlbnRcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaWxlIHtcbiAgY29uc3RydWN0b3IocGF0aCwgY29udGVudCwgcmVsZWFzZWQpIHtcbiAgICB0aGlzLnBhdGggPSBwYXRoO1xuICAgIHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XG4gICAgdGhpcy5yZWxlYXNlZCA9IHJlbGVhc2VkO1xuICB9XG5cbiAgZ2V0UGF0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5wYXRoO1xuICB9XG5cbiAgZ2V0Q29udGVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZW50O1xuICB9XG5cbiAgaXNSZWxlYXNlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5yZWxlYXNlZDtcbiAgfVxuXG4gIGlzRmlsZSgpIHtcbiAgICBjb25zdCBmaWxlID0gdHJ1ZTtcblxuICAgIHJldHVybiBmaWxlO1xuICB9XG5cbiAgaXNEaXJlY3RvcnkoKSB7XG4gICAgY29uc3QgZGlyZWN0b3J5ID0gZmFsc2U7XG5cbiAgICByZXR1cm4gZGlyZWN0b3J5O1xuICB9XG5cbiAgc2V0UGF0aChwYXRoKSB7XG4gICAgdGhpcy5wYXRoID0gcGF0aDtcbiAgfVxuXG4gIHNldENvbnRlbnQoY29udGVudCkge1xuICAgIHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XG4gIH1cblxuICBzZXRSZWxlYXNlZChyZWxlYXNlZCkge1xuICAgIHRoaXMucmVsZWFzZWQgPSByZWxlYXNlZDtcbiAgfVxuXG4gIG1hdGNoRmlsZVBhdGgoZmlsZVBhdGgpIHtcbiAgICBjb25zdCBmaWxlUGF0aE1hdGNoZXMgPSAodGhpcy5wYXRoID09PSBmaWxlUGF0aCk7XG5cbiAgICByZXR1cm4gZmlsZVBhdGhNYXRjaGVzO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHsgdHlwZSB9ID0gRmlsZSxcbiAgICAgICAgICBwYXRoID0gdGhpcy5wYXRoLFxuICAgICAgICAgIGNvbnRlbnQgPSB0aGlzLmNvbnRlbnQsXG4gICAgICAgICAgcmVsZWFzZWQgPSB0aGlzLnJlbGVhc2VkLFxuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICB0eXBlLFxuICAgICAgICAgICAgcGF0aCxcbiAgICAgICAgICAgIGNvbnRlbnQsXG4gICAgICAgICAgICByZWxlYXNlZFxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyB0eXBlID0gRklMRV9UWVBFO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uKSB7XG4gICAgbGV0IGZpbGUgPSBudWxsO1xuXG4gICAgaWYgKGpzb24gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHsgdHlwZSB9ID0ganNvbjtcblxuICAgICAgaWYgKHR5cGUgPT09IEZJTEVfVFlQRSkge1xuICAgICAgICBsZXQgeyBjb250ZW50IH0gPSBqc29uO1xuXG4gICAgICAgIGNvbnN0IHsgcGF0aCwgcmVsZWFzZWQgfSA9IGpzb247XG5cbiAgICAgICAgY29udGVudCA9IGNvbnZlcnRDb250ZW50VGFic1RvV2hpdGVzcGFjZShjb250ZW50KTsgIC8vL1xuXG4gICAgICAgIGZpbGUgPSBuZXcgRmlsZShwYXRoLCBjb250ZW50LCByZWxlYXNlZCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZpbGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbURvY3VtZW50KGRvY3VtZW50KSB7XG4gICAgY29uc3QgZmlsZVBhdGggPSBkb2N1bWVudC5nZXRGaWxlUGF0aCgpLFxuICAgICAgICAgIHJlbGVhc2VkID0gZG9jdW1lbnQuaXNSZWxlYXNlZCgpLFxuICAgICAgICAgIHBhdGggPSBmaWxlUGF0aDsgIC8vL1xuXG4gICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRDb250ZW50KCk7XG5cbiAgICBjb250ZW50ID0gY29udmVydENvbnRlbnRUYWJzVG9XaGl0ZXNwYWNlKGNvbnRlbnQpOyAgLy8vXG5cbiAgICBjb25zdCBmaWxlID0gbmV3IEZpbGUocGF0aCwgY29udGVudCwgcmVsZWFzZWQpO1xuXG4gICAgcmV0dXJuIGZpbGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVBhdGhDb250ZW50QW5kUmVsZWFzZWQocGF0aCwgY29udGVudCwgcmVsZWFzZWQpIHtcbiAgICBjb250ZW50ID0gY29udmVydENvbnRlbnRUYWJzVG9XaGl0ZXNwYWNlKGNvbnRlbnQpOyAgLy8vXG5cbiAgICBjb25zdCBmaWxlID0gbmV3IEZpbGUocGF0aCwgY29udGVudCwgcmVsZWFzZWQpO1xuXG4gICAgcmV0dXJuIGZpbGU7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJGaWxlIiwicGF0aCIsImNvbnRlbnQiLCJyZWxlYXNlZCIsImdldFBhdGgiLCJnZXRDb250ZW50IiwiaXNSZWxlYXNlZCIsImlzRmlsZSIsImZpbGUiLCJpc0RpcmVjdG9yeSIsImRpcmVjdG9yeSIsInNldFBhdGgiLCJzZXRDb250ZW50Iiwic2V0UmVsZWFzZWQiLCJtYXRjaEZpbGVQYXRoIiwiZmlsZVBhdGgiLCJmaWxlUGF0aE1hdGNoZXMiLCJ0b0pTT04iLCJ0eXBlIiwianNvbiIsIkZJTEVfVFlQRSIsImZyb21KU09OIiwiY29udmVydENvbnRlbnRUYWJzVG9XaGl0ZXNwYWNlIiwiZnJvbURvY3VtZW50IiwiZG9jdW1lbnQiLCJnZXRGaWxlUGF0aCIsImZyb21QYXRoQ29udGVudEFuZFJlbGVhc2VkIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFLQTs7O2VBQXFCQTs7O3VCQUhLO3lCQUNxQjtBQUVoQyxNQUFNQTtJQUNuQixZQUFZQyxJQUFJLEVBQUVDLE9BQU8sRUFBRUMsUUFBUSxDQUFFO1FBQ25DLElBQUksQ0FBQ0YsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsT0FBTyxHQUFHQTtRQUNmLElBQUksQ0FBQ0MsUUFBUSxHQUFHQTtJQUNsQjtJQUVBQyxVQUFVO1FBQ1IsT0FBTyxJQUFJLENBQUNILElBQUk7SUFDbEI7SUFFQUksYUFBYTtRQUNYLE9BQU8sSUFBSSxDQUFDSCxPQUFPO0lBQ3JCO0lBRUFJLGFBQWE7UUFDWCxPQUFPLElBQUksQ0FBQ0gsUUFBUTtJQUN0QjtJQUVBSSxTQUFTO1FBQ1AsTUFBTUMsT0FBTztRQUViLE9BQU9BO0lBQ1Q7SUFFQUMsY0FBYztRQUNaLE1BQU1DLFlBQVk7UUFFbEIsT0FBT0E7SUFDVDtJQUVBQyxRQUFRVixJQUFJLEVBQUU7UUFDWixJQUFJLENBQUNBLElBQUksR0FBR0E7SUFDZDtJQUVBVyxXQUFXVixPQUFPLEVBQUU7UUFDbEIsSUFBSSxDQUFDQSxPQUFPLEdBQUdBO0lBQ2pCO0lBRUFXLFlBQVlWLFFBQVEsRUFBRTtRQUNwQixJQUFJLENBQUNBLFFBQVEsR0FBR0E7SUFDbEI7SUFFQVcsY0FBY0MsUUFBUSxFQUFFO1FBQ3RCLE1BQU1DLGtCQUFtQixJQUFJLENBQUNmLElBQUksS0FBS2M7UUFFdkMsT0FBT0M7SUFDVDtJQUVBQyxTQUFTO1FBQ1AsTUFBTSxFQUFFQyxJQUFJLEVBQUUsR0FBR2xCLE1BQ1hDLE9BQU8sSUFBSSxDQUFDQSxJQUFJLEVBQ2hCQyxVQUFVLElBQUksQ0FBQ0EsT0FBTyxFQUN0QkMsV0FBVyxJQUFJLENBQUNBLFFBQVEsRUFDeEJnQixPQUFPO1lBQ0xEO1lBQ0FqQjtZQUNBQztZQUNBQztRQUNGO1FBRU4sT0FBT2dCO0lBQ1Q7SUFFQSxPQUFPRCxPQUFPRSxnQkFBUyxDQUFDO0lBRXhCLE9BQU9DLFNBQVNGLElBQUksRUFBRTtRQUNwQixJQUFJWCxPQUFPO1FBRVgsSUFBSVcsU0FBUyxNQUFNO1lBQ2pCLE1BQU0sRUFBRUQsSUFBSSxFQUFFLEdBQUdDO1lBRWpCLElBQUlELFNBQVNFLGdCQUFTLEVBQUU7Z0JBQ3RCLElBQUksRUFBRWxCLE9BQU8sRUFBRSxHQUFHaUI7Z0JBRWxCLE1BQU0sRUFBRWxCLElBQUksRUFBRUUsUUFBUSxFQUFFLEdBQUdnQjtnQkFFM0JqQixVQUFVb0IsSUFBQUEsdUNBQThCLEVBQUNwQixVQUFXLEdBQUc7Z0JBRXZETSxPQUFPLElBQUlSLEtBQUtDLE1BQU1DLFNBQVNDO1lBQ2pDO1FBQ0Y7UUFFQSxPQUFPSztJQUNUO0lBRUEsT0FBT2UsYUFBYUMsUUFBUSxFQUFFO1FBQzVCLE1BQU1ULFdBQVdTLFNBQVNDLFdBQVcsSUFDL0J0QixXQUFXcUIsU0FBU2xCLFVBQVUsSUFDOUJMLE9BQU9jLFVBQVcsR0FBRztRQUUzQixJQUFJYixVQUFVc0IsU0FBU25CLFVBQVU7UUFFakNILFVBQVVvQixJQUFBQSx1Q0FBOEIsRUFBQ3BCLFVBQVcsR0FBRztRQUV2RCxNQUFNTSxPQUFPLElBQUlSLEtBQUtDLE1BQU1DLFNBQVNDO1FBRXJDLE9BQU9LO0lBQ1Q7SUFFQSxPQUFPa0IsMkJBQTJCekIsSUFBSSxFQUFFQyxPQUFPLEVBQUVDLFFBQVEsRUFBRTtRQUN6REQsVUFBVW9CLElBQUFBLHVDQUE4QixFQUFDcEIsVUFBVyxHQUFHO1FBRXZELE1BQU1NLE9BQU8sSUFBSVIsS0FBS0MsTUFBTUMsU0FBU0M7UUFFckMsT0FBT0s7SUFDVDtBQUNGIn0=