function f() {
  if ("<<fileext/>>".toLowerCase() != "txt") return "Bad File Type - Please select TXT File.";
  var path = "<<filespec/>>".replace("file:\/\/", "\\\\").replace("/", "\\");
  var content = getFileContents(path);
  return content;
}
function getFileContents(path) {
  /* Returns all file data as one single string. */
  try {
    var reader = new java.io.BufferedReader(new java.io.FileReader(path));
  } catch(e) {
    return "Cannot Read or Find the File";
  }
  var stringBuilder = new java.lang.StringBuilder();
  var line = null;
  while ((line = reader.readLine()) != null) {
    stringBuilder.append(line);
  }
  reader.close();
  var content = stringBuilder.toString();
  return content;
}

f();
