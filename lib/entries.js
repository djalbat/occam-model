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
const _necessary = require("necessary");
const _file = /*#__PURE__*/ _interop_require_default(require("./file"));
const _files = /*#__PURE__*/ _interop_require_default(require("./files"));
const _directory = /*#__PURE__*/ _interop_require_default(require("./directory"));
const _bnf = /*#__PURE__*/ _interop_require_default(require("./mixins/bnf"));
const _files1 = /*#__PURE__*/ _interop_require_default(require("./mixins/files"));
const _metaJSON = /*#__PURE__*/ _interop_require_default(require("./mixins/metaJSON"));
const _vocabulary = /*#__PURE__*/ _interop_require_default(require("./mixins/vocabulary"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const { first, filter } = _necessary.arrayUtilities, { topmostDirectoryNameFromPath } = _necessary.pathUtilities;
class Entries {
    constructor(array){
        this.array = array;
    }
    getArray() {
        return this.array;
    }
    getTopmostDirectoryName() {
        let topmostDirectoryName = null;
        const firstEntry = first(this.array); ///
        if (firstEntry) {
            const firstEntryPath = firstEntry.getPath();
            topmostDirectoryName = topmostDirectoryNameFromPath(firstEntryPath);
            if (topmostDirectoryName === null) {
                topmostDirectoryName = firstEntryPath; ///
            }
        }
        return topmostDirectoryName;
    }
    removeFileByPath(path) {
        filter(this.array, (entry)=>{
            const entryFile = entry.isFile();
            if (entryFile) {
                const file = entry, filePath = file.getPath();
                if (filePath === path) {
                    return false;
                }
            }
            return true;
        });
    }
    findFile(filePath) {
        const files = this.getFiles(), file = files.findFile((file)=>{
            const filePathMatches = file.matchFilePath(filePath);
            if (filePathMatches) {
                return true;
            }
        }) || null;
        return file;
    }
    getFiles() {
        const files = _files.default.fromNothing();
        this.mapEntry((entry)=>{
            const entryFile = entry.isFile();
            if (entryFile) {
                const file = entry; ///
                files.addFile(file);
            }
        });
        return files;
    }
    getFilePaths() {
        const filePaths = this.reduceEntry((filePaths, entry)=>{
            const entryFile = entry.isFile();
            if (entryFile) {
                const file = entry, filePath = file.getPath();
                filePaths.push(filePath);
            }
            return filePaths;
        }, []);
        return filePaths;
    }
    getDirectoryPaths() {
        const directoryPaths = this.reduceEntry((directoryPaths, entry)=>{
            const entryDirectory = entry.isDirectory();
            if (entryDirectory) {
                const directory = entry, directoryPath = directory.getPath();
                directoryPaths.push(directoryPath);
            }
            return directoryPaths;
        }, []);
        return directoryPaths;
    }
    matchShortenedVersion(shortenedVersion) {
        const version = this.getVersion(), versionMatchesShortenedVersion = version.matchShortenedVersion(shortenedVersion);
        return versionMatchesShortenedVersion;
    }
    addFile(file) {
        const entry = file; ///
        this.addEntry(entry);
    }
    addEntry(entry) {
        this.array.push(entry);
    }
    addDirectory(directory) {
        const entry = directory; ///
        this.addEntry(entry);
    }
    forEachFile(callback) {
        const files = this.getFiles();
        files.forEachFile(callback);
    }
    mapEntry(callback) {
        return this.array.map(callback);
    }
    someEntry(callback) {
        return this.array.some(callback);
    }
    everyEntry(callback) {
        return this.array.every(callback);
    }
    forEachEntry(callback) {
        this.array.forEach(callback);
    }
    reduceEntry(callback, initialValue) {
        return this.array.reduce(callback, initialValue);
    }
    toJSON() {
        const entriesJSON = this.array.map((entry)=>{
            const entryJSON = entry.toJSON();
            return entryJSON;
        }), json = entriesJSON; ///
        return json;
    }
    static fromJSON(json) {
        const array = [], entries = new Entries(array), entriesJSON = json; ///
        entriesJSON.map((entryJSON)=>{
            const json = entryJSON, file = _file.default.fromJSON(json), directory = _directory.default.fromJSON(json), entry = file || directory; ///
            entries.addEntry(entry);
        });
        return entries;
    }
    static fromEntry(entry) {
        const array = [
            entry
        ], entries = new Entries(array);
        return entries;
    }
    static fromNothing() {
        const array = [], entries = new Entries(array);
        return entries;
    }
}
Object.assign(Entries.prototype, _bnf.default);
Object.assign(Entries.prototype, _files1.default);
Object.assign(Entries.prototype, _metaJSON.default);
Object.assign(Entries.prototype, _vocabulary.default);
const _default = Entries;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9lbnRyaWVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBwYXRoVXRpbGl0aWVzLCBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IEZpbGUgZnJvbSBcIi4vZmlsZVwiO1xuaW1wb3J0IEZpbGVzIGZyb20gXCIuL2ZpbGVzXCI7XG5pbXBvcnQgRGlyZWN0b3J5IGZyb20gXCIuL2RpcmVjdG9yeVwiO1xuaW1wb3J0IGJuZk1peGlucyBmcm9tIFwiLi9taXhpbnMvYm5mXCI7XG5pbXBvcnQgZmlsZXNNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2ZpbGVzXCI7XG5pbXBvcnQgbWV0YUpTT05NaXhpbnMgZnJvbSBcIi4vbWl4aW5zL21ldGFKU09OXCI7XG5pbXBvcnQgdm9jYWJ1bGFyeU1peGlucyBmcm9tIFwiLi9taXhpbnMvdm9jYWJ1bGFyeVwiO1xuXG5jb25zdCB7IGZpcnN0LCBmaWx0ZXIgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyB0b3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoIH0gPSBwYXRoVXRpbGl0aWVzO1xuXG5jbGFzcyBFbnRyaWVzIHtcbiAgY29uc3RydWN0b3IoYXJyYXkpIHtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG4gIH1cblxuICBnZXRBcnJheSgpIHtcbiAgICByZXR1cm4gdGhpcy5hcnJheTtcbiAgfVxuXG4gIGdldFRvcG1vc3REaXJlY3RvcnlOYW1lKCkge1xuICAgIGxldCB0b3Btb3N0RGlyZWN0b3J5TmFtZSA9IG51bGw7XG4gICAgXG4gICAgY29uc3QgZmlyc3RFbnRyeSA9IGZpcnN0KHRoaXMuYXJyYXkpOyAvLy9cblxuICAgIGlmIChmaXJzdEVudHJ5KSB7IC8vL1xuICAgICAgY29uc3QgZmlyc3RFbnRyeVBhdGggPSBmaXJzdEVudHJ5LmdldFBhdGgoKTtcblxuICAgICAgdG9wbW9zdERpcmVjdG9yeU5hbWUgPSB0b3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoKGZpcnN0RW50cnlQYXRoKTtcblxuICAgICAgaWYgKHRvcG1vc3REaXJlY3RvcnlOYW1lID09PSBudWxsKSB7XG4gICAgICAgIHRvcG1vc3REaXJlY3RvcnlOYW1lID0gZmlyc3RFbnRyeVBhdGg7ICAvLy9cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdG9wbW9zdERpcmVjdG9yeU5hbWU7XG4gIH1cblxuICByZW1vdmVGaWxlQnlQYXRoKHBhdGgpIHtcbiAgICBmaWx0ZXIodGhpcy5hcnJheSwgKGVudHJ5KSA9PiB7XG4gICAgICBjb25zdCBlbnRyeUZpbGUgPSBlbnRyeS5pc0ZpbGUoKTtcblxuICAgICAgaWYgKGVudHJ5RmlsZSkge1xuICAgICAgICBjb25zdCBmaWxlID0gZW50cnksIC8vL1xuICAgICAgICAgICAgICBmaWxlUGF0aCA9IGZpbGUuZ2V0UGF0aCgpO1xuXG4gICAgICAgIGlmIChmaWxlUGF0aCA9PT0gcGF0aCkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9KTtcbiAgfVxuXG4gIGZpbmRGaWxlKGZpbGVQYXRoKSB7XG4gICAgY29uc3QgZmlsZXMgPSB0aGlzLmdldEZpbGVzKCksXG4gICAgICAgICAgZmlsZSA9IGZpbGVzLmZpbmRGaWxlKChmaWxlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBmaWxlUGF0aE1hdGNoZXMgPSBmaWxlLm1hdGNoRmlsZVBhdGgoZmlsZVBhdGgpO1xuXG4gICAgICAgICAgICBpZiAoZmlsZVBhdGhNYXRjaGVzKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gZmlsZTtcbiAgfVxuXG4gIGdldEZpbGVzKCkge1xuICAgIGNvbnN0IGZpbGVzID0gRmlsZXMuZnJvbU5vdGhpbmcoKTtcblxuICAgIHRoaXMubWFwRW50cnkoKGVudHJ5KSA9PiB7XG4gICAgICBjb25zdCBlbnRyeUZpbGUgPSBlbnRyeS5pc0ZpbGUoKTtcblxuICAgICAgaWYgKGVudHJ5RmlsZSkge1xuICAgICAgICBjb25zdCBmaWxlID0gZW50cnk7IC8vL1xuXG4gICAgICAgIGZpbGVzLmFkZEZpbGUoZmlsZSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZmlsZXM7XG4gIH1cblxuICBnZXRGaWxlUGF0aHMoKSB7XG4gICAgY29uc3QgZmlsZVBhdGhzID0gdGhpcy5yZWR1Y2VFbnRyeSgoZmlsZVBhdGhzLCBlbnRyeSkgPT4ge1xuICAgICAgY29uc3QgZW50cnlGaWxlID0gZW50cnkuaXNGaWxlKCk7XG5cbiAgICAgIGlmIChlbnRyeUZpbGUpIHtcbiAgICAgICAgY29uc3QgZmlsZSA9IGVudHJ5LCAvLy9cbiAgICAgICAgICAgICAgZmlsZVBhdGggPSBmaWxlLmdldFBhdGgoKTtcblxuICAgICAgICBmaWxlUGF0aHMucHVzaChmaWxlUGF0aCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmaWxlUGF0aHM7XG4gICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIGZpbGVQYXRocztcbiAgfVxuXG4gIGdldERpcmVjdG9yeVBhdGhzKCkge1xuICAgIGNvbnN0IGRpcmVjdG9yeVBhdGhzID0gdGhpcy5yZWR1Y2VFbnRyeSgoZGlyZWN0b3J5UGF0aHMsIGVudHJ5KSA9PiB7XG4gICAgICBjb25zdCBlbnRyeURpcmVjdG9yeSA9IGVudHJ5LmlzRGlyZWN0b3J5KCk7XG5cbiAgICAgIGlmIChlbnRyeURpcmVjdG9yeSkge1xuICAgICAgICBjb25zdCBkaXJlY3RvcnkgPSBlbnRyeSwgLy8vXG4gICAgICAgICAgICAgIGRpcmVjdG9yeVBhdGggPSBkaXJlY3RvcnkuZ2V0UGF0aCgpO1xuXG4gICAgICAgIGRpcmVjdG9yeVBhdGhzLnB1c2goZGlyZWN0b3J5UGF0aCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkaXJlY3RvcnlQYXRocztcbiAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gZGlyZWN0b3J5UGF0aHM7XG4gIH1cblxuICBtYXRjaFNob3J0ZW5lZFZlcnNpb24oc2hvcnRlbmVkVmVyc2lvbikge1xuICAgIGNvbnN0IHZlcnNpb24gPSB0aGlzLmdldFZlcnNpb24oKSxcbiAgICAgICAgICB2ZXJzaW9uTWF0Y2hlc1Nob3J0ZW5lZFZlcnNpb24gPSB2ZXJzaW9uLm1hdGNoU2hvcnRlbmVkVmVyc2lvbihzaG9ydGVuZWRWZXJzaW9uKTtcblxuICAgIHJldHVybiB2ZXJzaW9uTWF0Y2hlc1Nob3J0ZW5lZFZlcnNpb247XG4gIH1cblxuICBhZGRGaWxlKGZpbGUpIHtcbiAgICBjb25zdCBlbnRyeSA9IGZpbGU7IC8vL1xuXG4gICAgdGhpcy5hZGRFbnRyeShlbnRyeSk7XG4gIH1cblxuICBhZGRFbnRyeShlbnRyeSkgeyB0aGlzLmFycmF5LnB1c2goZW50cnkpOyB9XG5cbiAgYWRkRGlyZWN0b3J5KGRpcmVjdG9yeSkge1xuICAgIGNvbnN0IGVudHJ5ID0gZGlyZWN0b3J5OyAgLy8vXG5cbiAgICB0aGlzLmFkZEVudHJ5KGVudHJ5KTtcbiAgfVxuXG4gIGZvckVhY2hGaWxlKGNhbGxiYWNrKSB7XG4gICAgY29uc3QgZmlsZXMgPSB0aGlzLmdldEZpbGVzKCk7XG5cbiAgICBmaWxlcy5mb3JFYWNoRmlsZShjYWxsYmFjayk7XG4gIH1cblxuICBtYXBFbnRyeShjYWxsYmFjaykgeyByZXR1cm4gdGhpcy5hcnJheS5tYXAoY2FsbGJhY2spOyB9XG5cbiAgc29tZUVudHJ5KGNhbGxiYWNrKSB7IHJldHVybiB0aGlzLmFycmF5LnNvbWUoY2FsbGJhY2spOyB9XG5cbiAgZXZlcnlFbnRyeShjYWxsYmFjaykgeyByZXR1cm4gdGhpcy5hcnJheS5ldmVyeShjYWxsYmFjayk7IH1cblxuICBmb3JFYWNoRW50cnkoY2FsbGJhY2spIHsgdGhpcy5hcnJheS5mb3JFYWNoKGNhbGxiYWNrKTsgfVxuXG4gIHJlZHVjZUVudHJ5KGNhbGxiYWNrLCBpbml0aWFsVmFsdWUpIHsgcmV0dXJuIHRoaXMuYXJyYXkucmVkdWNlKGNhbGxiYWNrLCBpbml0aWFsVmFsdWUpOyB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IGVudHJpZXNKU09OID0gdGhpcy5hcnJheS5tYXAoKGVudHJ5KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBlbnRyeUpTT04gPSBlbnRyeS50b0pTT04oKTtcbiAgXG4gICAgICAgICAgICByZXR1cm4gZW50cnlKU09OO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGpzb24gPSBlbnRyaWVzSlNPTjsgLy8vXG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uKSB7XG4gICAgY29uc3QgYXJyYXkgPSBbXSxcbiAgICAgICAgICBlbnRyaWVzID0gbmV3IEVudHJpZXMoYXJyYXkpLFxuICAgICAgICAgIGVudHJpZXNKU09OID0ganNvbjsgLy8vXG5cbiAgICBlbnRyaWVzSlNPTi5tYXAoKGVudHJ5SlNPTikgPT4ge1xuICAgICAgY29uc3QganNvbiA9IGVudHJ5SlNPTiwgLy8vXG4gICAgICAgICAgICBmaWxlID0gRmlsZS5mcm9tSlNPTihqc29uKSxcbiAgICAgICAgICAgIGRpcmVjdG9yeSA9IERpcmVjdG9yeS5mcm9tSlNPTihqc29uKSxcbiAgICAgICAgICAgIGVudHJ5ID0gZmlsZSB8fCBkaXJlY3Rvcnk7ICAvLy9cblxuICAgICAgZW50cmllcy5hZGRFbnRyeShlbnRyeSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZW50cmllcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRW50cnkoZW50cnkpIHtcbiAgICBjb25zdCBhcnJheSA9IFtcbiAgICAgICAgICAgIGVudHJ5XG4gICAgICAgICAgXSxcbiAgICAgICAgICBlbnRyaWVzID0gbmV3IEVudHJpZXMoYXJyYXkpO1xuXG4gICAgcmV0dXJuIGVudHJpZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgYXJyYXkgPSBbXSxcbiAgICAgICAgICBlbnRyaWVzID0gbmV3IEVudHJpZXMoYXJyYXkpO1xuXG4gICAgcmV0dXJuIGVudHJpZXM7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihFbnRyaWVzLnByb3RvdHlwZSwgYm5mTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oRW50cmllcy5wcm90b3R5cGUsIGZpbGVzTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oRW50cmllcy5wcm90b3R5cGUsIG1ldGFKU09OTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oRW50cmllcy5wcm90b3R5cGUsIHZvY2FidWxhcnlNaXhpbnMpO1xuXG5leHBvcnQgZGVmYXVsdCBFbnRyaWVzO1xuIl0sIm5hbWVzIjpbImZpcnN0IiwiZmlsdGVyIiwiYXJyYXlVdGlsaXRpZXMiLCJ0b3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoIiwicGF0aFV0aWxpdGllcyIsIkVudHJpZXMiLCJhcnJheSIsImdldEFycmF5IiwiZ2V0VG9wbW9zdERpcmVjdG9yeU5hbWUiLCJ0b3Btb3N0RGlyZWN0b3J5TmFtZSIsImZpcnN0RW50cnkiLCJmaXJzdEVudHJ5UGF0aCIsImdldFBhdGgiLCJyZW1vdmVGaWxlQnlQYXRoIiwicGF0aCIsImVudHJ5IiwiZW50cnlGaWxlIiwiaXNGaWxlIiwiZmlsZSIsImZpbGVQYXRoIiwiZmluZEZpbGUiLCJmaWxlcyIsImdldEZpbGVzIiwiZmlsZVBhdGhNYXRjaGVzIiwibWF0Y2hGaWxlUGF0aCIsIkZpbGVzIiwiZnJvbU5vdGhpbmciLCJtYXBFbnRyeSIsImFkZEZpbGUiLCJnZXRGaWxlUGF0aHMiLCJmaWxlUGF0aHMiLCJyZWR1Y2VFbnRyeSIsInB1c2giLCJnZXREaXJlY3RvcnlQYXRocyIsImRpcmVjdG9yeVBhdGhzIiwiZW50cnlEaXJlY3RvcnkiLCJpc0RpcmVjdG9yeSIsImRpcmVjdG9yeSIsImRpcmVjdG9yeVBhdGgiLCJtYXRjaFNob3J0ZW5lZFZlcnNpb24iLCJzaG9ydGVuZWRWZXJzaW9uIiwidmVyc2lvbiIsImdldFZlcnNpb24iLCJ2ZXJzaW9uTWF0Y2hlc1Nob3J0ZW5lZFZlcnNpb24iLCJhZGRFbnRyeSIsImFkZERpcmVjdG9yeSIsImZvckVhY2hGaWxlIiwiY2FsbGJhY2siLCJtYXAiLCJzb21lRW50cnkiLCJzb21lIiwiZXZlcnlFbnRyeSIsImV2ZXJ5IiwiZm9yRWFjaEVudHJ5IiwiZm9yRWFjaCIsImluaXRpYWxWYWx1ZSIsInJlZHVjZSIsInRvSlNPTiIsImVudHJpZXNKU09OIiwiZW50cnlKU09OIiwianNvbiIsImZyb21KU09OIiwiZW50cmllcyIsIkZpbGUiLCJEaXJlY3RvcnkiLCJmcm9tRW50cnkiLCJPYmplY3QiLCJhc3NpZ24iLCJwcm90b3R5cGUiLCJibmZNaXhpbnMiLCJmaWxlc01peGlucyIsIm1ldGFKU09OTWl4aW5zIiwidm9jYWJ1bGFyeU1peGlucyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBaU5BOzs7ZUFBQTs7OzJCQS9NOEM7NkRBRTdCOzhEQUNDO2tFQUNJOzREQUNBOytEQUNFO2lFQUNHO21FQUNFOzs7Ozs7QUFFN0IsTUFBTSxFQUFFQSxLQUFLLEVBQUVDLE1BQU0sRUFBRSxHQUFHQyx5QkFBYyxFQUNsQyxFQUFFQyw0QkFBNEIsRUFBRSxHQUFHQyx3QkFBYTtBQUV0RCxNQUFNQztJQUNKLFlBQVlDLEtBQUssQ0FBRTtRQUNqQixJQUFJLENBQUNBLEtBQUssR0FBR0E7SUFDZjtJQUVBQyxXQUFXO1FBQ1QsT0FBTyxJQUFJLENBQUNELEtBQUs7SUFDbkI7SUFFQUUsMEJBQTBCO1FBQ3hCLElBQUlDLHVCQUF1QjtRQUUzQixNQUFNQyxhQUFhVixNQUFNLElBQUksQ0FBQ00sS0FBSyxHQUFHLEdBQUc7UUFFekMsSUFBSUksWUFBWTtZQUNkLE1BQU1DLGlCQUFpQkQsV0FBV0UsT0FBTztZQUV6Q0gsdUJBQXVCTiw2QkFBNkJRO1lBRXBELElBQUlGLHlCQUF5QixNQUFNO2dCQUNqQ0EsdUJBQXVCRSxnQkFBaUIsR0FBRztZQUM3QztRQUNGO1FBRUEsT0FBT0Y7SUFDVDtJQUVBSSxp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