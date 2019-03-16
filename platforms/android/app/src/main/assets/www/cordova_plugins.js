cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "cordova-sqlite-legacy.SQLitePlugin",
    "file": "plugins/cordova-sqlite-legacy/www/SQLitePlugin.js",
    "pluginId": "cordova-sqlite-legacy",
    "clobbers": [
      "SQLitePlugin"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-whitelist": "1.3.3",
  "cordova-sqlite-legacy": "3.0.0"
};
// BOTTOM OF METADATA
});