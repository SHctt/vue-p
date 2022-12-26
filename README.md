# Vue.js 前端应用 #11：上传文件

基于 auth 分支，在 vue 里面处理用户上传文件的的问题。

## 11.1 选择文件用的文件字段

## 11.2 使用 FileReader 生成预览图像

用户在使用选择文件，选择了一个图像文件以后，想在界面上显示一个预览图像。可以使用一个叫 FileReader 的 Web 接口。它可以读取文件内容，我们可以使用 FileReader 把用户选择的文件内容读取成 base64 格式的数据，然后把这个数据的值作为一个图像标签的 src 属性的值，这样就可以显示这个图像了。
